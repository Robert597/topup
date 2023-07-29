import React from 'react';
import Shop1 from "../../assets/nteldataplans.png";
import Shop2 from "../../assets/plans.png";
import Shop3 from "../../assets/troi22.png";
import Recharge1 from "../../assets/ntelcare.png";
import Recharge2 from "../../assets/gtb.png";
import Recharge3 from "../../assets/Quickteller.png";
import Recharge4 from "../../assets/nteloutlet.png";
import Recharge5 from "../../assets/payxpress.png";
import Support1 from "../../assets/support11.png";
import Support2 from "../../assets/support21.png";
import Support3 from "../../assets/support31.png";
import Support4 from "../../assets/ogantel.png";
import {AiOutlineSearch} from 'react-icons/ai';
import {FaTimes} from 'react-icons/fa';
import "./nav.css";
import MobileNav from './mobile-nav';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [search, setSearch] = React.useState(false);
  return (
    <div className="Nav">
        <MobileNav/>
        <div className='logo'>
            <p><Link to="/">LUKEMOBILE</Link></p>
        </div>

        <div className="navbar">
            <ul className='navContainer'>
                <li> 
                    shop
                    <div className='dropdown'>
                        <div className='dropdownsub'>
                            <p>Data</p>
                            <div className='dropdownImg'>
                            <Link to="data-plans">
                                <img src={Shop1}/>
                                </Link>
                            </div>
                        </div>
                        <div className='dropdownsub'>
                            <p><Link to="data-plans">Voice</Link></p>
                            <div className='dropdownImg'>
                            <Link to="data-plans">
                                <img src={Shop2}/>
                                </Link>
                            </div>
                        </div>
                        <div className='dropdownsub'>
                            <p><Link to="data-plans">Device</Link></p>
                            <div className='dropdownImg'>
                            <Link to="data-plans">
                                <img src={Shop3}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </li>

                <li>
                    Support
                    <div className='dropdown'>
                    <div className='dropdownsub'>
                            <p>Device Compatibility</p>
                            <div className='dropdownImg'>
                                <img src={Support1}/>
                            </div>
                        </div>

                        <div className='dropdownsub'>
                            <p>Device Configuration</p>
                            <div className='dropdownImg'>
                                <img src={Support2}/>
                            </div>
                        </div>

                        <div className='dropdownsub'>
                            <p>FAQs</p>
                            <div className='dropdownImg'>
                                <img src={Support3}/>
                            </div>
                        </div>

                        <div className='dropdownsub'>
                            <p>Speed Test</p>
                            <div className='dropdownImg'>
                                <img src={Support4}/>
                            </div>
                        </div>
                    </div>
                </li>

                <li>
                    Recharge
                    <div className='dropdown'>
                        <div className='dropdown-recharge'>
                            <p>myntel</p>
                            <a href='https://myntel.ntel.com.ng/login'>
                                <div className='dropdown-recharge-img'>
                                    <img src={Recharge1}/>
                                </div>
                            
                            </a>
                        </div>

                        <div className='dropdown-recharge'>
                            <p>Gtb app</p>
                            <a href='https://ibankpilot.gtbank.com/onboarding/login'>
                                <div className='dropdown-recharge-img'>
                                    <img src={Recharge2}/>
                                </div>
                             
                            </a>
                        </div>

                        <div className='dropdown-recharge'>
                            <p>Quickteller</p>
                            <a href='https://www.quickteller.com/ntel'>
                                <div className='dropdown-recharge-img'>
                                    <img src={Recharge3}/>
                                </div>
                             
                            </a>
                        </div>

                        <div className='dropdown-recharge'>
                            <p>ntel outlets</p>
                            <a href='https://www.ntel.com.ng/ntel-outlets/'>
                                <div className='dropdown-recharge-img'>
                                    <img src={Recharge4}/>
                                </div>
                               
                            </a>
                        </div>

                        <div className='dropdown-recharge'>
                            <p>PayXpress</p>
                            <a href='http://www.payxpress.com/'>
                                <div className='dropdown-recharge-img'>
                                    <img src={Recharge5}/>
                                </div>
                             
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>

                <li>
                   <AiOutlineSearch onClick={() => {
                    setSearch(true)
                   }}/>
                   <div className={search ?"searchdropdown" : "searchnavup"}>
                    <input type="text" placeholder='Search'/>

                    <FaTimes onClick={() => {
                    setSearch(false)
                   }} className='searchBtn'/>
                   </div>
                </li>
               
            </ul>
        </div>
    </div>
  )
}

export default Nav