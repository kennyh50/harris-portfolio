import React from 'react'
import proPic from '/Users/kharris/Desktop/harris-portfolio/src/images/pro_pic.jpg'

const Hero = () => {
  return (
    <>
      <div>
        <div className='flex'>
          <img src={proPic} alt="ProPic" />
        </div>
        <div>
          <h1>Kenneth Harris </h1>
          <p> Hello!  I see you have made it to my website.  There's not much to see yet, but best believe there will be way more content soon.
            Very soon...</p>
        </div>
      </div>


    </>


  )
}

export default Hero
