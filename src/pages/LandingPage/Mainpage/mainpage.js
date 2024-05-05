import React from 'react';
import './mainpage.css';

const mainpage = () => {
  return (
    <div>
        <div className='MainDiv'>
            <div className='leftdiv'>
                <p className='p1'>HR,Payroll,Benefits.</p>
                <p className='p2'>The complete HR</p>
                <p className='p3'>Software.</p>
                <p className='p4'>Simplify HR with award winning-solutions for everything from<br></br> hire to retire.</p>
                <p className='p5'>"Excellent" based on over 500+ reviews</p>
                <div className='star'>
                    <div className='star1'></div>
                </div>
                <button className='button1'>Register</button>
            </div>
            <div className='rightdiv'>
                <div className='hrimage'>
                </div>
            </div>
        </div>

        <div className='SecondMainDiv'>
            <div className='FirstLine'>
                <p className='trusted'>Trusted by <span id='three'>30,000</span> Companies of All Sizes</p>
            </div>

            <div className='CompanyLines'>
                <li><img src='/assets/meta.png'></img></li>
                <li><img src='/assets/google.png'></img></li>
                <li><img src='/assets/netflix.png'></img></li>
                <li><img src='/assets/amazon.png'></img></li>
                <li><img src='/assets/apple.png'></img></li>
            </div>
        </div>
    </div>
  )
}

export default mainpage
