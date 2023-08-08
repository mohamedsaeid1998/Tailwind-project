import React, { useState } from 'react'
import styles from "./Testmonial.module.scss"
import image from '../../Assets/images/bg-quotes.png'
import TestmonialBox from './../TestmonialBox/TestmonialBox';
import image1 from '../../Assets/images/profile-1.jpg'
import image2 from '../../Assets/images/profile-2.jpg'
import image3 from '../../Assets/images/profile-3.jpg'
export default function Testmonial() {
  const [items, setItems] = useState([
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
      image: image1,
      position: "Founder & CEO, Huddle",
      name: "Ahmed",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
      image: image2,
      position: "Founder & CEO, Huddle",
      name: "Mohamed",
    },
    {
      id: 3,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
      image: image3,
      position: "Founder & CEO, Huddle",
      name: "Eman",
    },
  ])
  return <>
<section className='pb-[250px]'>
  <div className="container relative">
    <div className='absolute left-[20px] top-[-35px]'>
      <img src={image} alt="quotes" />
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] relative z-10'>
      {items.map((item)=>
      <TestmonialBox key={item.id} desc={item.desc} image={item.image} position={item.position} name={item.name}/>
      )}
    </div>

  </div>
</section>
  </>
}
