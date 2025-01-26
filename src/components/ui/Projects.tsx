'use client';
import React from 'react';
import Wrapper from '../shared/Wrapper';
import Aos from 'aos';
import Image from 'next/image';
import Link from 'next/link';
import { IconBrandReact, IconBrandNextjs, IconBrandJavascript, IconBrandHtml5, IconBrandCss3 } from '@tabler/icons-react';  // Add more icons as needed

const projects = [
  {
    name: 'Annadata',
    description: 'This is a project based on collecting extra food from various places. Developed in Next.js.',
    image: '/annadata.png',
    link: 'https://annadata-rk.vercel.app/',
    tech: ['Next.js', 'React', 'Node.js'], // Technologies used
  },
  {
    name: 'Doc-Scheduler',
    description: 'A project for booking appointments with doctors. Developed in Next.js.',
    image: '/doc.png',
    link: 'https://doc-scheduler.vercel.app/',
    tech: ['Next.js', 'React'],
  },
  {
    name: 'New-Flix',
    description: 'A website displaying top Netflix movies and details. Developed in Next.js.',
    image: '/new-flix.png',
    link: 'https://new-flix-ten.vercel.app/',
    tech: ['Next.js', 'React'],
  },
  {
    name: 'JobSection',
    description: 'A website for the latest hiring and internship news.',
    image: '/jobsection.png',
    link: 'https://jobsecton.in/',
    tech: ['React', 'Node.js'],
  },
  {
    name: 'Projects4You',
    description: 'An e-commerce website to purchase IoT devices and get customization.',
    image: '/projects4you.png',
    link: 'https://projects4you.in/',
    tech: ['React', 'Node.js'],
  },
  {
    name: 'Saddam Irake',
    description: 'My old portfolio website designed in HTML, CSS, JS, and PHP.',
    image: '/port.png',
    link: 'https://rathin.rf.gd/',
    tech: ['HTML', 'CSS', 'PHP'],
  },
  {
    name: 'Nexon',
    description: 'A website showcasing IoT projects and functionalities. Developed in PHP.',
    image: '/nexon.png',
    link: 'https://nexon.rf.gd/',
    tech: ['PHP'],
  },
  {
    name: 'Engineer Gyan',
    description: 'A website for content related to engineering students. Designed in PHP.',
    image: '/engineergyan.png',
    link: 'http://engineergyan.great-site.net/',
    tech: ['PHP'],
  },
];

const techIcons = {
  'Next.js': <IconBrandNextjs size={24} />,
  React: <IconBrandReact size={24} />,
  'Node.js': <IconBrandJavascript size={24} />,
  JavaScript: <IconBrandJavascript size={24} />,
  HTML: <IconBrandHtml5 size={24} />,
  CSS: <IconBrandCss3 size={24} />,
  PHP: <IconBrandHtml5 size={24} />,  // Using HTML icon for PHP as a placeholder
};

const Projects = () => {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Wrapper className="relative">
      <div id="projects">
        <div data-aos="fade-right">
          <p className="md:text-lg text-base tracking-[5px]">PROJECTS</p>
          <h3 className="md:text-[3rem] text-[2rem] font-semibold mt-5">
            My Latest <span className="font-bold">Projects</span>
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              target="_blank"
              className="relative bg-gray-100 hover:bg-gray-200 rounded-lg shadow-lg p-6 transition-all duration-300 transform hover:scale-110 hover:z-10 hover:shadow-2xl hover:translate-y-[-15px]"
              data-aos="fade"
            >
              <article>
                <div className="relative w-full h-48">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold mt-4">{project.name}</h4>
                <p className="text-sm text-gray-600 mt-2">{project.description}</p>
                <div className="flex justify-center space-x-4 mt-4">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="text-gray-700">
                      {techIcons[tech] || <IconBrandJavascript size={24} />} {/* Default to JavaScript icon */}
                    </span>
                  ))}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
      <div className="absolute h-[400px] w-[400px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 top-0 right-0 z-[-1] opacity-25 blur-[80px]" />
      <div className="absolute h-[400px] w-[400px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 top-1/2 right-[30%] z-[-1] opacity-25 blur-[80px]" />
      <div className="absolute h-[400px] w-[400px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 top-0 left-0 z-[-1] opacity-25 blur-[80px]" />
    </Wrapper>
  );
};

export default Projects;
