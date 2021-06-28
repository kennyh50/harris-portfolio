import React from 'react'
import proPic from '/Users/kharris/Desktop/harris-portfolio/src/images/pro_pic.jpg'

const Hero = () => {
  return (
    <>
      <div>
        <div className='flex justify-center'>
          <img src={proPic} alt="ProPic" />
          <div className=''>
            <h1>Kenneth Harris </h1>
            <p> Web Developer </p>
          </div>
        </div>
      </div>


    </>


  )
}

export default Hero
