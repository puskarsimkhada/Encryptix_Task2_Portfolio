import React from 'react'
import './Contact.css'
import theme from '../../assets/theme_pattern.svg'
import mail from '../../assets/mail_icon.svg'
import call from '../../assets/call_icon.svg'
import location from '../../assets/location_icon.svg'
const Contact = () => {
  

    const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
  
      formData.append("access_key", "1b573802-b7c2-4762-bf5c-f2230cc33e74");
  
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
  
      if (res.success) {
        console.log("Success", res);
      }
    };

    return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Lets talk</h1>
          <p>I'm currently available to take on the projects, so feel free to send message about anything that you want to work on.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail} alt="Email" /><p>puskarsimkhada4554@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call} alt="Call" /><p>+977 9865429962</p>
            </div>
            <div className="contact-detail">
              <img src={location} alt="Location" /><p>Chitwan, Nepal</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows="10" placeholder='Enter your message'></textarea>
          <button type='submit' className='contact-submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact