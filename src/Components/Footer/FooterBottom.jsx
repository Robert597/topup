import React from 'react';
import {AiOutlineTwitter, AiOutlineFacebook, AiOutlineInstagram, AiOutlineArrowUp} from 'react-icons/ai';
import "./footerbottom.css";

const FooterBottom = () => {
    const [visible, SetVisible] = React.useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;

        if(scrolled > 300){
            SetVisible(true);
        } else if(scrolled <= 300){
            SetVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    window.addEventListener('scroll', toggleVisible);
  return (
    <div className='footer-bottom'>
        <div className="footer-bottom-content">
            <div className="footer-bottom-copyright">
                <p>&copy;2023 LukeMobile. All Rights Reserved.</p>
            </div>

            <ul className='footer-social-links'>
                <li><a href="#"><AiOutlineFacebook/></a></li>
                <li><a href="#"><AiOutlineTwitter/></a></li>
                <li><a href="#"><AiOutlineInstagram/></a></li>
            </ul>

            <div className="back-to-top" onClick={scrollToTop}
            style={{ display: visible ? 'block' : 'none'}}>
                <AiOutlineArrowUp className="back-to-top-icon"/>
            </div>
        </div>
    </div>
  )
}

export default FooterBottom;