import React from 'react';
import Capped from "../../assets/capped-data-plans.png";
import Unlimited from "../../assets/unlimited-1.png";
import Device from "../../assets/device.png";
import Handset from "../../assets/handset.png";
import "./shop.css";

const Shop = () => {
  return (
    <div className='shopContainer'>
        <div className="shopHeader">
        </div>

        <div className="boxesContainer">
        <div className="box-content-conteainer box-content-1">
            <div className='box-img'>
                <img src={Capped} alt="capped dataplans"/>
            </div>

            <div className="box-content">
                <h1 className="box-content-title">
                    Capped Data Plans
                </h1>
                <h6 className='box-content-subheading'>
                THESE DATA PLANS ARE TAILORED TO SUITE YOUR SPECIFIC NEEDS
                </h6>
                <ul className="box-content-lists">
                    <li>Subscribe for as low as &#8358;4000</li>
                    <li>Enjoy High speed internet access</li>
                    <li>Data is capped at Display Value</li>
                    <li>All plans are valid for 30 days</li>
                </ul>
                <button className="box-content-button">View all plans</button>
            </div>
        </div>

        <div className="box-content-conteainer box-content-2">
            <div className='box-img'>
                <img src={Unlimited} alt="unlimited dataplans"/>
            </div>

            <div className="box-content">
                <h1 className="box-content-title">
                    Unlimited Plans
                </h1>
                <h6 className='box-content-subheading'>
                Designed to give you freedom.
                </h6>
                <ul className="box-content-lists">
                    <li>Subscribe for as low as &#8358;1500</li>
                    <li>Enjoy High speed Unlimited internet access</li>
                    <li>Download, upload, browse and stream</li>
                    <li>Validity ranges from 2days to 365days</li>
                </ul>
                <button className="box-content-button">View all plans</button>
            </div>
        </div>

        <div className="box-content-conteainer box-content-3">
            <div className='box-img'>
                <img src={Device} alt="capped dataplans"/>
            </div>

            <div className="box-content">
                <h1 className="box-content-title">
                    Device Data Bundles
                </h1>
                <h6 className='box-content-subheading'>
                SUPER SPEED 4G LTE DEVICE + UNLIMITED DATA PLAN
                </h6>
                <ul className="box-content-lists">
                    <li>Devices + Unlimited for as low as &#8358;31000</li>
                    <li>Enjoy High speed Unlimited internet access</li>
                    <li>Connect Multiple Devices</li>
                    <li>Device is bundles with specified plan</li>
                    <li>Plan Validity is 30days</li>
                </ul>
                <button className="box-content-button">View all plans</button>
            </div>
        </div>

        <div className="box-content-conteainer box-content-4">
            <div className='box-img'>
                <img src={Handset} alt="capped dataplans"/>
            </div>

            <div className="box-content">
                <h1 className="box-content-title">
                    Handset Bundles
                </h1>
                <h6 className='box-content-subheading'>
                *Enjoy Data Connectivity as long as you have data bundle
                </h6>
                <ul className="box-content-lists">
                    <li>Starts from &#8358;1000</li>
                    <li>Enjoy High speed internet access</li>
                    <li>Device bundle with capped plan.</li>
                    <li>All plans are valid for 30 days</li>
                </ul>
                <button className="box-content-button">View all plans</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Shop