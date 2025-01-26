'use client'
import { Allura } from "next/font/google";
import { Oxygen } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const allura = Allura({ weight: ["400"], subsets: ["latin"] });
const oxygen = Oxygen({ weight: ['300', '400', '700'], subsets: ['latin'] })
const navlinks = [
  { name: "HOME", link: "/" },
  { name: "PROJECTS", link: "/projects" },
  { name: "ABOUT", link: "/about" },
];

const socialLinks = [
  { name: "Github", link: "https://github.com/rathin-gorai/", icon: '/github.png' },
  {name:"Instagram",link:"https://www.instagram.com/rathin_gorai/",icon:'/instagram.png'},
  {name:"LinkedIn",link:"https://www.linkedin.com/in/rathin-gorai/",icon:'/linkedin.png'}
]
const Navbar = () => {
  const name = 'Saddam Irake'
  const [isOpened, setIsOpened] = React.useState(false)
  return (
    <header className=' md:h-[80px] h-[70px] w-full   text-black   '>
        <nav className=' hidden lg:w-[1140px] md:w-[768px] sm:w-[640px mx-auto md:flex items-center h-full w-full justify-between '>
          <div>
            <h1 className={`ml-5 text-4xl  ${allura.className}`}><Link href={'/'}>{name}</Link></h1>
          </div>
          <div className="flex items-center gap-4">
            <ul className={`flex gap-5 ${oxygen.className}`}>
              {
                navlinks.map((link,index)=>{
                  return <li key={index} className="font-semibold hover:scale-110 transition duration-500"><Link href={link.link}>{link.name}</Link></li>
                })
              }
              
            </ul>
            <Link href={'/contact'}className="rounded-lg transition duration-500 hover:scale-110 text-base py-2 px-4 hidden md:block bg-gray-700 hover:bg-gray-900 text-gray-200">Contact Me</Link>
          </div>
        </nav>
          {/* // mobile navbar */}
        
          <nav className="flex md:hidden  items-center justify-between h-full w-[90%] mx-auto">
            <div>
              <h1 className={` text-4xl ${allura.className}`}><Link href={'/'}>{name}</Link></h1>
            </div>
            <div className="block relative md:hidden z-[100]" onClick={()=>setIsOpened(!isOpened)}>
                <Image src="/hamburger.png" alt="menu" width={20} height={20} className={isOpened?'invert fixed top-[24px] right-[21.33px]':'invert-[-1'}/>
            </div>
            {isOpened && <div className="fixed z-[99] top-0 left-0 right-0   h-full w-full bg-[#1c1c1c] ">
                    <ul className={`flex flex-col gap-4 py-24 pl-20  text-gray-200 ${oxygen.className}`}>
                    <p className="text-sm tracking-[5px] text-gray-500">MENU</p>

                    {
                      navlinks.map((link,index)=>{
                        return <li key={index} className="text-2xl font-bold" onClick={()=>setIsOpened(!isOpened)}><Link href={link.link}>{link.name}</Link></li>
                      })
                    }
                      <p className="text-sm tracking-[5px] text-gray-500 mt-5">FOLLOW</p>
                      {
                        socialLinks.map((link,index)=>{
                          return <li key={index} className="text-xl font-semibold " onClick={()=>setIsOpened(!isOpened)}><Link href={link.link} target="_blank" className="flex gap-4"><span><Image src={link.icon} alt={link.name} height={24} width={24} className="invert" /></span><span>{link.name}</span></Link></li>
                        })
                      }

                      <p className="tracking-[5px] text-sm text-gray-500">MAIL ME</p>
                      <li className="inline-flex"><Image src={'/email.png'} alt="email" height={24} width={24} className="invert mr-2"/><Link href={'mailto:saddam.irake.786@gmail.com'}>saddam.irake.786@gmail.com</Link></li>
                      

                      <p className="tracking-[5px] text-sm text-gray-500">OR</p>
                      <Link  href={'/contact'}className="rounded-lg text-base py-2 px-4 w-[50%]  bg-gray-700 hover:bg-gray-400 text-gray-200 flex items-center justify-center" onClick={()=>setIsOpened(!isOpened)}>Contact Me</Link>
                    </ul>
                    
                    
            </div>}
          </nav>
        
        
    </header>
  )
}

export default Navbar