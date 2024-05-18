import React from 'react';
import "./footer.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer() {
  return (
    <div>
        <footer>
            <div className='footer-container'>
            <div className="footer-content">
                <h3 className='footer-headings'>Work Wave</h3>
                <p>"A robust HR management system streamlines processes, fosters employee engagement, and drives organizational success." - HR Expert</p>
                <ul className="socials">
                    <li><a href="https://www.facebook.com/" target='_blank' rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
                    <li><a href="https://twitter.com/" target='_blank' rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="https://google.com/" target='_blank' rel="noopener noreferrer"><i className="fab fa-google"></i></a></li>
                    <li><a href="https://youtube.com/" target='_blank' rel="noopener noreferrer"><i className="fab fa-youtube"></i></a></li>
                    <li><a href="https://in.linkedin.com/" target='_blank' rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
                    <li><a href="https://www.whatsapp.com/" target='_blank' rel="noopener noreferrer"><i className="fab fa-whatsapp" aria-hidden="true"></i></a></li>
                    <li><a href="https://www.snapchat.com/" target='_blank' rel="noopener noreferrer"><i className="fab fa-snapchat" aria-hidden="true"></i></a></li>
                </ul>
            </div>
            <div className=' footer-links-container'>
             <h3 className='footer-headings'>Quick Links</h3>
             <ul className='footer-links'>
                <li><a href="/">About</a></li>
                <li><a href="#workhere">Why Work Wave</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="#review">Reviews</a></li>
                <li><a href="#faq">FAQ</a></li>
             </ul>

            </div>

            <div className='contact-us-container'>
                <h3 className='footer-headings'>Contact Us</h3>
                <p className='contact-us-icons'><i className="fas fa-map-marker-alt"></i>Chitkara University Rajpura,Punjab</p>
                <p className='contact-us-icons'><i className="fas fa-phone"></i>+123456-7890</p>
                <p className='contact-us-icons'><i className="fas fa-envelope"></i>workwave@gmail.com</p>

            </div>
            </div>
            <div className="footer-bottom">
                <p>copyright &copy;2024 Work Wave. All rights reserved</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer;
