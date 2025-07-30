'use client';

import React, { useState } from 'react';
import {
  Heart,
  Bot,
  Sparkles,
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  Loader2,
} from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

interface LoginFormData {
  email: string;
  password: string;
  termsAccepted: boolean;
}

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      email: '',
      password: '',
      termsAccepted: false,
    },
  });

  const onSubmit = (data: LoginFormData) => {
    if (!data.termsAccepted) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Login attempt:', data);
      setIsLoading(false);
      // Add your login logic here
    }, 2000);
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden p-4'>
      {/* Background Blobs */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse-bg'></div>
        <div
          className='absolute top-3/4 right-1/4 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse-bg'
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className='absolute bottom-1/4 left-1/3 w-56 h-56 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse-bg'
          style={{ animationDelay: '4s' }}
        ></div>
      </div>

      {/* Sparkles */}
      <div className='absolute top-20 left-20 text-purple-400 animate-sparkle'>
        <Sparkles size={24} />
      </div>
      <div
        className='absolute top-32 right-20 text-pink-400 animate-sparkle'
        style={{ animationDelay: '1s' }}
      >
        <Sparkles size={20} />
      </div>
      <div
        className='absolute bottom-32 left-16 text-blue-400 animate-sparkle'
        style={{ animationDelay: '2s' }}
      >
        <Sparkles size={28} />
      </div>
      <div
        className='absolute bottom-20 right-24 text-purple-300 animate-sparkle'
        style={{ animationDelay: '1.5s' }}
      >
        <Sparkles size={32} />
      </div>

      {/* Login Card */}
      <div className='w-full max-w-md z-10'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='glass-effect rounded-2xl shadow-2xl p-8 animate-fade-in-up'
        >
          {/* Header */}
          <div className='text-center mb-8'>
            <div className='flex justify-center items-center mb-4'>
              <Heart className='w-8 h-8 text-pink-500 mr-2 animate-float' />
              <Bot
                className='w-8 h-8 text-gray-600 animate-float'
                style={{ animationDelay: '0.5s' }}
              />
            </div>
            <h1 className='text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-2'>
              Welcome Back
            </h1>
            <p className='text-gray-600 text-sm'>
              Ready to continue your healing journey?
            </p>
          </div>

          {/* Form Fields */}
          <div className='space-y-6'>
            {/* Email */}
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700 mb-2'
              >
                Email Address
              </label>
              <div className='relative'>
                <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
                <input
                  id='email'
                  type='email'
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: 'Please enter a valid email',
                    },
                  })}
                  className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${
                    errors.email
                      ? 'border-red-300 bg-red-50'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                  placeholder='your@email.com'
                />
              </div>
              {errors.email && (
                <p className='mt-1 text-sm text-red-600'>
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-700 mb-2'
              >
                Password
              </label>
              <div className='relative'>
                <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
                <input
                  id='password'
                  type={showPassword ? 'text' : 'password'}
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters',
                    },
                  })}
                  className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${
                    errors.password
                      ? 'border-red-300 bg-red-50'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                  placeholder='Enter your password'
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-3 top-1/2 transform -translate-y-1/2'
                >
                  {showPassword ? (
                    <EyeOff className='h-5 w-5 text-gray-400 hover:text-gray-600' />
                  ) : (
                    <Eye className='h-5 w-5 text-gray-400 hover:text-gray-600' />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className='mt-1 text-sm text-red-600'>
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Terms Checkbox */}
            <div>
              <label className='flex items-center text-sm text-gray-600 cursor-pointer gap-2'>
                <input
                  type='checkbox'
                  {...register('termsAccepted', {
                    required: 'You must accept the terms and conditions',
                  })}
                  className='h-4 w-4 text-purple-600 border-gray-300 rounded'
                />
                I accept the{' '}
                <span className='text-purple-600 hover:underline'>
                  Terms and Conditions
                </span>
              </label>
              {errors.termsAccepted && (
                <p className='mt-1 text-sm text-red-600'>
                  {errors.termsAccepted.message as string}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type='submit'
              disabled={isLoading}
              className='w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-4 rounded-xl hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
            >
              {isLoading ? (
                <>
                  <Loader2 className='w-5 h-5 animate-spin' />
                  Signing In...
                </>
              ) : (
                <>
                  Enter the Playground
                  <ArrowRight className='w-5 h-5' />
                </>
              )}
            </button>
          </div>

          {/* Divider */}
          <div className='mt-6 relative'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-gray-200'></div>
            </div>
            <div className='relative flex justify-center text-sm'>
              <span className='px-2 bg-white text-gray-500'>
                New to our community?
              </span>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className='mt-6 text-center'>
            <Link
              href='/register'
              className='text-purple-600 hover:text-purple-500 font-medium transition-colors'
            >
              Create your healing journey →
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
