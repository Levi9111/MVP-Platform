'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Bot,
  Heart,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Linkedin,
  Instagram,
  Send,
  Sparkles,
  Star,
  Users,
} from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const footerLinks = {
    product: [
      { name: 'Playground', href: '/playground' },
      { name: 'Features', href: '/features' },
      { name: 'Pricing', href: '/pricing' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Story', href: '/story' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Instagram', href: '#', icon: Instagram },
  ];

  return (
    <footer className='footer-glass mt-20 relative overflow-hidden'>
      {/* Floating sparkles */}
      <div className='absolute inset-0 pointer-events-none'>
        <Sparkles className='absolute top-8 left-[10%] w-4 h-4 text-purple-400 animate-sparkle-float opacity-60' />
        <Sparkles
          className='absolute top-16 right-[15%] w-3 h-3 text-pink-400 animate-sparkle-float opacity-40'
          style={{ animationDelay: '1s' }}
        />
        <Sparkles
          className='absolute bottom-20 left-[20%] w-5 h-5 text-blue-400 animate-sparkle-float opacity-50'
          style={{ animationDelay: '2s' }}
        />
        <Star
          className='absolute top-12 left-[60%] w-3 h-3 text-yellow-400 animate-sparkle-float opacity-30'
          style={{ animationDelay: '1.5s' }}
        />
        <Star
          className='absolute bottom-16 right-[25%] w-4 h-4 text-purple-300 animate-sparkle-float opacity-40'
          style={{ animationDelay: '0.5s' }}
        />
      </div>

      {/* Background gradient blobs */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-0 left-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-gradient-wave' />
        <div
          className='absolute bottom-0 right-1/4 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-gradient-wave'
          style={{ animationDelay: '2s' }}
        />
        <div
          className='absolute top-1/2 left-1/2 w-56 h-56 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-gradient-wave'
          style={{ animationDelay: '4s' }}
        />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10'>
        {/* Newsletter Section */}
        <div className='footer-section stagger-footer-1 text-center mb-16 p-8 rounded-2xl bg-gradient-to-r from-purple-50/50 via-pink-50/50 to-blue-50/50 backdrop-blur-sm border border-white/20'>
          <div className='flex items-center justify-center gap-2 mb-4'>
            <Heart className='w-6 h-6 text-pink-500 animate-heart-beat' />
            <h3 className='text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent'>
              Stay Connected with SoulBot
            </h3>
            <Heart
              className='w-6 h-6 text-pink-500 animate-heart-beat'
              style={{ animationDelay: '0.5s' }}
            />
          </div>
          <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
            Join our community of heart-centereds. Get updates on new features,
            wellness tips, and exclusive content.
          </p>

          {!isSubscribed ? (
            <div className='flex flex-col sm:flex-row gap-4 max-w-lg mx-auto'>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email for updates...'
                className='flex-1 px-4 py-3 rounded-full border border-purple-200 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200 bg-white/80 backdrop-blur-sm transition-all duration-300'
              />
              <button
                onClick={handleSubscribe}
                className='bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group animate-newsletter-pulse'
              >
                <Send className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-200' />
                Subscribe
              </button>
            </div>
          ) : (
            <div className='flex items-center justify-center gap-2 text-green-600 font-semibold'>
              <Heart className='w-5 h-5 animate-heart-beat' />
              Thank you for subscribing!
              <Sparkles className='w-5 h-5 animate-sparkle-float' />
            </div>
          )}
        </div>

        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12'>
          {/* Brand Section */}
          <div className='lg:col-span-2 footer-section stagger-footer-2'>
            <Link href='/' className='flex items-center space-x-3 mb-6 group'>
              <div className='relative'>
                <Bot className='text-purple-500 w-10 h-10 logo-glow group-hover:text-purple-600 transition-colors duration-300 transform group-hover:scale-110' />
                <Sparkles className='absolute -top-1 -right-1 w-4 h-4 text-pink-400 animate-sparkle-float opacity-70' />
              </div>
              <span className='text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-gradient-wave'>
                SoulBot
              </span>
            </Link>

            <p className='text-gray-600 mb-6 leading-relaxed'>
              Where technology meets humanity. We&#39;re building a platform
              that understands your heart. Together, we create meaningful
              connections in the digital age.
            </p>

            <div className='flex items-center gap-2 text-sm text-gray-500 mb-4'>
              <Users className='w-4 h-4' />
              <span>Trusted by 10,000+ users worldwide</span>
            </div>

            {/* Contact Info */}
            <div className='space-y-2 text-sm text-gray-600'>
              <div className='flex items-center gap-2'>
                <MapPin className='w-4 h-4 text-purple-500' />
                <span>San Francisco, CA</span>
              </div>
              <div className='flex items-center gap-2'>
                <Mail className='w-4 h-4 text-purple-500' />
                <a
                  href='mailto:hello@soulbot.com'
                  className='footer-link-hover'
                >
                  hello@soulbot.com
                </a>
              </div>
              <div className='flex items-center gap-2'>
                <Phone className='w-4 h-4 text-purple-500' />
                <a href='tel:+1234567890' className='footer-link-hover'>
                  +1 (234) 567-8900
                </a>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div className='footer-section stagger-footer-3'>
            <h4 className='font-semibold text-gray-800 mb-4 text-lg'>
              Product
            </h4>
            <ul className='space-y-3'>
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-gray-600 hover:text-purple-600 transition-all duration-300 footer-link-hover transform hover:translate-x-1'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className='footer-section stagger-footer-4'>
            <h4 className='font-semibold text-gray-800 mb-4 text-lg'>
              Company
            </h4>
            <ul className='space-y-3'>
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-gray-600 hover:text-purple-600 transition-all duration-300 footer-link-hover transform hover:translate-x-1'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className='footer-section stagger-footer-5'>
            <h4 className='font-semibold text-gray-800 mb-4 text-lg'>
              Support
            </h4>
            <ul className='space-y-3'>
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-gray-600 hover:text-purple-600 transition-all duration-300 footer-link-hover transform hover:translate-x-1'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className='footer-section stagger-footer-6 pt-8 border-t border-white/20'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
            {/* Social Links */}
            <div className='flex items-center gap-6'>
              <span className='text-gray-600 font-medium'>Follow us:</span>
              {socialLinks.map((social, index) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className='text-gray-500 hover:text-purple-600 transition-all duration-300 transform hover:scale-110 animate-social-float'
                  style={{ animationDelay: `${index * 0.2}s` }}
                  aria-label={social.name}
                >
                  <social.icon className='w-6 h-6' />
                </Link>
              ))}
            </div>

            {/* Copyright */}
            <div className='flex items-center gap-2 text-gray-500 text-sm'>
              <span>© {new Date().getFullYear()} SoulBot. Made with</span>
              <Heart className='w-4 h-4 text-pink-500 animate-heart-beat' />
              <span>for humanity</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
