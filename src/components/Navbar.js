import React from 'react'
import { Link } from 'react-router-dom';



const Navbar = ({ toggle }) => {
  return (
    <>
      <div>
        <nav className='flex justify-between pt-6' role='navigation'>
          <h1 className='text-3xl dark:text-white font-sans ml-3 pb-8 dark:border-gray-200'>KH</h1>
          <h1 className='md:block hidden pt-2 pb-2 pr-2 items-center font-sans'>
            <Link to="/" className='px-4 text-base font-nav bg-clip-text hover:text-transparent bg-gradient-to-br from-pink-400 to-red-600 dark:text-white'>
              Kenneth Harris
            </Link>
            <Link to="/Projects" className='px-4 text-base font-nav bg-clip-text hover:text-transparent bg-gradient-to-br from-green-400 to-blue-500 dark:text-white'>
              Projects
            </Link>
            <Link to="/Resume" className='px-4 text-base font-nav bg-clip-text hover:text-transparent bg-gradient-to-br via-indigo-500 from-white to-black dark:text-white'>
              Resume
            </Link>
            <Link to='/Contact' className='px-4 text-base font-nav bg-clip-text hover:text-transparent bg-gradient-to-br from-green-700 to-red-600 dark:text-white'>
              CONTACT ME
            </Link>
            <Link to="/Support" className='px-4 text-base font-nav bg-clip-text hover:text-transparent bg-gradient-to-br from-green-700 to-red-600 dark:text-white'>
              Support the Homies!
            </Link>
          </h1>

          <div className="px-4 cursor-wait md:hidden" onClick={toggle}>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"><path
                fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd" /></svg>
          </div>
        </nav>
      </div>

    </>


  )
};

export default Navbar
