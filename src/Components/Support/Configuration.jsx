import React from 'react';
import Network from "../../assets/Volte.png"; 
import "./Configuration.css";

const Configuration = () => {
  return (
    <div className='configuration-container'>
        <div   className="configurationHeader">
            <h1>Device Configuration</h1>
            <p>You can configure in two ways.</p>
        </div>

        <div className="configure-content-container">
            <div className="configure-content">
                <div className='configure-content-header'>
                    <h1>Voice and Data Over LTE</h1>
                </div>
                <p className="configure-content-subheading">
                To configure your device for voice and data over LTE
                </p>
                <ul className="configure-content-content">
                    <li>Insert an ntel sim into your device</li>
                    <li>Device will display a VoLTE logo (as shown below)</li>
                    <li>Once logo is displayed, you can begin enjoying HD Voice calls, high-speed LTE data services and more
</li>
                   
                </ul>
                <div className='configure-content-image'>
                    <img src={Network} alt="Volte"/>
                </div>
            </div>
        </div>

        <div className="configure-content-container">
            <div className="configure-content">
                <div className='configure-content-header'>
                    <h1>Data Over LTE only</h1>
                </div>
                <p className="configure-content-subheading">
                To configure your device for data over, kindly follow these steps:
                </p>
                <ul className="configure-content-content">
                    <li>Confirm your device supports 4G LTE by checking the mobile network settings. To do this, follow these simple steps:</li>
                    <li>Insert an ntel SIM into your 4G LTE Device;
                        <br/>
                        Go to Menu;<br/>
Go to Settings;<br/>
Under Wireless & Networks, select more;<br/>
Select Mobile networks;<br/>
Select 4G (recommended);
                    </li>
                    <li>After you have confirmed your device supports 4G LTE, go back to the main menu.
</li>
                    <li>If your device is configured for data over LTE, the device signal display will show.
</li>
<li>If the device does not show the signal display, simply follow these steps:
    <br/>
    Dial*#*#4636#*#*<br/>
Select Phone Information;<br/>
Under set preferred network type: Select LTE only;<br/>
Click on update
</li>
                   <li>Go back to your Home screen</li>
                   <li>Put the phone in airplane mode, after a few seconds, switch off airplane mode</li>
                   <li>After a few seconds, turn off airplane mode</li>
                </ul>
                
            </div>
        </div>
    </div>
  )
}

export default Configuration