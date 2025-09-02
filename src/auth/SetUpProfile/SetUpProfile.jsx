import React, { useMemo, useState } from 'react'
import CustomTextField from '../../components/CustomTextField'
import CustomLabel from '../../components/CustomLabel'
import CustomHeading from '../../components/CustomHeading'
import SubHeading from '../../components/SubHeading'
import Logo from '../../components/Logo'
import SideImage from '../../components/SideImage'
import SignUpImg from "../.././assets/SignUp-Side.png"
import CustomButton from '../../components/CustomButton'
import Select from 'react-select'
import useCountryList from 'react-select-country-list'
import { getNames, getCode } from 'country-list'
import ReactCountryFlag from 'react-country-flag'

export default function SetUpProfile() {
  const [accountType, setAccountType] = useState(null)
  const [country, setCountry] = useState(null)
  const [countryId, setCountryId] = useState('')
  const [showCountryPanel, setShowCountryPanel] = useState(false)
  const [countrySearch, setCountrySearch] = useState('')

  const accountTypeOptions = useMemo(() => [
    { value: 'buyer', label: 'Buyer' },
    { value: 'seller', label: 'Seller' },
  ], [])

  const countryOptions = useCountryList().getData()

  const filteredCountries = useMemo(() => {
    const search = countrySearch.trim().toLowerCase()
    if (!search) return getNames()
    return getNames().filter(n => n.toLowerCase().includes(search))
  }, [countrySearch])

  const selectedCountryCode = useMemo(() => {
    if (!country?.label) return ''
    return getCode(country.label) || ''
  }, [country])

  const isFormValid = Boolean(accountType && country && countryId.trim())

  return (
    <section className="px-[20px] h-screen flex items-center justify-center md:items-center md:flex md:justify-between md:pl-[63px] lg:flex lg:justify-between lg:pl-[63px]">
      <div className="">
        <Logo className=""/>
        <CustomHeading text="Verification" />
        <SubHeading text="Select your country and verify your identity to continue."/>

        <CustomLabel text="Account Type"/>
        <div className="mb-[12px] w-full max-w-[514.99px] h-[50px]">
          <Select
            options={accountTypeOptions}
            value={accountType}
            onChange={setAccountType}
            placeholder="Select Account Type"
            classNamePrefix="rs"
          />
        </div>

        <div className="flex items-center justify-between">
          <CustomLabel text="Your Country"/>
          <button
            type="button"
            onClick={() => setShowCountryPanel(true)}
            className="text-[11px] text-gray-500 hover:text-gray-700"
          >
            View list of available countries
          </button>
        </div>
        <div className="mb-[12px] w-full max-w-[514.99px] h-[50px]">
          <Select
            options={countryOptions}
            value={country}
            onChange={(opt) => {
              setCountry(opt)
              if (opt?.label) setCountryId(getCode(opt.label) || '')
            }}
            placeholder="Select Country"
            formatOptionLabel={(opt) => (
              <div className="flex items-center gap-2">
                <ReactCountryFlag svg countryCode={getCode(opt.label) || ''} />
                <span>{opt.label}</span>
              </div>
            )}
            classNamePrefix="rs"
          />
        </div>

        <CustomLabel text="Country ID"/>
        <div className="w-full max-w-[514.99px] h-[50px]">
          <CustomTextField
            placeholder="Enter Country ID"
            value={countryId}
            onChange={(e) => setCountryId(e.target.value.toUpperCase())}
            className="mb-3"
          />
        </div>

        <div className="mt-[12px] w-full max-w-[514.99px] h-[50px]">
          <CustomButton label='Verify' to={isFormValid ? '/setup-avatar' : null} disabled={!isFormValid}/>
        </div>
      </div>

      <div>
        <SideImage src={SignUpImg}/>
      </div>

      {showCountryPanel && (
        <div className="fixed inset-0 bg-black/40 flex items-start justify-start z-50">
          <div className="bg-white w-[320px] h-[520px] mt-10 ml-4 rounded shadow-lg p-3 overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <p className="font-medium">Available Countries</p>
              <button onClick={() => setShowCountryPanel(false)} className="text-gray-500">×</button>
            </div>
            <input
              type="text"
              value={countrySearch}
              onChange={(e) => setCountrySearch(e.target.value)}
              placeholder="Search Country"
              className="w-full border rounded px-3 py-2 text-sm mb-3"
            />
            <div className="overflow-y-auto h-[420px] pr-1">
              {filteredCountries.map((name) => {
                const code = getCode(name) || ''
                return (
                  <button
                    key={code || name}
                    className="w-full flex items-center gap-2 px-2 py-2 hover:bg-gray-50 rounded text-left"
                    onClick={() => {
                      const opt = { value: code, label: name }
                      setCountry(opt)
                      setCountryId(code)
                      setShowCountryPanel(false)
                    }}
                  >
                    <ReactCountryFlag svg countryCode={code} />
                    <span className="text-sm">{name}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </section>

  )
}
