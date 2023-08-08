import React, { useState } from 'react'
import styles from "./Features.module.scss"
import FeaturesBox from './../FeaturesBox/FeaturesBox';
import image1 from '../../Assets/images/icon-access-anywhere.svg'
import image2 from '../../Assets/images/icon-security.svg'
import image3 from '../../Assets/images/icon-collaboration.svg'
import image4 from '../../Assets/images/icon-any-file.svg'
export default function Features() {
  const [items, setItems] = useState([
    {icon:image1,title:'Access your files,anywhere',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.'},
    {icon:image2,title:'Security you can trust',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.'},
    {icon:image3,title:'Real-time collaboration',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.'},
    {icon:image4,title:'Store any type of file',desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.'}
  ])
  return <>
<section>
  <div className="container">
  <div className='grid grid-cols-1 md:grid-cols-2 gap-[100px] w-[865px] mx-auto max-w-full'>
    {items.map((item,index)=>(<FeaturesBox
      key={index}
      title={item.title}
      icon={item.icon} 
      desc={item.desc}
      />
    ))}
  </div>
  </div>
</section>
  </>
}
