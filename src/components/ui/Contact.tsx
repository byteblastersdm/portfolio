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
            <section className=' flex md:flex-row flex-col py-12 sm:mb-[6rem]'>
                <div data-aos="fade-right">
                    <p className="md:text-lg text-base tracking-[5px]">Contacts</p>
                    <h3 className="md:text-[3rem] text-[2rem] font-semibold mt-5">
                        My Contact <span className="font-bold">Information</span>
                    </h3>
                </div>

                <div className='md:w-[50%] sm:w-full w-full flex flex-col md:pl-5 pl-5 justify-center'>
                    <h2 className='text-4xl font-bold '>Saddam Irake</h2>
                    <p className='mt-2 md:text-2xl text-base font-semibold '>Full stack developer</p>
                    {contactData && contactData.length > 0 && contactData.map((contact, index) => (
                        <p key={index} className='mb-3 mt-2 md:text-xl text-sm font-normal flex'>
                            <Image src={contact.icon} alt={contact.type} height={24} width={30} className='mr-4' />
                            <Link href={contact.url} target={contact.type === 'email' ? '_self' : '_blank'}>{contact.label}</Link>
                        </p>
                    ))}
                </div>

                <ContactForm />
                {/* <div className=' absolute h-[400px] md:text-base text-sm w-[400px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 top-0 right-0 z-[-1] opacity-25  blur-[80px]' />
        <div className=' absolute h-[400px] md:text-base text-sm w-[400px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bottom-0 left-0 z-[-1] opacity-25  blur-[80px]' /> */}
            </section>
            <div className="absolute h-[400px] w-[400px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 top-0 right-0 z-[-1] opacity-25 blur-[80px]" />
            <div className="absolute h-[400px] w-[400px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 top-1/2 right-[30%] z-[-1] opacity-25 blur-[80px]" />
            <div className="absolute h-[400px] w-[400px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 top-0 left-0 z-[-1] opacity-25 blur-[80px]" />
        </Wrapper>
    );
}

export default Contact;
