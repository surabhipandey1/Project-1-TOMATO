import React from 'react'

import './Footer.css'
import linkedinIcon from "../../assets/linkedin_icon.png";
import facebookIcon from "../../assets/facebook_icon.png";
import twitterIcon from "../../assets/twitter_icon.png";


const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className='footer-content-left'>
                    <img src='{assets.logo.png}' alt="" />
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium omnis, veniam molestias error perspiciatis debitis, magnam ipsa fugit maiores architecto distinctio? Laudantium perferendis sunt atque sequi beatae veritatis sed officia?</p>
                    <img src="{assets.facebook_icon.png}" alt="" />
                    <img src="{assets.twitter_icon.png}" alt="" />
                    <img src="{assets.linkedin_icon.png}" alt="" />

                </div>
                <div className='footer-content-center'>
                    <h2> COMPANY </h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Privacy Policy</li>
                        <li>Delivery</li>
                        
                    </ul>
                </div>
                <div className='footer-content-right'>
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>123-456-7890</li>
                        <li>Contact@Tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='copyright'>Copyright © 2024 Tomato - All Rights Reserved</p>
        </div>
    )
}

export default Footer