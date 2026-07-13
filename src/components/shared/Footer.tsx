import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-[#0f1115] px-6 py-16 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-12">
        {/* Logo and Tagline */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">Saddam Irake</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Inspiring creativity and innovation through modern design and scalable software development. Let’s build something amazing together.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            <li>
              <Link href="/about" className="hover:text-indigo-400 transition-colors">
                About Me
              </Link>
            </li>
            <li>
              <Link href="/#experience" className="hover:text-indigo-400 transition-colors">
                Experience
              </Link>
            </li>
            <li>
              <Link href="/#projects" className="hover:text-indigo-400 transition-colors">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-indigo-400 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6">Get in Touch</h3>
          <p className="text-sm text-gray-400 mb-3">
            I’d love to hear from you. Reach out to me via:
          </p>
          <p className="text-indigo-400 font-medium mb-2">
            <Link href="mailto:saddam.irake.786@gmail.com" className="hover:text-indigo-300 transition-colors">
              saddam.irake.786@gmail.com
            </Link>
          </p>
          <p className="text-gray-400 text-sm">Phone: +91 8936846326</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6">Follow Me</h3>
          <div className="flex space-x-5">
            <Link href="https://github.com/byteblastersdm/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <FaGithub size={26} />
            </Link>
            <Link href="https://www.linkedin.com/in/saddam-irake-417a211a2/" target="_blank" className="text-gray-400 hover:text-indigo-400 transition-colors">
              <FaLinkedin size={26} />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto border-t border-gray-800 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Saddam Irake. All Rights Reserved.</p>
        <Link href="/" className="text-sm text-indigo-500 hover:text-indigo-400 transition-colors mt-4 sm:mt-0 font-medium">
          Back to Top ↑
        </Link>
      </div>

      {/* Ambient BG */}
      <div className="absolute h-[300px] w-[300px] bg-indigo-500/10 blur-[100px] bottom-0 left-1/2 -translate-x-1/2 z-[-1]" />
    </footer>
  );
};

export default Footer;
