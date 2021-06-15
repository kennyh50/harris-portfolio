import React from 'react'
import { Link } from 'react-router-dom';



const Navbar = ({toggle}) => {
  return (
    <nav className='flex justify-between md:border-b border-black border-opacity-25' role='navigation'> 
      <button className='font-nav pl-4 text-xl bg-clip-text hover:text-transparent bg-gradient-to-br from-green-700 to-indigo-600'>
        Kenneth Harris
      </button>
      <div className='md:block hidden pt-2 pb-2 pr-2 items-center font-sans'>
        <Link to="/" className='px-4 text-xl font-nav bg-clip-text hover:text-transparent bg-gradient-to-br from-pink-400 to-red-600'> 
          Home
        </Link>
        <Link to="/" className='px-4 text-xl font-nav bg-clip-text hover:text-transparent bg-gradient-to-br from-green-400 to-blue-500'> 
          Projects
        </Link>
        <Link to="/" className='px-4 text-xl font-nav bg-clip-text hover:text-transparent bg-gradient-to-br via-indigo-500 from-white to-black'> 
          Resume
        </Link>
        <Link to="/" className='px-4 text-xl font-nav bg-clip-text hover:text-transparent bg-gradient-to-br from-green-700 to-red-600'> 
          Socials
        </Link>
      </div>
     
      <div className="px-4 cursor-wait md:hidden" onClick={toggle}>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" 
        xmlns="http://www.w3.org/2000/svg"><path 
        fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" 
        clipRule="evenodd" /></svg>
      </div>
    </nav>
  )
};

export default Navbar
