'use client'
import { Allura } from "next/font/google";
import { Outfit } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const allura = Allura({ weight: ["400"], subsets: ["latin"] });
const outfit = Outfit({ subsets: ['latin'] });

const navlinks = [
  { name: "HOME", link: "/" },
  { name: "EXPERIENCE", link: "/#experience" },
  { name: "PROJECTS", link: "/#projects" },
  { name: "TECH", link: "/#tech" },
];

const socialLinks = [
  { name: "Github", link: "https://github.com/byteblastersdm/", icon: <FaGithub size={24}/> },
  { name: "LinkedIn", link: "https://www.linkedin.com/in/saddam-irake-417a211a2/", icon: <FaLinkedin size={24}/> }
];

const Navbar = () => {
  const name = 'Saddam Irake';
  const [isOpened, setIsOpened] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`h-[80px] w-full fixed top-0 z-50 transition-all duration-300 ${scrolled ? 'glassmorphism border-b border-gray-800' : 'bg-transparent'}`}>
      <nav className='max-w-7xl mx-auto hidden md:flex items-center h-full w-full justify-between px-6'>
        <div>
          <h1 className={`text-4xl text-white ${allura.className}`}>
            <Link href={'/'}>{name}</Link>
          </h1>
        </div>
        <div className="flex items-center gap-8">
          <ul className={`flex gap-8 ${outfit.className}`}>
            {navlinks.map((link, index) => (
              <li key={index} className="text-gray-300 hover:text-white font-medium hover:scale-110 transition duration-300">
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <Link href={'/contact'} className="rounded-xl transition duration-300 hover:scale-105 font-medium py-2 px-6 hidden md:block border border-indigo-500/50 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300">
            Contact Me
          </Link>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="flex md:hidden items-center justify-between h-full w-full px-5">
        <div>
          <h1 className={`text-3xl text-white ${allura.className}`}>
            <Link href={'/'}>{name}</Link>
          </h1>
        </div>
        <div className="block relative z-[100] cursor-pointer" onClick={() => setIsOpened(!isOpened)}>
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpened ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isOpened ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpened ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </div>

        {isOpened && (
          <div className="fixed z-[99] top-0 left-0 right-0 h-screen w-full bg-[#0f1115]/95 backdrop-blur-lg">
            <ul className={`flex flex-col gap-6 pt-32 px-10 text-gray-200 ${outfit.className}`}>
              <p className="text-xs tracking-[5px] text-gray-500">MENU</p>
              {navlinks.map((link, index) => (
                <li key={index} className="text-3xl font-bold text-white hover:text-indigo-400 transition-colors" onClick={() => setIsOpened(false)}>
                  <Link href={link.link}>{link.name}</Link>
                </li>
              ))}
              
              <div className="mt-8">
                <p className="text-xs tracking-[5px] text-gray-500 mb-4">FOLLOW</p>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <Link key={index} href={link.link} target="_blank" className="text-gray-400 hover:text-white transition-colors">
                      {link.icon}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <p className="tracking-[5px] text-xs text-gray-500 mb-4">MAIL ME</p>
                <Link href={'mailto:saddam.irake.786@gmail.com'} className="text-indigo-400 font-medium break-all">
                  saddam.irake.786@gmail.com
                </Link>
              </div>

              <div className="mt-8">
                <Link href={'/contact'} className="rounded-xl text-lg py-3 px-6 w-full border border-indigo-500/50 bg-indigo-500/10 text-indigo-300 flex items-center justify-center font-medium" onClick={() => setIsOpened(false)}>
                  Contact Me
                </Link>
              </div>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;