import React from 'react'
import styles from "./StayProductive.module.scss"
import image from '../../Assets/images/illustration-stay-productive.png'
import image2 from '../../Assets/images/icon-arrow.svg'
export default function StayProductive() {
  return <>
  <section className='py-[150px]'>
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center">

      <div>
        <img src={image} alt="stay-productive-img" />
      </div>

      <div className='text-white'>

        <h3 className='font-medium text-[35px] leading-[50px]'>
        Stay productive,
            <br />
            wherever you are
        </h3>

        <div className='my-[15px] font-normal text-sm tracking-[0.8px] '>
          <p className='mb-[15px]'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              excepturi incidunt quo deserunt quidem accusamus iure ab earum
              reprehenderit debitis!</p>
          <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              excepturi incidunt quo deserunt quidem accusamus iure ab earum
              reprehenderit debitis!</p>

        </div>

        <a href="/" className='flex items-center gap-[15px] border-b-[2px] border-solid border-mainColor pb-[5px] text-mainColor w-fit hover:text-[#42b0d1] hover:border-[#42b0d1] transition-all duration-200'>
        See how Fylo works
          <img src={image2} alt="arrow-img" className=' object-contain animate-[moveRight_1s_ease-in-out_infinite]'/>
        </a>

      </div>

    </div>
  </section>
  </>
}
