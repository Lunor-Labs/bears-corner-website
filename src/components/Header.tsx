import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/gallery', label: 'Gallery' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-bear-tan-100' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src="/bears-corner-website/BearsCorner.png" 
                alt="Bears Corner Logo" 
                className="h-12 w-12 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
              />
              <div className="absolute inset-0 bg-bear-gold-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-2xl font-display font-bold transition-colors duration-300 ${
                isScrolled ? 'text-bear-brown-800' : 'text-bear-brown-800'
              }`}>
                Bears Corner
              </h1>
              <p className={`text-sm -mt-1 transition-colors duration-300 ${
                isScrolled ? 'text-bear-brown-600' : 'text-bear-brown-600'
              }`}>
                Ice Cream
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-white bg-bear-gold-500 shadow-lg'
                    : `${isScrolled ? 'text-bear-brown-700' : 'text-bear-brown-700'} hover:text-bear-gold-600 hover:bg-bear-tan-50`
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <div className="absolute inset-0 bg-bear-gold-500 rounded-xl opacity-20 blur-lg"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-3 rounded-xl transition-all duration-300 ${
              isScrolled 
                ? 'text-bear-brown-700 hover:bg-bear-tan-100' 
                : 'text-bear-brown-700 hover:bg-bear-tan-100'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-xl border-b border-bear-tan-200 animate-slide-down">
            <nav className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-white bg-bear-gold-500 shadow-lg'
                      : 'text-bear-brown-700 hover:text-bear-gold-600 hover:bg-bear-tan-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;