import React from 'react';
import "./unlimited.css";

const Unlimited = () => {
  return (
    <div className='unlimited-container'>
        <div className="box box-1">
            <h2>Unlimited Plus</h2>
            <p className="text-large">For only ₦25,000 you get super-fast unlimited data to access the Internet for one month. Valid for 30 days.</p>
            <p className="text-small">
            Enjoy continued internet access through the validity period
            </p>
            <button>Buy Now</button>
        </div>

        <div className="box box-2">
        <h2>Unlimited Extra</h2>
            <p className="text-large">
For only ₦40,000 Monthly, you get superfast unlimited data to access the Internet for one month.  Valid for 30 days</p>
            <p className="text-small">
            Enjoy continued internet access through the validity period
            </p>
            <button>Buy Now</button>
        </div>

        <div className="box box-3">
            <h2>Unlimited Prime</h2>
            <p className="text-large">For only ₦60,000 Monthly, you get superfast unlimited data to access the Internet for one month.  Valid for 30 days. </p>
            <p className="text-small">
            Enjoy continued internet access through the validity period
            </p>
            <button>Buy Now</button>
        </div>
    </div>
  )
}

export default Unlimited