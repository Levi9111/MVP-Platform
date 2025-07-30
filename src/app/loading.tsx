'use client';

import React from 'react';
import { Bot } from 'lucide-react';

interface LoadingProps {
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ message = 'Loading...' }) => {
  return (
    <>
      <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50'>
        {/* Bot Icon */}
        <Bot className='w-16 h-16 text-purple-500 animate-pulse mb-6' />

        {/* Loading Message */}
        <p className='text-lg text-gray-600 mb-6 font-medium'>{message}</p>

        {/* Animated Dots */}
        <div className='flex space-x-2'>
          <div className='w-3 h-3 bg-purple-400 rounded-full dot-1' />
          <div className='w-3 h-3 bg-pink-400 rounded-full dot-2' />
          <div className='w-3 h-3 bg-blue-400 rounded-full dot-3' />
        </div>
      </div>
    </>
  );
};

export default Loading;
