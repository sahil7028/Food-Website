import React from 'react'
import inst from "../assests/insta.jpg";
import fb from "../assests/fb.png";
import twitter from "../assests/twitter.png";
import youtube from "../assests/youtube.jpg";
import  "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
        <div className='socialmedia'>
            <img src={inst}/>
            <img src={fb}/>
            <img src={twitter}/>
            <img src={youtube}/>
        </div>
        <p>&copy: 2025 FoodWebsite.com</p>
    </div>
  )
}

export default Footer