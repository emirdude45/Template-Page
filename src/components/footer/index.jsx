import React from 'react'
import './Style.css'


const Footer = () => {
  return (
    <div className="footer mt-5 d-flex text-white">
  <div className="container3">
    <div className="row ">
      <div className="col-lg-4 col-md-6"><h2>QuickStart</h2>
        <p className='mt-4'>A108 Adam Street</p>
        <p>New York, NY 535022</p>
        <p>Phone: +1 5589 55488 55</p>
        <p>Email: info@example.com</p>
      </div>
      <div className="col-lg-2 col-md-3 footer-about"><h4>Useful Links</h4>
        <ul className='list-unstyled'>
         <li> <a href="#" className='text-decoration-none text-white'>Home</a></li>
         <li> <a href="#" className='text-decoration-none text-white'>About Us</a></li>
         <li> <a href="#" className='text-decoration-none text-white'>Services</a></li>
         <li> <a href="#" className='text-decoration-none text-white'>Terms of Service</a></li>
         <li> <a href="#" className='text-decoration-none text-white'>Privacy Policy</a></li>
       </ul>
      </div>
      <div className="col-lg-2 col-md-3 footer-about"><h4>Our Services</h4>
        <ul className='list-unstyled '>
         <li> <a href="#" className='text-decoration-none text-white'>Web Design</a></li>
         <li> <a href="#" className='text-decoration-none text-white'>Web Development</a></li>
         <li> <a href="#" className='text-decoration-none text-white'>Product Management</a></li>
         <li> <a href="#" className='text-decoration-none text-white' >Marketing</a></li>
         <li> <a href="#" className='text-decoration-none text-white'>Graphic Design</a></li>
        </ul>
      </div>
      <div className="col-lg-4 col-md-12 just"><h4>Our Newsletter</h4>
        <p>Subscribe to our newsletter and receive the latest news about our products and services</p>
        <div className="form">
          <input type="email" name="email" />
          <input className='btn btn-primary' type="submit" value="Subscribe" />
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Footer