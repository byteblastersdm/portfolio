import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="shadow-md rounded-t-2xl px-6 py-12" style={{ boxShadow: 'rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset' }}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
        {/* Logo and Tagline */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Saddam Irake</h2>
          <p className="text-sm text-gray-600">
            Inspiring creativity and innovation through modern design and development. Let’s build something amazing together.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link href="/about" className="hover:text-blue-500 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-500 transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-blue-500 transition-colors">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-500 transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Get in Touch</h3>
          <p className="text-sm text-gray-600">
            I’d love to hear from you. Reach out to me via:
          </p>
          <p className="mt-2">
            <Link href="mailto:saddam.irake.786@gmail.com" className="hover:text-blue-500 transition-colors">
              saddam.irake.786@gmail.com
            </Link>
          </p>
          <p className="text-gray-600">Phone: +91 7091021058</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="https://www.instagram.com" target="_blank">
              <Image src="/instagram.png" alt="Instagram" width={30} height={30} />
            </Link>
            <Link href="https://www.facebook.com" target="_blank">
              <Image src="/facebook.png" alt="Facebook" width={30} height={30} />
            </Link>
            <Link href="https://www.twitter.com" target="_blank">
              {/* <Image src="/twitter.png" alt="Twitter" width={30} height={30} /> */}
            </Link>
            <Link href="https://www.linkedin.com" target="_blank">
              <Image src="/linkedin.png" alt="LinkedIn" width={30} height={30} />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-gray-600">© 2024 Saddam Irake. All Rights Reserved.</p>
        <p className="text-sm text-gray-600">Powered by Next.js</p>
        <Link href="/" className="text-sm text-blue-500 hover:underline mt-4 sm:mt-0">
          Back to Top ↑
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
