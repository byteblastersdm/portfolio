'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../Data/projects';
import Link from 'next/link';
import Image from 'next/image';

type Message = {
  id: number;
  sender: 'bot' | 'user';
  text: string;
  isProjectList?: boolean;
  isDownloadLink?: boolean;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: 'bot', text: "Hello! I'm Saddam's AI Assistant. How can I help you navigate his portfolio today?" }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleOptionClick = (option: string) => {
    const newUserMsg: Message = { id: Date.now(), sender: 'user', text: option };
    setMessages(prev => [...prev, newUserMsg]);

    setTimeout(() => {
      let botResponse: Message;

      if (option === 'Tell me about projects') {
        botResponse = {
          id: Date.now() + 1,
          sender: 'bot',
          text: "I'd be happy to! Here is a curated list of Saddam's featured projects. Click on any to explore its details.",
          isProjectList: true
        };
      } else if (option === 'Download CV & Cover Letter' || option === 'Download CV') {
        botResponse = {
          id: Date.now() + 1,
          sender: 'bot',
          text: "Certainly! You can download a copy of Saddam's resume and cover letter right here:",
          isDownloadLink: true
        };
      } else {
        botResponse = {
          id: Date.now() + 1,
          sender: 'bot',
          text: "Saddam is a passionate Full Stack Developer with 4.5+ years of experience specializing in the PERN stack, AWS, and AI Automation. He loves building scalable, high-impact solutions."
        };
      }

      setMessages(prev => [...prev, botResponse]);
    }, 800);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-[100] p-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.5)] flex items-center justify-center transition-all ${isOpen ? 'hidden' : 'flex'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 40, scale: 0.95, filter: 'blur(10px)' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-6 right-6 z-[100] w-[350px] sm:w-[400px] h-[550px] flex flex-col rounded-3xl overflow-hidden shadow-2xl bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 ring-1 ring-white/5"
          >
            {/* Header */}
            <div className="relative p-5 flex justify-between items-center border-b border-white/5 bg-white/5">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-inner overflow-hidden">
                   <span className="text-white font-bold text-lg">SI</span>
                </div>
                <div>
                  <h3 className="font-bold text-white tracking-wide">Saddam's Assistant</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wider">Online</p>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-5 overflow-y-auto flex flex-col gap-5 scrollbar-none">
              {messages.map((msg) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={msg.id} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] rounded-2xl p-4 text-[14px] leading-relaxed shadow-sm ${msg.sender === 'user' ? 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-br-sm' : 'bg-white/5 backdrop-blur-md text-gray-200 rounded-bl-sm border border-white/10'}`}>
                    <p>{msg.text}</p>
                    
                    {msg.isProjectList && (
                      <div className="mt-4 flex flex-col gap-2">
                        {projects.map(p => (
                          <Link 
                            key={p.id} 
                            href={`/projects/${p.id}`}
                            onClick={() => setIsOpen(false)}
                            className="text-xs bg-white/5 hover:bg-indigo-500/20 text-indigo-300 hover:text-indigo-200 px-4 py-3 rounded-xl border border-white/5 hover:border-indigo-500/30 transition-all flex items-center justify-between group"
                          >
                            <span className="font-medium">{p.name}</span>
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-5px] group-hover:translate-x-0">→</span>
                          </Link>
                        ))}
                      </div>
                    )}

                    {msg.isDownloadLink && (
                      <div className="mt-4 flex flex-col gap-2">
                        <a 
                          href="/Saddam_cv.pdf" 
                          download
                          className="text-sm flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 hover:from-emerald-500/40 hover:to-teal-500/40 text-emerald-400 hover:text-emerald-300 px-4 py-3 rounded-xl border border-emerald-500/30 transition-all font-medium"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                          Download Resume
                        </a>
                        <a 
                          href="/Saddam_Irake_Cover_Letter_Full_Stack_Developer.pdf" 
                          download
                          className="text-sm flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 hover:from-purple-500/40 hover:to-indigo-500/40 text-purple-400 hover:text-purple-300 px-4 py-3 rounded-xl border border-purple-500/30 transition-all font-medium"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                          Cover Letter
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} className="h-2" />
            </div>

            {/* Quick Options */}
            <div className="p-4 bg-black/40 backdrop-blur-md border-t border-white/5">
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-3 px-1">Suggested replies</p>
              <div className="flex flex-wrap gap-2">
                <button 
                  onClick={() => handleOptionClick('Tell me about projects')}
                  className="text-[12px] font-medium bg-white/5 hover:bg-indigo-500/20 hover:text-indigo-300 text-gray-300 px-4 py-2 rounded-full border border-white/10 hover:border-indigo-500/30 transition-all shadow-sm"
                >
                  View Projects
                </button>
                <button 
                  onClick={() => handleOptionClick('Download CV & Cover Letter')}
                  className="text-[12px] font-medium bg-white/5 hover:bg-emerald-500/20 hover:text-emerald-400 text-gray-300 px-4 py-2 rounded-full border border-white/10 hover:border-emerald-500/30 transition-all shadow-sm"
                >
                  Download CV & Letter
                </button>
                <button 
                  onClick={() => handleOptionClick('Who is Saddam?')}
                  className="text-[12px] font-medium bg-white/5 hover:bg-purple-500/20 hover:text-purple-300 text-gray-300 px-4 py-2 rounded-full border border-white/10 hover:border-purple-500/30 transition-all shadow-sm"
                >
                  About Saddam
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
