import React from 'react';

const Footer = () => {
  return (
    <div className='w-full h-[100px] bg-white text-gray-800 mt-[100px] shadow-md transition-shadow duration-300 hover:shadow-lg'>
      <div className='max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between items-center px-4'>
        {/* Logo */}
        <div className='mb-4 md:mb-0'>
          <h1 className='text-2xl font-bold'>
            Rad Plants
          </h1>
        </div>
        {/* Social Media Links */}
        <div className='flex gap-6 mb-4 md:mb-0'>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
            className='transition-transform duration-300 hover:scale-110 hover:text-blue-400'
          >
            Twitter
          </a>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
            className='transition-transform duration-300 hover:scale-110 hover:text-blue-600'
          >
            Facebook
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
            className='transition-transform duration-300 hover:scale-110 hover:text-pink-500'
          >
            Instagram
          </a>
          <a
            href='https://linkedin.com'
            target='_blank'
            rel='noopener noreferrer'
            className='transition-transform duration-300 hover:scale-110 hover:text-blue-700'
          >
            LinkedIn
          </a>
        </div>
        {/* Copyright */}
        <div>
          <p className='text-sm'>
            &copy; {new Date().getFullYear()} Akhil Sharma. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
