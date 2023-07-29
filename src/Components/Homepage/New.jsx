import React from 'react';
import Deal1 from "../../assets/ntel-deals-hub.jpg";
import Deal2 from "../../assets/capped-plans-ntel.jpg";
import Deal3 from "../../assets/ntel-unlimited-plan.jpg";
import Deal4 from "../../assets/device-plans.jpg";
import "./New.css";


const New = () => {
  return (
    <div className='new-page'>
        <div className='new-page-title'>
            <h1>What's New?</h1> 
            <span className='line'></span>
        </div>

        <div className="new-page-content">
            <div className='data-plans'>
                <a href='#'>
                    <div className='data-image-container'>
                        <img src={Deal1} alt='data plans'/>
                    </div>
                </a>
            </div>

            <div className='data-plans'>
                <a href='#'>
                    <div className='data-image-container'>
                        <img src={Deal2} alt='data plans'/>
                    </div>
                </a>
            </div>

            <div className='data-plans'>
                <a href='#'>
                    <div className='data-image-container'>
                        <img src={Deal3} alt='data plans'/>
                    </div>
                </a>
            </div>

            <div className='data-plans'>
                <a href='#'>
                    <div className='data-image-container'>
                        <img src={Deal4} alt='data plans'/>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default New