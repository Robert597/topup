import React from 'react';
import Wifi from '../../assets/tea-home-page.jpg';
import "./welcome-banner.css";

const Welcomebanner = () => {
  return (
    <div className='welcome-container'>
        <div className='WelcomeImageContainer'>
            <img src={Wifi} alt="wifi"/>
        </div>
        <div className='welcome-content'>
            <div className='welcome-upper-content'>
                <h1>Welcome to 4G/LTE-Advanced</h1>
                <p>ntel is Nigeria’s most revolutionary 4G/LTE-Advanced  network that delivers superfast call-connect times, crystal clear Voice-over-LTE and high-speed Internet access (up to 100Mbps). Our aim is to deliver value by providing the most advanced broadband-based solutions and supreme service.</p>
                <button>Find Out More</button>
            </div>
            <div className='welcome-lower-content'>
                <h1>SIM Card Registration Centres</h1>
                <p>
Find the closest ntel SIM Card Registration Centre in your vicinity.</p>
<button>Start Here</button>
            </div>
        </div>
    </div>
  )
}

export default Welcomebanner