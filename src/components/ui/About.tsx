'use client'
import React, { useEffect } from 'react'
import Wrapper from '../shared/Wrapper'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'
import { FaLaptopCode, FaDatabase, FaServer, FaChartLine, FaGraduationCap } from 'react-icons/fa'

const About = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])
    
    return (
        <Wrapper className='min-h-screen relative py-20 flex items-center'>
            <div className='flex gap-12 mt-10 md:mt-0 flex-col lg:flex-row' id='about'>
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className='w-full lg:w-[40%] flex justify-center lg:justify-start items-start pt-10'
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-pink-500 rounded-full blur-[60px] opacity-30 animate-pulse"></div>
                        <img src='character.svg' alt='character' className="relative z-10 w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
                    </div>
                </motion.div>
                
                <div className='w-full lg:w-[60%] flex flex-col gap-6 justify-center' data-aos='fade-left'>
                    <div>
                        <p className='tracking-[5px] md:text-lg text-sm text-gray-400'>ABOUT ME</p>
                        <h3 className='md:text-[3rem] text-[2rem] font-semibold mt-2'>
                            A brief<span className='font-bold text-gradient'> Introduction</span>
                        </h3>
                    </div>
                    
                    <p className='md:text-lg text-base leading-relaxed text-gray-300'>
                        👋 Hi, I'm Saddam Irake, a Full Stack Developer with 4.5+ years of experience building scalable web, mobile, and desktop applications. 
                        I have strong expertise in the PERN stack (PostgreSQL, Express.js, React.js, Node.js) and enjoy crafting end-to-end solutions.
                        <br/><br/>
                        Over the years, I've delivered high-impact solutions across diverse domains including SaaS, FinTech, trading, CRM, inventory, POS, travel, and business automation. 
                        Whether it's optimizing complex database queries or building AI-powered multi-tool platforms, I love tackling challenges that push the boundaries of modern technology.
                    </p>

                    <div className='mt-8'>
                        <p className='text-xl font-bold mb-6 text-white'>Domain Expertise</p>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div className='glassmorphism p-5 rounded-xl flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300'>
                                <div className="p-3 bg-indigo-500/20 rounded-lg text-indigo-400">
                                    <FaChartLine size={24}/>
                                </div>
                                <div>
                                    <h4 className='text-lg font-bold text-gray-100'>FinTech & Trading</h4>
                                    <p className='text-sm text-gray-400 mt-1'>Custom broker platforms, wallets, deposits & withdrawals.</p>
                                </div>
                            </div>
                            
                            <div className='glassmorphism p-5 rounded-xl flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300'>
                                <div className="p-3 bg-pink-500/20 rounded-lg text-pink-400">
                                    <FaLaptopCode size={24}/>
                                </div>
                                <div>
                                    <h4 className='text-lg font-bold text-gray-100'>SaaS & CRM</h4>
                                    <p className='text-sm text-gray-400 mt-1'>Multi-tenant architectures, user workflows, and dashboards.</p>
                                </div>
                            </div>

                            <div className='glassmorphism p-5 rounded-xl flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300'>
                                <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                                    <FaServer size={24}/>
                                </div>
                                <div>
                                    <h4 className='text-lg font-bold text-gray-100'>AI Automation</h4>
                                    <p className='text-sm text-gray-400 mt-1'>LangChain RAG chatbots, WhatsApp bots, and AI scheduling.</p>
                                </div>
                            </div>
                            
                            <div className='glassmorphism p-5 rounded-xl flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300'>
                                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                                    <FaDatabase size={24}/>
                                </div>
                                <div>
                                    <h4 className='text-lg font-bold text-gray-100'>POS & Inventory</h4>
                                    <p className='text-sm text-gray-400 mt-1'>Restaurant systems, QR ordering, and offline desktop apps.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-8'>
                        <p className='text-xl font-bold mb-6 text-white'>Education</p>
                        <div className='glassmorphism p-6 rounded-xl flex items-start gap-5 hover:-translate-y-1 transition-transform duration-300'>
                            <div className="p-4 bg-teal-500/20 rounded-xl text-teal-400">
                                <FaGraduationCap size={28}/>
                            </div>
                            <div>
                                <h4 className='text-xl font-bold text-gray-100'>B.Tech in Computer Science and Engineering (CSE)</h4>
                                <p className='text-lg text-gray-300 mt-1 font-medium'>Radha Govind University (RGU)</p>
                                <p className='text-sm text-gray-500 mt-2 tracking-widest'>2019 - 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Ambient Backgrounds */}
            <div className='bg-gradient-blur h-[400px] w-[400px] bg-indigo-500/20 top-1/4 left-0 -translate-x-1/2' />
            <div className='bg-gradient-blur h-[400px] w-[400px] bg-pink-500/20 bottom-1/4 right-0 translate-x-1/2' />
        </Wrapper>
    )
}

export default About