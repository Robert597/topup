import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-content-container">

            <div className="footer-content">
                <p className='footer-link-header'>
                    Inside Ntel
                </p>
                <ul className="footerlinks">
                    <li className='footer-link'><a href="#">About Ntel</a></li>
                    <li className='footer-link'><a href="#">Contact Us</a></li>
                    <li className='footer-link'><a href="#">Media Centre</a></li>
                    <li className='footer-link'><a href="#">Customer Charter</a></li>
                    <li className='footer-link'><a href="#">Ntel Entrepreneur</a></li>
                    <li className='footer-link'><a href="#">Ntel factsheet</a></li>
                    <li className='footer-link'><a href="#">Sim Registration centres</a></li>
                </ul>
            </div>

            <div className="footer-content">
                <p className='footer-link-header'>
                    SAT-3
                </p>
                <ul className="footerlinks">
                    <li className='footer-link'><a href="#">About SAT-3</a></li>
                    <li className='footer-link'><a href="#">Services</a></li>
                </ul>
            </div>

            <div className="footer-content">
                <p className='footer-link-header'>
                    Company Policies
                </p>
                <ul className="footerlinks">
                <li className='footer-link'><a href="#">Policies</a></li>
                    <li className='footer-link'><a href="#">Disclaimers</a></li>
                    <li className='footer-link'><a href="#">Terms and Conditions </a></li>
                    <li className='footer-link'><a href="#">Customer Code of Practice</a></li>
                    <li className='footer-link'><a href="#">Corporate Governance Framework</a></li>
                    <li className='footer-link'><a href="#">Do Not Disturb</a></li>
                    <li className='footer-link'><a href="#">Caveat-Emptor</a></li>
                </ul>
            </div>
           
        </div>
    </div>
  )
}

export default Footer