import React from 'react'
import '../styles/Footer.css'
import Logo from '../Assets/imgs/syedtaha.png'
import facebook from '../Assets/imgs/facebook.svg'
import instagram from '../Assets/imgs/instagram.svg'
import twitter from '../Assets/imgs/twitter.svg'
import youtube from '../Assets/imgs/youtube.svg'
import whatsapp from '../Assets/imgs/whatsapp.svg'

const Footer = () => {
    return (
        <div  id='Footer' className='Footer'>
            <div className='footerLogo'>
                <img src={Logo} alt="Logo" />
            </div>
        
                <ul className='Socials'>
                    <li><a href="#"><img src={facebook} alt="" /></a></li>
                    <li><a href="#"><img src={instagram} alt="" /></a></li>
                    <li><a href="#"><img src={twitter} alt="" /></a></li>
                    <li><a href="#"><img src={whatsapp} alt="" /></a></li>
                    <li><a href="#"><img src={youtube} alt="" /></a></li>
                </ul>
              <div className='PP'>
                  <span>Terms Of Use</span>
                  <span>Privacy Pollicy</span>
              </div>
              <div className='Since'>
                 <span>&copy; 2021 Syed Taha</span>
                    
              </div>
        </div>
    )
}

export default Footer
