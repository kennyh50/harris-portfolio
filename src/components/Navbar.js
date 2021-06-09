import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex justify-end lg:border-b border-black' role='navigation'> 
      <div className=''>
        <Link to="/" className='px-4 text-2xl font-extrabold bg-clip-text hover:text-transparent bg-gradient-to-br from-pink-400 to-red-600'> 
          Home
        </Link>
        <Link to="/" className='px-4 text-2xl font-extrabold bg-clip-text hover:text-transparent bg-gradient-to-br from-pink-400 to-red-600'> 
          Projects
        </Link>
        <Link to="/" className='px-4 text-2xl font-extrabold bg-clip-text hover:text-transparent bg-gradient-to-br from-pink-400 to-red-600'> 
          Resume
        </Link>
        <Link to="/" className='px-4 text-2xl font-extrabold bg-clip-text hover:text-transparent bg-gradient-to-br from-pink-400 to-red-600'> 
          Socials
        </Link>
      </div>
     
      <div class="px-4 cursor-pointer md:hidden">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" 
        xmlns="http://www.w3.org/2000/svg"><path 
        fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" 
        clipRule="evenodd" /></svg>
      </div>
    </nav>
  )
};

export default Navbar
