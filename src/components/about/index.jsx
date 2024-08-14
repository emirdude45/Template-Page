import React from 'react'
import './Style.css'


const About = () => {
  return (
    <div className="container4 ">
      <div className="row gy-4 ">
        <div className="col-lg-6 content text-white">
          <p>WHO WE ARE</p>
          <h3><strong> Unleashing Potential with Creative Strategy</strong></h3>
          <p className='fst-italic mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <ul className='mt-2 mb-5'>
            <li >
              <span> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>          
            </li>
            <li className='mt-3'>
              <span> Duis aute irure dolor in reprehenderit in voluptate velit. </span>
            </li>
            <li className='mt-3'>
              <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur</span>
            </li>
          </ul>
          <a href="#" className='read-more bg-primary text-white'>
            <span>Read More</span>
          </a>
        </div>
        <div className="col-lg-6 about-images">
          <div className="row gy-4">
            <div className="col-lg-6">
              <img src="src/assets/images/about-company-1.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6">
              <div className="row gy-4">
                <div className="col-lg-12">
                  <img src="src/assets/images/about-company-2.jpg" className="img-fluid" alt="" />
                </div>
                <div className="col-lg-12">
                  <img src="src/assets/images/about-company-3.jpg" className="img-fluid" alt="" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About