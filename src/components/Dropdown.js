import React from 'react'
import {Link} from 'react-router-dom'

const Dropdown = ({isOpen,toggle}) => {
  return (
    <div className={isOpen ? 'grid grid-rows-4 text-center items-center' : 'hidden'}
    
      onClick={toggle}>
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
  )
}

export default Dropdown
