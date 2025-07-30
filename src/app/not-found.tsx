'use client';

import React from 'react';
import Link from 'next/link';
import { Home, Search, Bot, Heart, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative'>
      <div className='max-w-2xl mx-auto text-center'>
        {/* Icon & Code */}
        <div className='mb-8 animate-fade-in stagger-1'>
          <div className='relative inline-block'>
            <Bot className='w-24 h-24 text-purple-500 mx-auto mb-4 animate-gentle-float opacity-80' />
            <Heart className='absolute -top-2 -right-2 w-6 h-6 text-pink-400 opacity-60' />
          </div>
          <h1 className='text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent'>
            404
          </h1>
        </div>

        {/* Message */}
        <div className='mb-8 animate-fade-in stagger-2'>
          <h2 className='text-2xl md:text-3xl font-semibold text-gray-800 mb-4'>
            Hmm... This path got a little lost
          </h2>
          <p className='text-lg text-gray-600 leading-relaxed'>
            The page you’re looking for isn’t here.
            <br className='hidden sm:block' />
            But don’t worry — let’s get you back to the playground of joy and
            wonder.
          </p>
        </div>

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in stagger-3'>
          <Link
            href='/'
            className='bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 group'
          >
            <Home className='w-5 h-5 group-hover:scale-110 transition-transform' />
            Go Home
          </Link>

          <Link
            href='/playground'
            className='border-2 border-purple-300 text-purple-600 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-purple-50 hover:scale-105 active:scale-95 flex items-center gap-2 group'
          >
            <Search className='w-5 h-5 group-hover:scale-110 transition-transform' />
            Return to the Playground
          </Link>
        </div>

        {/* Back Link */}
        <div className='mt-8 animate-fade-in stagger-4'>
          <button
            onClick={() => window.history.back()}
            className='text-gray-500 hover:text-purple-600 transition-colors duration-300 flex items-center gap-2 mx-auto group'
          >
            <ArrowLeft className='w-4 h-4 group-hover:-translate-x-1 transition-transform' />
            Return to where you left off
          </button>
        </div>
      </div>

      {/* Background decorations */}
      <div className='absolute inset-0 pointer-events-none overflow-hidden'>
        <div className='absolute top-1/4 left-1/4 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30' />
        <div className='absolute bottom-1/4 right-1/4 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30' />
        <div className='absolute top-3/4 left-3/4 w-28 h-28 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30' />
      </div>
    </div>
  );
};

export default NotFound;
