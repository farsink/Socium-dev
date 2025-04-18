import React from "react";

const Header: React.FC = () => {
  return (
    <header className='bg-transparent py-4'>
      <div className='container mx-auto flex items-center justify-between px-8 font-montserrat'>
        {/* Logo */}
        <div className='text-white text-lg font-bold'>Socium.dev</div>

        {/* Navigation */}
        <nav className='hidden md:flex space-x-6 text-white text-sm'>
          <a href='#' className='hover:text-gray-300'>
            Products
          </a>
          <a href='#' className='hover:text-gray-300'>
            Solutions
          </a>
          <a href='#' className='hover:text-gray-300'>
            Developers
          </a>
          <a href='#' className='hover:text-gray-300'>
            Resources
          </a>
          <a href='#' className='hover:text-gray-300'>
            Pricing
          </a>
        </nav>

        {/* Actions */}
        <div className='flex items-center space-x-4'>
          <a href='#' className='text-white text-sm hidden sm:block md:block hover:text-gray-300'>
            Sign in
          </a>
          <button className='hidden  bg-white text-black text-sm rounded-full px-4 py-2 font-medium sm:flex items-center hover:bg-gray-100'>
            Contact sales <span className='ml-1'>›</span>
          </button>
          <button className='flex sm:hidden bg-white text-black text-sm rounded-full px-4 py-2 font-medium  items-center hover:bg-gray-100'>
           Sign in <span className='ml-1'>›</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
