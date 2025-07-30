'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Bot, User, Sparkles } from 'lucide-react';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Playground', href: '/playground' },
  { name: 'About', href: '/about' },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogin = () => {
    console.log('Login clicked');
  };

  return (
    <>
      {/* Global CSS animations for navbar */}
      <style jsx global>{``}</style>

      <nav className='fixed top-0 left-0 w-full z-50 glass-effect shadow-lg animate-nav-slide-in'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center'>
          {/* Enhanced Logo */}
          <Link href='/' className='flex items-center space-x-3 group'>
            <div className='relative'>
              <Bot className='text-purple-500 w-8 h-8 animate-logo-float logo-glow group-hover:text-purple-600 transition-colors duration-300' />
              <Sparkles className='absolute -top-1 -right-1 w-4 h-4 text-pink-400 animate-sparkle-rotate opacity-70' />
            </div>
            <span className='text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-gradient-shift group-hover:scale-105 transition-transform duration-300'>
              SoulBot
            </span>
          </Link>

          {/* Desktop Links */}
          <div className='hidden md:flex space-x-8 items-center'>
            {links.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium text-lg nav-link-hover transform hover:scale-110 hover:-translate-y-1 animate-nav-slide-in stagger-nav-${
                  index + 1
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Enhanced Login Button */}
            <button
              onClick={handleLogin}
              className='ml-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 active:scale-95 flex items-center gap-2 group animate-nav-slide-in stagger-nav-4'
            >
              <User className='w-4 h-4 group-hover:rotate-12 transition-transform duration-200' />
              Login
              <div className='absolute inset-0 rounded-full bg-gradient-to-r from-purple-700 via-pink-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10'></div>
            </button>
          </div>

          {/* Enhanced Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='md:hidden p-3 text-gray-600 hover:text-purple-600 transition-all duration-300 transform hover:scale-110 active:scale-95 rounded-full hover:bg-purple-50'
            aria-label='Toggle menu'
          >
            <div className='relative'>
              {menuOpen ? (
                <X
                  size={24}
                  className='transform rotate-180 transition-transform duration-300'
                />
              ) : (
                <Menu
                  size={24}
                  className='transform transition-transform duration-300'
                />
              )}
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {menuOpen && (
          <div className='md:hidden glass-effect border-t border-white/20 animate-mobile-menu-slide'>
            <div className='px-4 py-6 space-y-4'>
              {links.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium text-lg py-2 px-3 rounded-lg hover:bg-purple-50 transform hover:translate-x-2 animate-mobile-menu-slide`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Login Button */}
              <button
                onClick={() => {
                  handleLogin();
                  setMenuOpen(false);
                }}
                className='w-full mt-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl animate-mobile-menu-slide'
                style={{ animationDelay: '0.4s' }}
              >
                <User className='w-5 h-5 group-hover:rotate-12 transition-transform duration-200' />
                Login
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Enhanced Spacer with gradient border */}
      <div className='h-20 bg-gradient-to-r from-purple-100/20 via-pink-100/20 to-blue-100/20' />

      {/* Floating particles for extra magic */}
      <div className='fixed top-0 left-0 w-full h-20 pointer-events-none z-40 overflow-hidden'>
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className='absolute w-1 h-1 bg-purple-300 rounded-full opacity-40'
            style={{
              left: `${15 + i * 15}%`,
              top: `${10 + i * 2}px`,
              animation: `logoFloat ${2 + i * 0.3}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Navbar;
