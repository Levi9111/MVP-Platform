'use client';

import React from 'react';
import { Heart, Gamepad2, Infinity } from 'lucide-react';

const Journey: React.FC = () => {
  return (
    <section className='relative z-10 px-6 py-24 bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50'>
      <div className='max-w-5xl mx-auto text-center mb-16'>
        <h2 className='text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600'>
          Your Healing Journey
        </h2>
        <p className='text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto'>
          From the first spark of self-discovery to shared transformation — we
          walk this path together.
        </p>
      </div>

      {/* Steps */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto'>
        {/* Step 1 */}
        <div className='bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-xl'>
          <Heart className='w-10 h-10 text-pink-500 mb-4 animate-pulse' />
          <h3 className='text-xl font-semibold text-purple-700 mb-2'>
            Discover Your Heart
          </h3>
          <p className='text-gray-600 mb-4'>
            Share your feelings, dreams, and what makes you laugh. We listen
            without judgment.
          </p>
          <div className='w-full h-32 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl' />
        </div>

        {/* Step 2 */}
        <div className='bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-xl'>
          <Gamepad2 className='w-10 h-10 text-purple-500 mb-4 animate-bounce' />
          <h3 className='text-xl font-semibold text-pink-700 mb-2'>
            Play & Explore
          </h3>
          <p className='text-gray-600 mb-4'>
            Engage in personalized activities, games, and creative exercises
            designed just for you.
          </p>
          <div className='w-full h-32 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl' />
        </div>

        {/* Step 3 */}
        <div className='bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-xl'>
          <Infinity className='w-10 h-10 text-blue-500 mb-4 animate-spin-slow' />
          <h3 className='text-xl font-semibold text-blue-700 mb-2'>
            Transform Together
          </h3>
          <p className='text-gray-600 mb-4'>
            Watch as laughter heals, connections deepen, and you become your
            fullest self.
          </p>
          <div className='w-full h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl' />
        </div>
      </div>

      {/* CTA Button */}
      <div className='mt-16 text-center'>
        <button className='bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold animate-newsletter-pulse transition-all duration-300 hover:scale-105 active:scale-95'>
          Start Your Journey
        </button>
      </div>
    </section>
  );
};

export default Journey;
