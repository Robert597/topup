import React from 'react';
import {AiOutlineTwitter, AiOutlineFacebook} from 'react-icons/ai';
import "./topnav.css";

const TopNav = () => {
  return (
    <div className='topnav'>
        <ul className="topNavMenu">
            <li>Customer Care: 0907655500</li>
            <li>care@intel.com.ng</li>
            <li>
                <ul className="topNavIcons">
                    <li><a href="#"><AiOutlineTwitter className='topNavIcon'/></a></li>
                    <li><a href="#"><AiOutlineFacebook className='topNavIcon'/></a></li>
                </ul>
            </li>
        </ul>
    </div>
  )
}

export default TopNav