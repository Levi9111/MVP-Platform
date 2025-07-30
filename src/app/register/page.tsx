'use client';

import React, { useState } from 'react';
import {
  Bot,
  Sparkles,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  Loader2,
} from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

interface RegisterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

const RegisterPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterForm>();

  const onSubmit = async (data: RegisterForm) => {
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Registration Data:', data);
      setIsLoading(false);
      // Add your register logic here
    }, 2000);
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden p-4'>
      {/* Background decorations */}
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

      {/* Main Register Container */}
      <div className='w-full max-w-md z-10'>
        <div className='glass-effect rounded-2xl shadow-2xl p-8 animate-fade-in-up'>
          {/* Header */}
          <div className='text-center mb-8'>
            <div className='flex justify-center items-center mb-4'>
              <Bot className='w-8 h-8 text-gray-600 animate-float' />
            </div>
            <h1 className='text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-2'>
              Create Your Account
            </h1>
            <p className='text-gray-600 text-sm'>
              Begin your healing journey today!
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
            {/* Name */}
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-gray-700 mb-2'
              >
                Name
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <User className='h-5 w-5 text-gray-400' />
                </div>
                <input
                  id='name'
                  type='text'
                  {...register('name', { required: 'Name is required' })}
                  className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${
                    errors.name
                      ? 'border-red-300 bg-red-50'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                  placeholder='Your full name'
                />
              </div>
              {errors.name && (
                <p className='mt-1 text-sm text-red-600'>
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700 mb-2'
              >
                Email
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <Mail className='h-5 w-5 text-gray-400' />
                </div>
                <input
                  id='email'
                  type='email'
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: 'Enter a valid email',
                    },
                  })}
                  className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${
                    errors.email
                      ? 'border-red-300 bg-red-50'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                  placeholder='you@example.com'
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
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <Lock className='h-5 w-5 text-gray-400' />
                </div>
                <input
                  id='password'
                  type={showPassword ? 'text' : 'password'}
                  {...register('password', {
                    required: 'Password is required',
                    minLength: { value: 6, message: 'Minimum 6 characters' },
                  })}
                  className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${
                    errors.password
                      ? 'border-red-300 bg-red-50'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                  placeholder='Create a strong password'
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute inset-y-0 right-0 pr-3 flex items-center'
                >
                  {showPassword ? (
                    <EyeOff className='h-5 w-5 text-gray-400' />
                  ) : (
                    <Eye className='h-5 w-5 text-gray-400' />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className='mt-1 text-sm text-red-600'>
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor='confirmPassword'
                className='block text-sm font-medium text-gray-700 mb-2'
              >
                Confirm Password
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <Lock className='h-5 w-5 text-gray-400' />
                </div>
                <input
                  id='confirmPassword'
                  type={showConfirm ? 'text' : 'password'}
                  {...register('confirmPassword', {
                    required: 'Please confirm your password',
                    validate: (value) =>
                      value === watch('password') || 'Passwords do not match',
                  })}
                  className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${
                    errors.confirmPassword
                      ? 'border-red-300 bg-red-50'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                  placeholder='Confirm your password'
                />
                <button
                  type='button'
                  onClick={() => setShowConfirm(!showConfirm)}
                  className='absolute inset-y-0 right-0 pr-3 flex items-center'
                >
                  {showConfirm ? (
                    <EyeOff className='h-5 w-5 text-gray-400' />
                  ) : (
                    <Eye className='h-5 w-5 text-gray-400' />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className='mt-1 text-sm text-red-600'>
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Terms and Conditions */}
            <div className='flex items-center'>
              <input
                id='terms'
                type='checkbox'
                {...register('terms', {
                  required: 'You must accept the terms',
                })}
                className='h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded'
              />
              <label htmlFor='terms' className='ml-2 text-sm text-gray-600'>
                I agree to the{' '}
                <span className='text-purple-600 underline hover:text-purple-500 cursor-pointer'>
                  Terms and Conditions
                </span>
              </label>
            </div>
            {errors.terms && (
              <p className='text-sm text-red-600'>{errors.terms.message}</p>
            )}

            {/* Submit Button */}
            <button
              type='submit'
              disabled={isLoading}
              className='w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-4 rounded-xl hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
            >
              {isLoading ? (
                <>
                  <Loader2 className='w-5 h-5 animate-spin' />
                  Creating Account...
                </>
              ) : (
                <>
                  Join Now
                  <ArrowRight className='w-5 h-5' />
                </>
              )}
            </button>
          </form>

          {/* Redirect to Login */}
          <div className='mt-6 text-center'>
            <Link
              href='/login'
              className='text-purple-600 hover:text-purple-500 font-medium transition-colors'
            >
              Already have an account? Log in →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
