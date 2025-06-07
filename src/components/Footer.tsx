import React from 'react';
import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bear-brown-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/BearsCorner.png" 
                alt="Bear's Corner Logo" 
                className="h-10 w-10"
              />
              <div>
                <h3 className="text-xl font-display font-bold">Bear's Corner</h3>
                <p className="text-bear-tan-200 text-sm">Ice Cream</p>
              </div>
            </div>
            <p className="text-bear-tan-300 text-sm leading-relaxed">
              Crafting premium ice cream and artisanal chocolates with love and the finest ingredients since 2020.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-bear-gold-400">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-bear-gold-400 mt-0.5 flex-shrink-0" />
                <p className="text-bear-tan-300 text-sm">
                  123 Sweet Street<br />
                  Dessert District<br />
                  City, State 12345
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-bear-gold-400 flex-shrink-0" />
                <p className="text-bear-tan-300 text-sm">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-bear-gold-400 flex-shrink-0" />
                <p className="text-bear-tan-300 text-sm">hello@bearscorner.com</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-bear-gold-400">Opening Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock size={18} className="text-bear-gold-400 flex-shrink-0" />
                <div className="text-bear-tan-300 text-sm">
                  <p className="font-medium">Mon - Thu</p>
                  <p>10:00 AM - 9:00 PM</p>
                </div>
              </div>
              <div className="text-bear-tan-300 text-sm ml-6">
                <p className="font-medium">Fri - Sat</p>
                <p>10:00 AM - 10:00 PM</p>
              </div>
              <div className="text-bear-tan-300 text-sm ml-6">
                <p className="font-medium">Sunday</p>
                <p>11:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-bear-gold-400">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 bg-bear-brown-800 rounded-lg hover:bg-bear-gold-600 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 bg-bear-brown-800 rounded-lg hover:bg-bear-gold-600 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 bg-bear-brown-800 rounded-lg hover:bg-bear-gold-600 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
            <div className="mt-6">
              <h5 className="text-sm font-medium mb-2 text-bear-gold-400">Newsletter</h5>
              <p className="text-bear-tan-300 text-xs mb-3">Get updates on new flavors and special offers!</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm bg-bear-brown-800 border border-bear-brown-700 rounded-l-lg focus:outline-none focus:border-bear-gold-500"
                />
                <button className="px-4 py-2 bg-bear-gold-600 text-white text-sm rounded-r-lg hover:bg-bear-gold-700 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-bear-brown-800 mt-8 pt-8 text-center">
          <p className="text-bear-tan-400 text-sm">
            © 2024 Bear's Corner Ice Cream. All rights reserved. | Made with ❤️ for ice cream lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;