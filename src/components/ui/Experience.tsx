'use client';
import React, { useEffect } from 'react';
import Wrapper from '../shared/Wrapper';
import Aos from 'aos';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'FULL STACK DEVELOPER',
    company: 'LAUNCHX VENTURE PVT. LTD.',
    period: 'Jun 2025 - Current',
    type: '(Projects across SaaS, FinTech, CRM, and AI Automation)',
    points: [
      'Built Voucher Zilla, a digital voucher platform using React.js, React Native, Node.js, and PostgreSQL, where merchants can create and manage promotional offers, customers can discover and redeem vouchers through wallets and QR codes, and admins can manage users, merchants, transactions, and analytics.',
      'Worked onsite in Dubai for 2 months on a Trading Broker Platform, building critical modules using React.js, Node.js, PostgreSQL, Prisma, and SQLite, including: Trading account management Deposit and withdrawal systems CRM features for broker operations User onboarding and wallet management.',
      'Architected TripyVerse Travel Platform with CRM, package management, referrals, wallet transactions, coupons, and dynamic itinerary.',
      'Developing an AI-powered multi-tool platform for event scheduling, content generation, voiceovers, hashtags, and business workflow automation.',
      'Stabilized and enhanced a Laravel-based enterprise project by fixing critical bugs, optimizing queries, and implementing custom features.'
    ]
  },
  {
    role: 'SOFTWARE ENGINEER',
    company: 'JAI INFOWAY PVT. LTD.',
    period: 'Apr 2023 - May 2025',
    type: 'Full-time',
    points: [
      'Upgraded and stabilized Intellibooks restaurant & inventory system (Node.js v10 → Latest, Angular 7 → 18).',
      'Improved application performance by 60% through database indexing and query optimization.',
      'Migrated static assets to cloud storage, reducing server load and improving scalability.',
      'Built full-stack restaurant solutions including QR table ordering (Next.js, Node.js, PostgreSQL), Strapi CMS website, and Electron.js desktop app for offline operations.',
      'Developed a React Native social app with Google Maps, real-time chat, and FCM notifications.',
      'Contributed to a GenAI project, integrating a LangChain RAG chatbot with React, Node.js, and Python, deployed on AWS EC2.'
    ]
  },
  {
    role: 'SENIOR ITES EXECUTIVE',
    company: 'IMERIT TECHNOLOGY SERVICES PVT. LTD.',
    period: 'Aug 2018 - Feb 2023',
    type: 'Full-time',
    points: [
      'Worked on Proof of Concept projects involving computer vision, machine learning, geospatial data, image annotation, and data analysis.',
      'Managed and reviewed datasets using QGIS, Dataloop, V7, Python, and MySQL, ensuring accuracy, quality, and timely delivery.',
      'Tested internal tools, identified bugs, reviewed basic code, and supported small feature improvements.',
      'Worked on freelance projects alongside my B.Tech in CSE, developing portfolio websites, business websites, and basic web applications using JavaScript, React.js, Next.js, Python, and MySQL.'
    ]
  }
];

const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <Wrapper className="relative py-20">
      <div id="experience">
        <div data-aos="fade-right" className="mb-16">
          <p className="md:text-lg text-sm tracking-[5px] text-gray-400">MY JOURNEY</p>
          <h3 className="md:text-[3rem] text-[2rem] font-semibold mt-2">
            Work <span className="font-bold text-gradient">Experience</span>
          </h3>
        </div>

        <div className="relative border-l border-gray-700 ml-4 md:ml-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12 ml-8 relative"
            >
              <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-indigo-500 border-4 border-[#0f1115]" />
              <div className="glassmorphism p-6 md:p-8 rounded-xl hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h4 className="text-2xl font-bold text-white">{exp.role}</h4>
                    <p className="text-indigo-400 text-lg font-medium">{exp.company}</p>
                  </div>
                  <div className="inline-block px-4 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-sm font-semibold whitespace-nowrap">
                    {exp.period}
                  </div>
                </div>
                <p className="text-gray-400 mb-4 italic text-sm">{exp.type}</p>
                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <span className="mr-3 text-indigo-500 mt-1">✦</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background gradients */}
      <div className="bg-gradient-blur w-[600px] h-[600px] bg-indigo-500/20 top-0 left-0" />
      <div className="bg-gradient-blur w-[500px] h-[500px] bg-pink-500/20 bottom-0 right-0" />
    </Wrapper>
  );
};

export default Experience;
