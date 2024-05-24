import React from "react";
import './secondpage.css';

const secondpage = () => {
  return (
    <div className="secondMainDiv" id="workhere" data-aos="zoom-in" data-aos-duration="800">
        <div className="firstdiv">
            <p className="whowe">WHO WE ARE</p>
        </div>
        <div className="seconddiv">
            <p className="whych">Why choose HR consulting</p>
        </div>
        <div className="thirddiv">
            <p className="servi">Services Company</p>
        </div>
        <div className="fourthdiv">
            <div className="fdivfirst">
                <div className="hr2image"></div>
            </div>
            <div className="fdivsecond">
                <div className="par1">
                    <p>Our advisers provides a broad menu service that identifies the task<br></br>
                    requirements in the oganization job and designs the task description with skill<br></br>
                    requirements for the task.</p>
                </div>
                <div className="par2">
                    <p className="pfirst">Strategic Partners</p>
                    <p className="psecond">We belive in the value that our functions added to a<br></br>
                    business.Our strategic partners that specialist role for HR is<br></br>
                    success of a business.</p>
                </div>
                <div className="par3">
                    <p className="pfirst">Corporate Programs</p>
                    <p className="psecond">We belive in the value that our functions added to a<br></br>
                    business.Our strategic partners that specialist role for HR is<br></br>
                    success of a business.</p>
                </div>
                <div className="par4">
                    <p>Get intrigued about our service pricing?<span className="learnMore">  Learn More</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default secondpage