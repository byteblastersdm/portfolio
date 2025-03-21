import React from 'react'
import { Oxygen } from 'next/font/google'
import Wrapper from '../shared/Wrapper'
import Image from 'next/image'
import Link from 'next/link'
const oxygen = Oxygen({ weight: ['300', '400', '700'], subsets: ['latin'] })
const Hero = () => {
    const name = "Saddam Irake"
    return (
        <Wrapper className='pt-[40%] sm:pt-[30%]'>
            <div >
                <p className={`md:text-xl text-lg font-light tracking-wider `}>HELLO AND WELCOME</p>
                <h2 className={`font-semibold ${oxygen.className} leading-[3rem] flex gap-4 flex-col`}> 
                    <span className='md:text-8xl  text-5xl font-extrabold capitalize '>
                        <span className='md:text-6xl text-3xl font-semibold tracking-wider'>I'm </span>
                        <span className='[text-shadow:2px_2px_5px_black]'>

                        {name},
                        </span>
                    </span>
                    {/* <br /> */}
                    <span className={`md:text-6xl text-2xl font-bold tracking-wider whitespace-nowrap `}> a Full Stack Developer.
                    </span>
                </h2>
                <p className='md:w-1/2 w-full md:leading-[2rem]  md:text-lg  text-base md:mt-5 mt-2'>
                    I am a full stack developer based in Jamshedpur, India. I love to build web applications using React, NextJS, NodeJS, ExpressJS, MongoDB, and other technologies.
                </p>
                <div className='flex gap-5 md:mt-10 mt-5'>
                    <Link href={'#projects'} className='md:px-6 px-5 md:text-lg text-base md:py-3 py-2 rounded-lg bg-gray-700 hover:bg-gray-900 text-white'>My Projects</Link>
                    <Link href='#' target='_blank'>
                    <button className='md:px-6 px-5 md:text-lg text-base md:py-3 py-2 rounded-lg bg-gray-300 hover:bg-gray-300 text-gray-900'>Download CV</button></Link>
                </div>
            </div>
            <div className='flex w-full md:justify-end  mt-10'>
                <p className='flex md:text-lg text-base font-semibold capitalize mr-5'>
                    can follow me on : 
                </p>
                    <div className='flex gap-4 items-center justify-center'>
                        {/* <Link href='https://www.instagram.com' target='_blank'><Image src='/instagram.png' alt='insta' width={30} height={30} /></Link> */}
                        <Link href='https://www.linkedin.com/in/saddam-irake-417a211a2/' target='_blank'><Image src='/linkedin.png' alt='facebook' width={30} height={30} /></Link>
                        <Link href='https://github.com/byteblastersdm/' target='_blank'><Image src='/github.png' alt='facebook' width={30} height={30} /></Link>
                        
                        
                        
                    </div>
            </div>
            {/* will add a background image later */}
            {/* <Image src={'/background.jpg'} alt='background'  height={2400} width={3400}  className='absolute top-0 left-0 md:hidden block z-[-1] opacity-50' /> */}
            <div className=' absolute h-[400px] md:text-base text-sm w-[400px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 top-0 right-0 z-[-1] opacity-25  blur-[80px]'/>
            <div className=' absolute h-[400px] md:text-base text-sm w-[400px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bottom-0 left-0 z-[-1] opacity-25  blur-[80px]'/>
        </Wrapper>
    )
}

export default Hero