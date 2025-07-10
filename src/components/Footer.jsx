import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMail, FiMapPin, FiFacebook, FiTwitter, FiLinkedin, FiInstagram } = FiIcons;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Bajio Web Solutions</h3>
                <p className="text-gray-400 text-sm">Lebanon, Connecticut</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Your trusted digital partner in Lebanon, CT. We help businesses grow online through 
              innovative web solutions, strategic marketing, and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <SafeIcon icon={FiFacebook} className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <SafeIcon icon={FiTwitter} className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <SafeIcon icon={FiLinkedin} className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <SafeIcon icon={FiInstagram} className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-teal-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-teal-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-teal-400 transition-colors">About</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-teal-400 transition-colors">Services</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-teal-400 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-teal-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-teal-400">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 text-teal-500" />
                <span className="text-gray-300">Lebanon, CT</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-teal-500" />
                <span className="text-gray-300">(860) 555-0123</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="w-5 h-5 text-teal-500" />
                <span className="text-gray-300">info@bajiowebsolutions.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Bajio Web Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;