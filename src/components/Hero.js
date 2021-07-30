import React from 'react'
import proPic from '/Users/kharris/Desktop/harris-portfolio/src/images/pro_pic.jpg'

const Hero = () => {
  return (
    <>
      <div className='flex justify-center mt-4'>
        <img src={proPic} alt="ProPic" className='rounded-full' />

        <p>I'm testing out the blockquote thing I just found out about.  Idk what it does, but I have high hopes.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nobis dolorum quos quibusdam doloremque! Hic esse illo cum. A nobis pariatur facilis aspernatur sapiente ad? Molestiae vero odit veniam quasi!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, doloribus! Amet expedita laboriosam quisquam enim quidem repellendus, modi fugit, porro cupiditate ut sapiente eos et quae laudantium quia ducimus ab.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ut cumque veritatis illo dignissimos voluptatem cupiditate repudiandae odio harum itaque odit nam accusamus maxime eaque, dolor ipsam eius natus ea.
          Iure, nesciunt. Ad iusto laborum odit consequuntur iure vel qui quidem accusamus ab non temporibus vitae id, eius totam aliquid corrupti quaerat similique cumque rerum deleniti ipsam. Nesciunt, deleniti. Recusandae?
          Libero recusandae voluptatum facilis blanditiis impedit dolores itaque officia saepe explicabo iure debitis modi mollitia, neque nemo, deserunt vero. Quaerat error suscipit beatae delectus a voluptatibus ut sequi commodi voluptatem!
        </p>

      </div>
    </>


  )
}

export default Hero
