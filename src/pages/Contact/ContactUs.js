import React from 'react';
import './ContactUs.css';

function ContactForm() {
  return (
    <section id="section-wrapper">
      <div className="box-wrapper">
        <div className="info-wrap">
          <h2 className="info-title">Contact Information</h2>
          <h3 className="info-sub-title">Fill up the form and our team will get back to you within 24 hours</h3>
          <ul className="info-details">
            <li>
            <span className='ico'>&#9742;</span>
              <span>Phone: </span> <a href="tel:9465903490">9465903490</a>
            </li>
            <li>
              <span className="ico">&#128231;</span>
              <span>Email: </span> <a href="mailto:workwave@gmail.com">workwave@gmail.com</a>
            </li>
            <li>
              <span className="ico">&#127760;</span>
              <span>Website: </span> <a href="https://workwave.com">workwave.com</a>
            </li>
          </ul>
    
        </div>
        <div className="from-wrap">
          <form className='form'>
            <h2 className="form-title">Send us a message</h2>
            <div className="from-fields">
              <div className="from-group">
                <input type="text" className="fname" placeholder="First Name" />
              </div>
              <div className="from-group">
                <input type="text" className="lname" placeholder="Last Name" />
              </div>
              <div className="from-group">
                <input type="email" className="email" placeholder="Mail" />
              </div>
              <div className="from-group">
                <input type="number" className="phone" placeholder="Phone" />
              </div>
              <div className="from-group">
                <textarea name="message" id="" placeholder="Write your message"></textarea>
              </div>
            </div>
            <input type="submit" value="Send message" className="submit-button" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;