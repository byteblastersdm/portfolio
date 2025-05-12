'use client'
import React from 'react'
import Wrapper from '../shared/Wrapper'
import Image from 'next/image'
import Aos from 'aos'
import 'aos/dist/aos.css'
const About = () => {
    React.useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <Wrapper className='min-h-screen relative'>
            <div className='flex gap-4 mt-10 md:mt-0' data-aos='fade' id='about'>
                <div className='w-full md:w-[30%] hidden sm:hidden md:block '>
                    <Image src='character.svg' alt='character' width={500} height={500} />
                </div>
                <div className='w-full md:w-[60%] lg:w-[60%] flex flex-col gap-5'>
                    <p className='tracking-[5px] md:text-lg text-base'>ABOUT ME</p>
                    <h3 className='md:text-[3rem] text-[2rem] font-semibold'>
                        A small<span className='font-bold'> Introduction</span>
                    </h3>
                    <p className='md:text-lg text-base leading-7'>
                        👋 Hi, I'm Saddam Irake — a passionate Full Stack Developer who loves building efficient, scalable, and user-friendly applications. With a deep interest in solving real-world problems through code, I enjoy working across both frontend and backend technologies. I'm constantly learning and exploring new tools to stay ahead in the fast-evolving tech landscape. Whether it's creating intuitive user experiences or architecting robust APIs, I strive to deliver clean and impactful solutions. Let's innovate and grow together in this exciting world of software development! 💡💻🚀
                    </p>


                    <div className='flex flex-col'>
                        <p className='text-lg font-bold md:mb-10 mb-5'>What I like to do</p>
                        <div className='flex gap-4 md:flex-row flex-col'>
                            <article className='bg-gray-200 rounded-md p-5'>
                                <p className='text-lg font-bold'>📖 Exploring Ideas</p>
                                <p className='text-base leading-7'>
                                    I enjoy brainstorming and exploring creative solutions to real-world problems through technology and design thinking.
                                </p>
                            </article>
                            <article className='bg-gray-200 rounded-md p-5'>
                                <p className='text-lg font-bold'>💻 Building Projects</p>
                                <p className='text-base leading-7'>
                                    I love building scalable web applications and experimenting with new tools, frameworks, and architectures.
                                </p>
                            </article>
                            <article className='bg-gray-200 rounded-md p-5'>
                                <p className='text-lg font-bold'>🌍 Traveling</p>
                                <p className='text-base leading-7'>
                                    Traveling allows me to experience diverse cultures, gain fresh perspectives, and recharge with new inspiration.
                                </p>
                            </article>
                        </div>
                    </div>

                </div>
            </div>
            <div className=' absolute h-[400px] md:text-base text-sm w-[400px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 top-0 left-0 z-[-1] opacity-25  blur-[80px]' />
            <div className=' absolute h-[400px] md:text-base text-sm w-[400px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bottom-0 right-0 z-[-1] opacity-25  blur-[80px]' />

        </Wrapper>
    )
}

export default About