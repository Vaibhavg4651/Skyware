import React from 'react'
import Navbar from './Navbar.jsx'
import vision from '../images/vision.jpg'
import { motion } from "framer-motion"
import Footer from './Footer.jsx'
function Home() {
  return (
    <div className='home'>
      <Navbar />
      <motion.div
    animate={{
      scale: [0.1, 1.2, 1, 1],
      rotate: [-90,0],
      borderRadius: ["10%", "10%", "40%", "40%", "10%"],
    }} className='intro'>
        <img src={vision} className='vision' alt='skyware-poster' />
      </motion.div>
      <Footer />
    </div>
  )
}

export default Home
