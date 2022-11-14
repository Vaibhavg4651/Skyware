import React from 'react'
import Navbar from './Navbar'
import img from '../images/about_us.png'
import { motion } from "framer-motion"
import Footer from './Footer'
function About() {
  return (
    <div className='about'>
   <Navbar />
      <div className='about-part'>
      <div className='about-p-1'>
            <motion.img
    animate={{x:70}} src={img} className='about-image' />
        </div>
      <div className='about-p-2'>
          <p> <strong>skyware</strong> provides cutting-edge Technology solutions for Agri warehouses. Our vision is to revolutionize the post-harvest industry through the data-driven intelligent decision-making system.</p>
        </div>
        
    
      </div>
      <Footer />
    </div>
  )
}

export default About
