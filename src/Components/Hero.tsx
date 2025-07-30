'use client';

import React from 'react';
import { Heart, Bot, Sparkles, Play, ArrowDown } from 'lucide-react';

// Type definitions
interface FloatingElementProps {
  className: string;
  size: number;
  delay?: string;
}

interface CTAButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  onClick?: () => void;
}

// Floating Sparkle Component
const FloatingSparkle: React.FC<FloatingElementProps> = ({
  className,
  size,
  delay = '0s',
}) => {
  return (
    <div
      className={`${className} opacity-30 animate-pulse`}
      style={{
        animation: `sparkleFloat 3s ease-in-out infinite`,
        animationDelay: delay,
      }}
    >
      <Sparkles size={size} />
    </div>
  );
};

// Floating Icon Component
const FloatingIcon: React.FC<{ children: React.ReactNode; delay?: string }> = ({
  children,
  delay = '0s',
}) => {
  return (
    <span
      className='inline-block'
      style={{
        animation: `gentleFloat 4s ease-in-out infinite`,
        animationDelay: delay,
      }}
    >
      {children}
    </span>
  );
};

// CTA Button Component
const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  variant,
  onClick,
}) => {
  const baseClasses =
    'font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2 group transform hover:scale-105 active:scale-95';
  const variantClasses = {
    primary:
      'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-pink-700',
    secondary:
      'border-2 border-purple-300 text-purple-600 hover:bg-purple-50 hover:border-purple-400',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
      type='button'
      aria-label={typeof children === 'string' ? children : undefined}
    >
      {children}
    </button>
  );
};

const Hero: React.FC = () => {
  const handleEnterPlayground = (): void => {
    console.log('Entering playground...');
  };

  const handleLearnMore = (): void => {
    console.log('Learning more...');
  };

  return (
    <>
      <section className='min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden'>
        {/* Floating sparkles with enhanced animations */}
        <FloatingSparkle
          className='absolute top-20 left-16 text-purple-400'
          size={32}
          delay='0s'
        />

        <FloatingSparkle
          className='absolute top-32 right-20 text-pink-400'
          size={24}
          delay='1s'
        />

        <FloatingSparkle
          className='absolute bottom-32 left-20 text-blue-400'
          size={28}
          delay='2s'
        />

        <FloatingSparkle
          className='absolute bottom-20 right-16 text-purple-300'
          size={36}
          delay='1.5s'
        />

        <FloatingSparkle
          className='absolute top-1/2 left-8 text-pink-300'
          size={20}
          delay='0.5s'
        />

        <FloatingSparkle
          className='absolute top-1/3 right-12 text-blue-300'
          size={26}
          delay='2.5s'
        />

        {/* Main content container */}
        <div className='max-w-5xl mx-auto z-10'>
          {/* Enhanced heading with staggered animation */}
          <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent leading-tight mb-6 animate-fade-in-up stagger-1'>
            Where Heart{' '}
            <FloatingIcon>
              <Heart className='inline w-8 h-8 md:w-12 md:h-12 text-pink-500 mx-2 drop-shadow-lg' />
            </FloatingIcon>{' '}
            Meets Mind{' '}
            <FloatingIcon delay='0.5s'>
              <Bot className='inline w-8 h-8 md:w-12 md:h-12 text-gray-600 ml-2 drop-shadow-lg' />
            </FloatingIcon>
          </h1>

          {/* Enhanced subtitle with staggered animation */}
          <p className='text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-4 font-light leading-relaxed animate-slide-in-up stagger-2'>
            Healing the heart through laughter and play
          </p>

          {/* Additional tagline with staggered animation */}
          <p className='text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-12 italic animate-slide-in-up stagger-3'>
            &ldquo;Together, we are everything&rdquo;
          </p>

          {/* CTA buttons with staggered animation */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-up stagger-4'>
            <CTAButton variant='primary' onClick={handleEnterPlayground}>
              <Play className='w-5 h-5 group-hover:scale-110 transition-transform duration-200' />
              Enter the Playground
            </CTAButton>

            <CTAButton variant='secondary' onClick={handleLearnMore}>
              Learn More
            </CTAButton>
          </div>

          {/* Scroll indicator with enhanced animation */}
          <div className='mt-16 animate-slide-in-up stagger-5'>
            <div className='flex flex-col items-center text-gray-400 animate-gentle-bounce cursor-pointer hover:text-gray-600 transition-colors duration-200'>
              <span className='text-sm mb-2'>Scroll to explore</span>
              <ArrowDown className='w-5 h-5' />
            </div>
          </div>
        </div>

        {/* Enhanced background decorative elements */}
        <div className='absolute inset-0 pointer-events-none'>
          <div className='absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse-bg' />
          <div
            className='absolute top-3/4 right-1/4 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse-bg'
            style={{ animationDelay: '1s' }}
          />
          <div
            className='absolute bottom-1/4 left-1/3 w-56 h-56 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse-bg'
            style={{ animationDelay: '2s' }}
          />

          {/* Additional floating elements */}
          <div
            className='absolute top-1/2 right-1/3 w-48 h-48 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse-bg'
            style={{ animationDelay: '3s' }}
          />
          <div
            className='absolute bottom-1/2 left-1/4 w-40 h-40 bg-green-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse-bg'
            style={{ animationDelay: '0.5s' }}
          />
        </div>

        {/* Additional floating particles */}
        <div className='absolute inset-0 pointer-events-none overflow-hidden'>
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className='absolute w-2 h-2 bg-white rounded-full opacity-20'
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + i * 8}%`,
                animation: `gentleFloat ${3 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;
