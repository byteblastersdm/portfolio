import { Oxygen } from 'next/font/google'
import React from 'react'
type WrapperProps = {
    children: React.ReactNode
    className?: string
}

const oxygen = Oxygen({ weight: ['300', '400', '700'], subsets: ['latin'] })
const Wrapper = ({children,className}:WrapperProps) => {
  return (
    <section className={`lg:w-[1140px] md:w-[768px] sm:w-[640px] mx-auto md:py-20 lg:py-24 py-12 px-5 mx:px-0 ${className} ${oxygen.className}`}>
        {children}
    </section>
  )
}

export default Wrapper