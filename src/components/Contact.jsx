import React from 'react'
import Navbar from './Navbar'
import { GrLocation } from "react-icons/gr";
import { AiOutlineMail,AiOutlineLinkedin} from "react-icons/ai";
import {FiTwitter} from "react-icons/fi"
import im from '../images/contact.png'
import Footer from './Footer';
function Contact() {
  return (
    <div className='contact'>
   <Navbar />
   <h1 className='hed'>Feel Free To Ask Anything</h1>
      <div className='cont'>
       <div className="cont-part">
          <div><GrLocation  className='logo' />Electropreneur Park, New Delhi</div>
          <div><a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@skyware.in" target="_blank"  rel="noreferrer"><AiOutlineMail  className='logo' />info@skyware.in</a></div>
          <div><a href="https://twitter.com/Skyware_tweets?s=20" target="_blank" rel="noreferrer">< FiTwitter  className='logo'/>Twitter</a></div>
          <div><a href="https://www.linkedin.com/company/skyware-automation" target="_blank" rel="noreferrer"><AiOutlineLinkedin   className='logo'/>LinkedIn</a> </div>
       </div>
       <div className="cont-part2">
         <img src={im} className="cont-image" alt="skyware-logo" />
       </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
