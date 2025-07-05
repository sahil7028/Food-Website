import React from "react";
import pizza from "../assests/pizzaLeft.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="leftside"
      style={{backgroundImage:`url(${pizza})`}}
      ></div>
      <div className="rightside">
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
         <label htmlFor="name">Full Name</label>
        <input type="name" placeholder="Enter Full Name..." />
          
          <label htmlFor="email">Email</label>
        <input type="email" placeholder="Enter Email..."/>
       
       <label htmlFor="message">Message</label>
        <textarea rows="6" placeholder="Enter Message" name="Message" required>
        </textarea>
        <button>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
