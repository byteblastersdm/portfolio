'use client';
import React, { useEffect } from 'react';
import Wrapper from '../shared/Wrapper';
import Aos from 'aos';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IconBrandReact, IconBrandNextjs, IconBrandJavascript, IconBrandHtml5, IconBrandCss3, IconBrandPython, IconBrandCSharp, IconBrandNodejs } from '@tabler/icons-react';
import { projects } from '../../Data/projects';

const techIcons: any = {
  'Next.js': <IconBrandNextjs size={20} />,
  React: <IconBrandReact size={20} />,
  'React Native': <IconBrandReact size={20} />,
  'Node.js': <IconBrandNodejs size={20} />,
  Python: <IconBrandPython size={20} />,
  '.NET Core': <IconBrandCSharp size={20} />,
  JavaScript: <IconBrandJavascript size={20} />,
};

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <Wrapper className="relative py-20">
      <div id="projects">
        <div data-aos="fade-right" className="mb-12">
          <p className="md:text-lg text-sm tracking-[5px] text-gray-400">PORTFOLIO</p>
          <h3 className="md:text-[3rem] text-[2rem] font-semibold mt-2">
            Featured <span className="font-bold text-gradient">Projects</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/projects/${project.id}`}
                className="block h-full group"
              >
                <article className="glassmorphism h-full flex flex-col rounded-2xl overflow-hidden transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_rgba(99,102,241,0.2)] border border-gray-700/50 group-hover:border-indigo-500/50">
                  <div className="relative w-full h-48 overflow-hidden bg-gray-800">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] to-transparent opacity-80" />
                  </div>

                  <div className="p-6 flex flex-col flex-grow z-10 -mt-8">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">{project.name}</h4>
                    <p className="text-sm text-gray-400 mb-4 flex-grow leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-gray-300">
                          {techIcons[tech] || null}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Ambient Backgrounds */}
      <div className="bg-gradient-blur h-[500px] w-[500px] bg-purple-500/10 top-0 right-1/4 -translate-y-1/4" />
      <div className="bg-gradient-blur h-[600px] w-[600px] bg-indigo-500/10 bottom-0 left-1/4 translate-y-1/4" />
    </Wrapper>
  );
};

export default Projects;
