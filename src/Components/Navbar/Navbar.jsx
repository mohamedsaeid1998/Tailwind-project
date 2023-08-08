import React, { useEffect, useRef, useState } from 'react'
import styles from "./Navbar.module.scss"
import image from "../../Assets/images/logo.svg"


export default function Navbar() {

  const [links, setLinks] = useState(['Features','Team','Signin'])
  const nav = useRef()
  useEffect(()=>{
    window.addEventListener("scroll" , ()=>{
      if(window.scrollY>100){
        nav.current.style.background='#0c1524'
        nav.current.style.padding='20px 0'
      }else{
        nav.current.style.background='transparent'
        nav.current.style.padding='60px 0'
      }
    })
  },[])
  return <>
<header ref={nav} className='pt-[60px] fixed top-0 right-0 left-0 w-[100%] z-50 transition-all duration-300'>
  <div className="container flex mx-auto justify-between items-center flex-col sm:flex-row gap-[30px]">

  <div>
    <a href="/">
      <img src={image} alt="picture is not found "/>
    </a>
  </div>

<nav>
  <ul className='flex gap-[50px]'>
    {links.map((link)=>
    <li key={link}>
      <a className='text-white hover:text-mainColor text-lg opacity-[0.6] hover:opacity-[1] hover:underline transition-all duration-300' href={`./${link.toLowerCase()}`}>{link}</a>
    </li>)}
  </ul>
</nav>
  </div>

</header>
  </>
}
