import React from 'react'
import proPic from '/Users/kharris/Desktop/harris-portfolio/src/images/pro_pic.jpg'

const Hero = () => {
  return (
    <>
    <div className=' pt-20 grid font-nav text-xl bg-clip-text hover:text-transparent bg-gradient-to-br from-green-700 to-indigo-600'>
      <div><img className = 'transform border-0' src={proPic} alt="ProPic"/> </div>
      <div><button className='transform object-right hidden md:block md:rotate-90'>Kenneth Harris</button></div>
    </div>
      
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, ipsam, cum nesciunt natus quo fuga sapiente cumque vitae nemo qui dignissimos, ullam fugit eos iure minima deleniti eius mollitia sit!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, reprehenderit velit! Dolor aliquam ratione saepe quasi expedita recusandae quod sapiente ad ullam provident? Debitis incidunt modi quis nisi necessitatibus hic?
      </p>
    </>
    
    
  )
}

export default Hero
