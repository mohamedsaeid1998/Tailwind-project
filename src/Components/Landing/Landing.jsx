import React from 'react'
import styles from "./Landing.module.scss"
import landingImage from '../../Assets/images/illustration-intro.png'
import Image from '../../Assets/images/bg-curvy-desktop.svg'

export default function Landing() {
  return <>
  <section className="bg-[#1c2230]">
    <div className="container">
<div className='element-center flex-col pt-[200px]'>
<div className='w-[750px] max-w-full'>
        <img src={landingImage} alt="here" className='w-full h-fit'/>
      </div>

      <div className='text-white text-center'>
  <h1 className='text-[25px] md:text-[40px] font-semibold mb-[15px]'>
  All your files in one secure location,
              <br />
              accessible anywhere.
  </h1>
  <p className='font-normal text-sm lg:text-lg px-[15px] md:w-[600px] max-w-full mb-[30px] '>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              iste deserunt totam itaque nisi veniam voluptas vel, eos aliquam
              nulla impedit commodi.
  </p>
      </div>
  <a href="/" className='btn w-[280px] h-[60px] rounded-[30px] element-center text-white font-semibold'>
Get Started
  </a>
</div>
</div>
<div className='w-full h-[200px]'>
  <img src={Image} alt="Image" className='w-full h-full'/>
</div>
  </section>
  </>
}
