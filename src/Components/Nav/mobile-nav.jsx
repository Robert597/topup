import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import {MdArrowDropDown} from 'react-icons/md';
import "./mobile-nav.css";
import { Link } from 'react-router-dom';

const MobileNav = () => {
    const [activelist, setActiveList] = React.useState({
        firstList: false,
        secondlist: false,
        thirdlist: false, 
        fourthlist: false
    });
    const [menu, setMenu] = React.useState(false);


  return (
    <div className='mobile-nav'>
        <div className='mobile-nav-icon' onClick={() => setMenu(menu => !menu)}>
            <AiOutlineMenu className='menu-icon'/>
        </div>

        <ul className={menu ? 'mobile-nav-menu menu-open' : "mobile-nav-menu menu-close"} >

            <li className={activelist.firstList ? 'nav-item activelist' : 'nav-item'} onClick={() => setActiveList({...activelist,
            firstList: !activelist.firstList})}>
            <span>Shop </span>
            <ul className='sub-menu'>
                <li onClick={() => setMenu(false)}><Link to="data-plans">Data</Link></li>
                <li onClick={() => setMenu(false)}><Link to="data-plans">Voice</Link></li>
                <li onClick={() => setMenu(false)}><Link to="data-plans">Devices</Link></li>
            </ul>
            </li>

            <li className={activelist.secondlist ? 'nav-item activelist' : 'nav-item'} onClick={() => setActiveList({...activelist,
            secondlist: !activelist.secondlist})}>
            <span>Support </span>
            <ul className='sub-menu'>
                <li onClick={() => setMenu(false)}><Link to="device-configuration">Device Configuration</Link></li>
                <li onClick={() => setMenu(false)}><Link to="faq">FAQs</Link></li>
            </ul>
            </li>

            <li className={activelist.thirdlist ? 'nav-item activelist' : 'nav-item'} onClick={() => setActiveList({...activelist,
            thirdlist: !activelist.thirdlist})}>
            <span>Recharge </span>
            <ul className='sub-menu'>
                <li onClick={() => setMenu(false)}><a href="https://myntel.ntel.com.ng/login">myntel</a></li>
                <li onClick={() => setMenu(false)}><a href="https://ibankpilot.gtbank.com/onboarding/login">Gtb app</a></li>
                <li onClick={() => setMenu(false)}><a href="https://www.quickteller.com/ntel">QuickTeller</a></li>
                <li onClick={() => setMenu(false)}><a href="https://www.ntel.com.ng/ntel-outlets/">ntel outlets</a></li>
                <li onClick={() => setMenu(false)}><a href="http://www.payxpress.com/">PayXpress</a></li>
                
            </ul>
            </li>

            <li className={activelist.fourthlist ? 'nav-item activelist' : 'nav-item'} onClick={() => setActiveList({...activelist,
            fourthlist: !activelist.fourthlist})}>
            <span>About </span>

            <ul className='sub-menu'>
                <li onClick={() => setMenu(false)}><Link to="about">about ntel</Link></li>
                <li onClick={() => setMenu(false)}><Link to="contact">Contact Us</Link></li>
                </ul>
            </li>

        </ul>
    </div>
  )
}

export default MobileNav