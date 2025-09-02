import React, { useEffect, useRef, useState } from 'react'

export default function Reveal({ delay = '0s', children, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${className} ${visible ? 'opacity-0 animate-fadeInUp' : 'opacity-0'}`}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  )
}


