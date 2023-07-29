import React from 'react';
import {MdLocationOn} from 'react-icons/md';
import {FiPhone} from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { BsChatDots } from 'react-icons/bs';
import "./contact.css";

const Contact = () => {
  return (
    <div className='contact-container'>
           <div className="contactHeader">
            <h1>Contact Us</h1>
            <span></span>
        </div>
        <div className="contact-content">
            <div className='contact-links'>
                <h4 className="contact-links-header">
                    Get In Touch with us
                </h4>
                <div className='contact-links-container'>
                    <div className="contact-link">
                        <h6>
                            <MdLocationOn className='locationIcon'/> <span>Address</span> </h6>
                        <p>NECOM House, 17th Floor,
15 Marina,
Lagos, Nigeria</p>
                    </div>
                    <div className="contact-link">
                        <h6><FiPhone className='locationIcon'/> <span>Phone</span> </h6>
                        <p>Phone: 0700 ntel live / 0700 6835 5483</p>
                    </div>

                    <div className="contact-link">
                        <h6><AiOutlineMail className='locationIcon'/> <span>Emails</span> </h6>
                        <p>care@ntel.com.ng
                            <br/>
experience@ntel.com.ng</p>
                    </div>

                    <div className="contact-link">
                        <h6><BsChatDots className='locationIcon'/> <span>Live Chat</span> </h6>
                        <p>If you have any questions
Chat with us</p>
                    </div>
                </div>
            </div>
            <div className="contact-form-container">
                <h1>Request</h1>
                <form className='contact-form'>
                    <label for="name">Name (required):</label>
                    <input type="text" id='name' name="name" required/>

                    <label for="email">Email (required):</label>
                    <input type="text" id='email' name="email" required/>

                    <label for="number">Phone No (required):</label>
                    <input type="text" id='number' name="number" required/>

                    <label for="location">Location (required):</label>
                    <input type="text" id='location' name="location" required/>

                    <label for="subject">Subject (required):</label>
                    <input type="text" id='subject' name="subject" required/>

                    <label for="message">Message:</label>
                    <textarea id='message' name='message'/>

                    <button type='submit'>Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact