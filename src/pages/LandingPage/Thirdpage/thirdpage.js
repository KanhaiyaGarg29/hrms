import React from 'react'
import './thirdpage.css';

const thirdpage = () => {
  return (
    <div className='thirdpage' data-aos="fade-up"
    data-aos-anchor-placement="top-bottom" data-aos-duration="900">
        <div className='firstline'>
            <p className='firsttext'>WorkWave customers save hundreds of<br></br>
             hours and reduce<span className='hr'> HR</span> costs by 40%.</p>
        </div>
        <div className='secondline'>
            <div className='review1'>
                <p className='rev1'>Saved $20,000 annually and<br></br>
                20 hours a week with<br></br>
                WorkWave HR.</p>
            </div>
            <div className='review2'>
                <p className='rev1'>Saved $40,000 annually and<br></br>
                hundreds of hours with<br></br>WorkWave HR Performance<br></br>
                Management.</p>
            </div>
            <div className='review3'>
                <p className='rev1'>Shortened a 3 week benefits<br></br>
                admin process into just 2<br></br>
                days with WorkWave HR Benefits<br></br>
                Administration.</p>
            </div>
        </div>
        <div className='thirdline'>

        </div>
    </div>
  )
}

export default thirdpage