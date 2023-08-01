import React from 'react'
import Accordion from './FAQ';
import FAQ  from "../../Utils/faq";
import "./FAQContainer.css";

const FAQContainer = () => {
  return (
    <div className='FaqContainer'>
        <div className="faqHeader">
            <h1>FAQ</h1>
            <p>Got a question, see if we've already answered it here.</p>
        </div>

        <div className="Faq-content-container">
            {
                FAQ?.map((faq) => (
                    <div className="faq-content">
                <h1 className="faq-content-title">
                    {faq.faqFor}
                </h1>
                <Accordion data={faq.content}/>
            </div>
                ))
            }
            
        </div>
    </div>
  )
}

export default FAQContainer