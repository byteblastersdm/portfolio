'use client';
import React, { useEffect } from 'react';
import Aos from 'aos';
import Wrapper from '../shared/Wrapper';
import { motion } from 'framer-motion';
import { FaReact, FaNode, FaAws, FaDocker, FaGit, FaGithub, FaPython, FaLaravel, FaPhp } from 'react-icons/fa';
import { SiNextdotjs, SiAngular, SiPostgresql, SiSqlite, SiMongodb, SiTypescript, SiElectron, SiGraphql, SiGooglecloud, SiJquery, SiExpress, SiDotnet, SiMysql, SiGitlab, SiPostman, SiJest, SiMocha, SiChai, SiTailwindcss, SiVite } from 'react-icons/si';
import { MdHelpOutline, MdArchitecture } from 'react-icons/md';

const techCategories = [
  {
    name: 'Programming Languages',
    technologies: [
      { name: 'JavaScript', icon: <SiTypescript className="text-yellow-400" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
      { name: 'Python', icon: <FaPython className="text-blue-400" /> },
      { name: 'PHP', icon: <FaPhp className="text-indigo-400" /> },
      { name: 'C#', icon: <MdHelpOutline className="text-green-500" /> },
    ],
  },
  {
    name: 'Frontend Development',
    technologies: [
      { name: 'React.js', icon: <FaReact className="text-blue-400" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
      { name: 'React Native', icon: <FaReact className="text-blue-500" /> },
      { name: 'Angular', icon: <SiAngular className="text-red-500" /> },
      { name: 'jQuery', icon: <SiJquery className="text-blue-300" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
    ],
  },
  {
    name: 'Backend Development',
    technologies: [
      { name: 'Node.js', icon: <FaNode className="text-green-500" /> },
      { name: 'Express.js', icon: <SiExpress className="text-gray-300" /> },
      { name: 'GraphQL', icon: <SiGraphql className="text-pink-500" /> },
      { name: 'ASP.NET Core', icon: <SiDotnet className="text-purple-500" /> },
      { name: 'Laravel', icon: <FaLaravel className="text-red-600" /> },
    ],
  },
  {
    name: 'Databases',
    technologies: [
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-500" /> },
      { name: 'SQL Server', icon: <MdHelpOutline className="text-red-500" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
      { name: 'SQLite', icon: <SiSqlite className="text-blue-300" /> },
    ],
  },
  {
    name: 'DevOps & Cloud',
    technologies: [
      { name: 'AWS EC2 & Lambda', icon: <FaAws className="text-orange-400" /> },
      { name: 'Google Cloud Platform', icon: <SiGooglecloud className="text-blue-400" /> },
      { name: 'Docker', icon: <FaDocker className="text-blue-500" /> },
      { name: 'CI/CD Pipelines', icon: <MdArchitecture className="text-gray-400" /> },
      { name: 'Linux Server', icon: <MdHelpOutline className="text-gray-400" /> },
    ],
  },
  {
    name: 'Tools & Technologies',
    technologies: [
      { name: 'Git & GitHub', icon: <FaGithub className="text-white" /> },
      { name: 'GitLab', icon: <SiGitlab className="text-orange-500" /> },
      { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
      { name: 'Electron.js', icon: <SiElectron className="text-blue-300" /> },
      { name: 'Strapi CMS', icon: <MdHelpOutline className="text-indigo-400" /> },
    ],
  },
  {
    name: 'Testing Frameworks',
    technologies: [
      { name: 'Jest', icon: <SiJest className="text-red-400" /> },
      { name: 'Mocha', icon: <SiMocha className="text-orange-300" /> },
      { name: 'Chai', icon: <SiChai className="text-red-500" /> },
      { name: 'Vitest', icon: <SiVite className="text-yellow-400" /> },
    ],
  },
  {
    name: 'AI & Automation',
    technologies: [
      { name: 'LangChain (RAG)', icon: <MdHelpOutline className="text-indigo-400" /> },
      { name: 'AI Integrations', icon: <MdArchitecture className="text-pink-400" /> },
      { name: 'Chatbot Automation', icon: <MdHelpOutline className="text-blue-400" /> },
    ],
  },
];

const Tech = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <Wrapper className="min-h-screen relative py-20">
      <section className="w-full mx-auto sm:mb-[6rem] px-5 mx:px-0">
        <div id="tech">
          <div data-aos="fade-right" className="mb-12">
            <p className="md:text-lg text-sm tracking-[5px] text-gray-400">TOOLS AND TECH</p>
            <h3 className="md:text-[3rem] text-[2rem] font-semibold mt-2">
              My Technology <span className="font-bold text-gradient">Stack</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {techCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glassmorphism rounded-2xl p-6 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(99,102,241,0.15)] transition-all duration-300 border border-gray-700/50 hover:border-indigo-500/50 group"
              >
                <p className="text-xl font-bold text-white mb-6 group-hover:text-indigo-400 transition-colors">{category.name}</p>
                <div className="flex flex-col gap-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center gap-4 group/item"
                    >
                      <div className="text-2xl p-2 bg-gray-800 rounded-lg group-hover/item:scale-110 transition-transform duration-300">
                        {tech.icon ? tech.icon : <MdHelpOutline className="text-gray-400" />}
                      </div>
                      <p className="text-sm font-medium text-gray-300 group-hover/item:text-white transition-colors">{tech.name}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambient Backgrounds */}
      <div className="bg-gradient-blur h-[400px] w-[400px] bg-pink-500/10 top-1/4 right-0" />
      <div className="bg-gradient-blur h-[500px] w-[500px] bg-indigo-500/10 bottom-1/4 left-0 -translate-x-1/2" />
    </Wrapper>
  );
};

export default Tech;
