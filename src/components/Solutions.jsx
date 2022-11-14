import React from 'react'
import Navbar from './Navbar'
import sol from '../images/solutions.png'
import { motion } from "framer-motion"
import Footer from './Footer'
function Solutions() {
  return (
    <div className='solutions'>
      <Navbar />
      <div className='sol'>
      <div className='sol-part-2'>
        <motion.img
    animate={{
      scale: [0.2, 1, 1, 1, 1],
      rotate: [-40,0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }} className='sol-image' src={sol} />
      </div>
      <div className='sol-part-1'>
    <p> <strong>Skyware</strong>  aspires to trim down these massive losses through IoT and AI-enabled scientific storage systems that forecast spoilage using real-time data modeling and optimize the shelf life of the harvest.
            We provide IoT-based monitoring devices to deeply understand the behaviour of the commodity with respect to the environment it has been kept in with AI-backed virtual assistants for automated maintenance and remote support through our SAAS model.</p>
      </div>
   
      </div>
      <Footer />
    </div>
  )
}

export default Solutions
