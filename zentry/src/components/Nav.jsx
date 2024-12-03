import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);
const Nav = () => {
    useEffect(() => {
     gsap.fromTo('nav',{backgroundColor: 'transparent'},
        {
            backgroundColor:'#333',
            scrollTrigger:{
                trigger:'nav',
                start:'top top',
                end:'+=500',
                scrub: true,
            },
        }
     );
    },[]);
  return (
    <motion.nav 
      className='fixed top-0 w-full z-50 flex justify-between items-center p-4 bg-transparent text-white'
      initial={{ y: -100 }}    
       animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
       <div className="text-xl font-robert-regular">Aniket Datta</div>
       <div className="flex gap-4 ">
        <h3>Hero</h3>
        <h3>About</h3>
        <h3>Projects</h3>
        <h3>Experience</h3>
        <h3>Education</h3>
        <h3>Testimonials</h3>
        <h3>Contact</h3>
        </div>   
    </motion.nav>
  )
}

export default Nav