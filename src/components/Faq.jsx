import React from 'react'
import "./faq.css"
const Faq = () => {
  return (
    <section id="faq">
        <div className="faq-title-div">
        <h2 className="faq-h2">frequently</h2>
        <h2 className="faq-h2"> asked </h2>
        <h2 className="faq-h2">questions <span id="q"> ?</span></h2>
        </div>
        
        <div className='questions'>
            <div className='inner-question'>
                <h3>What is your return policy?</h3>
                <p>We offer a 30-day return policy for all furniture items in their original condition.</p>
            </div>
            <div className='inner-question'>
                <h3>Do you offer assembly services?</h3>
                <p>Yes, we provide assembly services for an additional fee. Please contact us for more information.</p>
            </div>
            <div className='inner-question'>
                <h3>How can I track my order?</h3>
                <p>Once your order is shipped, you will receive a tracking number via email or whatspp to track your delivery.</p>
            </div>
            <div className='inner-question'>
                <h3>What payment methods do you accept?</h3>
                <p>We accept all major credit cards,debit cards, UPI, Paytm, etc and financing options through selected partners.</p>
            </div>
        </div>
    </section>
  )
}

export default Faq;