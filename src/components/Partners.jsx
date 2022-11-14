import React from 'react'
import Navbar from './Navbar'
import one from '../images/slider/1.png'
import three from '../images/slider/3.png'
import four from '../images/slider/4.png'
import five from '../images/slider/5.png'
import six from '../images/slider/6.jpg'
import sevem from '../images/slider/7.jpg'
import eight from '../images/slider/8.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Footer from './Footer'
function Partners() {
  return (
    <div className='partners'>
        <Navbar />

        <Carousel showArrows={false} className='slid'  dynamicHeight={false} showIndicators={true} showStatus={false} showThumbs={false} centerSlidePercentage={100} centerMode={true} autoFocus={true} infiniteLoop={true} interval={1500} autoPlay={true}  >
                <div>
                    <img src={one} className="slider-i"  alt="partners-photos"/>
                    <p className="leg">
                             
                    The American Center is where the U.S. Embassy conducts people-to-people diplomacy in New Delhi.  We are supported by the American Centre.
                            
                            </p>
                </div>
        
                <div>
                    <img src={three} className="slider-i" alt="partners-photos"/>
                    <p className="leg">
                                We are recognised in the top 50 international startups under BSSC - Startup Wheel competition.
                            </p>
                </div>
                <div>
                    <img src={four} className="slider-i" alt="partner-photos"/>
                    <p className="leg">
                                We are Incubated at Electropreneur Park, New Delhi. EP is an Incubation center for ESDM startups, funded by the (MeitY) and managed by (STPI).
                            </p>
                </div>
                <div>
                    <img src={five} className="slider-i" alt="partners-photos"/>
                    <p className="leg">
                                We were awarded as the winner of i5 Summit 2021, 7th edition of central India’s largest entrepreneurship summit. It was hosted by IIM Indore.
                            </p>
                </div>
                <div>
                    <img src={six} className="slider-i" alt="partners-photos"/>
                    <p className="leg">
                                Nexus is our Incubation partner
                                Nexus is a collaboration between the U.S. Embassy, New Delhi and ACIR.
                            </p>
                </div>
                <div>
                    <img src={sevem} className="slider-i" alt="partners-photos"/>
                    <p className="leg">
                                CCS NIAM is an Agri-business Incubator, supported by the Department of Agriculture, Cooperation and Farmers’ Welfare (DAC&amp;FW).
                            </p>
                </div>
                <div>
                    <img src={eight} className="slider-i" alt="partners-photos"/>
                    <p className="leg">   We are recognised and certified by the Department for Promotion of Industry and Internal Trade (DPIIT) under the Startup India scheme.</p>
                </div>
          
            </Carousel>
     <Footer />
    </div>
  )
}

export default Partners
