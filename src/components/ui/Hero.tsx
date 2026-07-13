'use client';
import React from 'react'
import Wrapper from '../shared/Wrapper'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
    const name = "Saddam Irake"
    return (
        <Wrapper className='min-h-screen flex items-center pt-20 pb-10 relative overflow-hidden'>
            <div className="z-10 w-full relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className={`md:text-xl text-lg font-light tracking-[0.2em] text-indigo-400 mb-4`}>HELLO AND WELCOME</p>
                    <h2 className={`font-semibold leading-tight flex gap-2 flex-col`}>
                        <span className='md:text-7xl text-5xl font-extrabold capitalize'>
                            <span className='md:text-5xl text-3xl font-semibold tracking-wider text-gray-300'>I'm </span>
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400'>
                                {name},
                            </span>
                        </span>
                        <span className={`md:text-5xl text-3xl font-bold tracking-wide text-gray-100 mt-2`}>
                            a Full Stack Developer.
                        </span>
                    </h2>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className='md:w-2/3 w-full text-gray-400 md:leading-relaxed md:text-xl text-lg md:mt-8 mt-6'
                    >
                        <p>
                            With 4.5+ years of experience building scalable web, mobile, and desktop applications.
                            Strong expertise in the PERN stack—PostgreSQL, Express.js, React.js, and Node.js—along with Python, AWS, and AI integrations.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className='flex flex-wrap gap-5 md:mt-12 mt-8'
                    >
                        <Link href={'#projects'} className='glassmorphism px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 font-semibold text-white border border-indigo-500/30 hover:border-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]'>
                            View Projects
                        </Link>
                        <Link href='./Saddam_cv.pdf' target='_blank' className='bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-200 transition-all duration-300 font-semibold shadow-[0_0_20px_rgba(255,255,255,0.2)]'>
                            Download CV
                        </Link>
                        <Link href='./Saddam_Irake_Cover_Letter_Full_Stack_Developer.pdf' target='_blank' className='bg-indigo-600 text-white px-8 py-4 rounded-xl hover:bg-indigo-500 transition-all duration-300 font-semibold shadow-[0_0_20px_rgba(99,102,241,0.3)]'>
                            Cover Letter
                        </Link>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className='flex w-full items-center md:mt-20 mt-12 gap-6'
                >
                    <p className='text-gray-400 font-medium tracking-wide uppercase text-sm'>
                        Connect with me
                    </p>
                    <div className='h-[1px] w-12 bg-gray-600'></div>
                    <div className='flex gap-5 items-center'>
                        <Link href='https://www.linkedin.com/in/saddam-irake-417a211a2/' target='_blank' className="text-gray-400 hover:text-indigo-400 hover:scale-110 transition-all duration-300">
                            <FaLinkedin size={28} />
                        </Link>
                        <Link href='https://github.com/byteblastersdm/' target='_blank' className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300">
                            <FaGithub size={28} />
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Ambient Backgrounds */}
            <div className='bg-gradient-blur h-[500px] w-[500px] bg-indigo-600/30 top-0 right-0 translate-x-1/3 -translate-y-1/3' />
            <div className='bg-gradient-blur h-[600px] w-[600px] bg-pink-600/20 bottom-0 left-0 -translate-x-1/4 translate-y-1/4' />
        </Wrapper>
    )
}

export default Hero
