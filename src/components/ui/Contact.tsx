"use client"
import { contacts } from '@/Data/contacts'
import Wrapper from '../shared/Wrapper'
import ContactForm from '@/components/form/ContactForm'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

// Type for the contact data
type ContactInfo = {
    type: string;
    icon: string;
    url: string;
    label: string;
}

const Contact = () => {
    const [contactData, setContactData] = useState<ContactInfo[]>([]);

    // Fetching the contact data from JSON
    useEffect(() => {
        setContactData(contacts);
    }, []);

    return (
        <Wrapper className='min-h-screen relative'>
            <section className=' flex md:flex-row flex-col py-12'>
                <div data-aos="fade-right">
                    <p className="md:text-lg text-base tracking-[5px]">Contacts</p>
                    <h3 className="md:text-[3rem] text-[2rem] font-semibold mt-5">
                        My Contact <span className="font-bold text-gradient">Information</span>
                    </h3>
                </div>

                <div className='md:w-[50%] sm:w-full w-full flex flex-col md:pl-5 pl-5 justify-center'>
                    <h2 className='text-4xl font-bold text-white'>Saddam Irake</h2>
                    <p className='mt-2 md:text-xl text-base font-medium text-indigo-400'>Full Stack Developer</p>
                    <div className="mt-8 flex flex-col gap-4">
                        {contactData && contactData.length > 0 && contactData.map((contact, index) => (
                            <div key={index} className='flex items-center gap-4 text-gray-300 hover:text-white transition-colors group'>
                                <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-indigo-500/20 transition-colors">
                                    <Image src={contact.icon} alt={contact.type} height={20} width={20} className='invert opacity-80 group-hover:opacity-100 transition-opacity' />
                                </div>
                                <Link href={contact.url} target={contact.type === 'email' ? '_self' : '_blank'} className="font-medium text-lg">
                                    {contact.label}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                <ContactForm />
            </section>

            {/* Live Demo Section */}
            <section className="py-16 sm:mb-[6rem] border-t border-gray-800 mt-10">
                <div className="text-center mb-8">
                    <h3 className="md:text-[3rem] text-[2rem] font-semibold text-white">
                        Live <span className="text-gradient font-bold">Demo</span>
                    </h3>
                    <p className="text-gray-400 mt-2">Test drive my latest Restaurant POS System directly from the browser.</p>
                </div>

                <div className="max-w-5xl mx-auto mb-6 flex flex-col md:flex-row justify-between items-center gap-4 bg-gray-900/50 p-4 rounded-2xl border border-gray-800">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold">Rasoi Khata</h4>
                            <p className="text-xs text-gray-400">SaaS POS System</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="text-gray-500">Email:</span>
                            <code className="bg-gray-800 text-indigo-300 px-3 py-1 rounded-md font-mono select-all">sid@rasoi.com</code>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-gray-500">Password:</span>
                            <code className="bg-gray-800 text-indigo-300 px-3 py-1 rounded-md font-mono select-all">admin@123</code>
                        </div>
                    </div>
                </div>

                <div className="glassmorphism p-2 md:p-4 rounded-3xl overflow-hidden shadow-2xl h-[700px] w-full max-w-5xl mx-auto border border-gray-800">
                    <iframe
                        src="https://sid.rasoikhata.com/"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        className="rounded-2xl bg-white"
                    />
                </div>
            </section>

            <div className="absolute h-[400px] w-[400px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 top-0 right-0 z-[-1] opacity-25 blur-[80px]" />
            <div className="absolute h-[400px] w-[400px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 top-1/2 right-[30%] z-[-1] opacity-25 blur-[80px]" />
            <div className="absolute h-[400px] w-[400px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 top-0 left-0 z-[-1] opacity-25 blur-[80px]" />
        </Wrapper>
    );
}

export default Contact;
