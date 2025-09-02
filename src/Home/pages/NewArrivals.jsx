import React from 'react'
import CustomLabel from '../../components/CustomLabel'
import CustomHeading from '../../components/CustomHeading'
import ProductCard from '../../components/ProductCard'
import Shirt1 from '../../assets/shirt1.png'
import Shirt2 from '../../assets/shirt2.png'
import short1 from '../../assets/short1.png'
import Pant1 from '../../assets/pant1.png'
import ViewAllButton from '../../components/ViewAllButton'
import Divider from '../../components/Divider'
import shirt3 from '../../assets/shirt3.png'
import shirt4 from '../../assets/shirt4.png'
import shirt5 from '../../assets/shirt5.png'
import pant2 from '../../assets/pant2.png'
import Reveal from '../../components/Reveal'

export default function NewArrivals() {
  return (
 <>
<section className="mt-[72px] ">
   <div className="text-center mb-[55px]"> <CustomHeading text="New Arrivals" /></div>
   <div className="lg:px-[100px] lg:justify-between lg:items-center lg:flex xl:px-[100px] xl:flex xl:justify-between md:px-[80px] md:grid md:grid-cols-2 md:place-items-center flex-wrap justify-center items-center flex gap-[16px]">
    <Reveal delay={'0.1s'}>
     <ProductCard
        image={shirt3} 
        name="Vertical Striped Shirt"
        price="212"
        rating="5.0"
      />
    </Reveal>
       <Reveal delay={'0.15s'}>
       <ProductCard
        image={pant2}
        name="Horizontal Striped Pant"
        price="220"
        rating="4.8"
      />
      </Reveal>
    
       <Reveal delay={'0.2s'}>
       <ProductCard
        image={shirt4}
        name="Casual Shorts"
        price="150"
        rating="4.5"
      />
      </Reveal>
       <Reveal delay={'0.25s'}>
       <ProductCard
        image={shirt5}
        name="Casual Pants"
        price="180"
        rating="4.7"
      />
      </Reveal>
   </div>
    
   <div className="mt-[49px] mb-[64px] items-center flex justify-center"><ViewAllButton /></div>
   <div className="px-[100px]"> <Divider /></div>

     <div className="text-center p-[64px]"> <CustomHeading text="Top selling" /></div>
   <div className="lg:px-[100px] lg:justify-between lg:items-center lg:flex xl:px-[100px] xl:flex xl:justify-between md:px-[80px] md:grid md:grid-cols-2 md:place-items-center flex-wrap justify-center items-center flex gap-[16px]">
    <Reveal delay={'0.3s'}>
     <ProductCard
        image={Shirt1}
        name="Vertical Striped Shirt"
        price="212"
        rating="5.0"
      />
    </Reveal>
       <Reveal delay={'0.35s'}>
       <ProductCard
        image={Shirt2}
        name="Horizontal Striped Shirt"
        price="220"
        rating="4.8"
      />
      </Reveal>
    
       <Reveal delay={'0.4s'}>
       <ProductCard
        image={short1}
        name="Casual Shorts"
        price="150"
        rating="4.5"
      />
      </Reveal>
       <Reveal delay={'0.45s'}>
       <ProductCard
        image={Pant1}
        name="Casual Pants"
        price="180"
        rating="4.7"
      />
      </Reveal>
   </div>
    
   <div className="mt-[39px]  items-center flex justify-center mb-[80px]"><ViewAllButton /></div>
  
</section>
 </>
  )
}
