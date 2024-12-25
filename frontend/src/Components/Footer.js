import React from 'react'
import './Footer.css'

import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div className='footer'>
            <div>
                <div className='footer-data'>
                    <div className="contact-details">
                        <h1>Contact Us</h1>
                        <p>Librarian</p>
                        <p>IMSEC Ghaziabad</p>
                        <p>Ghaziabad- 201015</p>
                        <p>Uttar Pradesh</p>
                        <p>India</p>
                        <p><b>Email:</b>imsec@imsec.ac.in</p>
                    </div>
                    <div className='usefull-links'>
                        <h1>Usefull Links</h1>
                        <a href='http://imsec.ac.in/'>Home</a>
                        <a href='http://imsec.ac.in/campus/library'>Library</a>
                        <a href='http://imsec.ac.in/placements/placement-department/2023-2024'>Placements</a>
                        
                    </div>
                    <div className='librarian-details'>
                        <h1>Librarian</h1>
                        <p>Name</p>
                        <p>Education</p>
                        <p>Contact: +91 9457087901</p>
                    </div>
                </div>
                <div className="contact-social" >
                    
                    <a href='https://www.linkedin.com/in/imsecghaziabad/?originalSubdomain=in' className='social-icon'><LinkedInIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                    
                    <a href='https://www.instagram.com/imsecghaziabad143/?hl=en' className='social-icon'><InstagramIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                </div>
            </div>
            <div className='copyright-details'>
                <p className='footer-copyright'>&#169; 2024 copyright all right reserved<br /><span>Designed By Sudhanshu Tomar</span></p>
            </div>
        </div>
    )
}

export default Footer