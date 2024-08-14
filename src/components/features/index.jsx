import React from 'react'
import './Style.css'


const Features = () => {
  return (
    <section id="features" className='features-section'>
    <div className="container section-title text-white">
      <h2>Features</h2>
      <p className='mt-5'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
    </div>
    <div className="container mt-5 text-start">
      <div className="row justify-content-between">
        <div className="col-lg-5 d-flex align-items-center">
          <ul className='nav nav-tabs'>
            <li className='nav-item'>
              <a className="nav-link show text-white">
                <div>
                  <h4>Modi sit est dela pireda nest</h4>
                  <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur </p>
                </div>
              </a>
            </li>
            <li className='nav-item mt-3'>
              <a className="nav-link text-white ">
                  <div>
                    <h4>Modi sit est dela pireda nest</h4>
                    <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur </p>
                  </div>
              </a>
            </li>
            <li className='nav-item mt-3'>
              <a className="nav-link text-white ">
                  <div>
                    <h4>Modi sit est dela pireda nest</h4>
                    <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur </p>
                  </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-6">
          <img src="src/assets/images/tabs-1.jpg" alt="" className='img-fluid rounded' />
        </div>
      </div>
    </div>
    <div className="container mt-5">
      <div className="row gy-4 justify-content-between features-item">
        <div className="col-lg-6">
          <img src="src/assets/images/features-1.jpg" alt="" className='img-fluid rounded' />
        </div>
        <div className="col-lg-5 d-flex align-items-center">
          <div className="content text-white text-start" >
            <h3>Corporis temporibus maiores provident</h3>
            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <button type="button" className='rounded bg-primary text-white mt-2'>Learn More</button>
          </div>
        </div>
      </div>
      <div className="row gy-4 justify-content-between features-item mt-5 text-white text-start">
        <div className="col-lg-5 d-flex align-items-center">
          <div className="content">
            <h3>Neque ipsum omnis sapiente quod quia dicta</h3>
            <p className='mt-3'>Quidem qui dolore incidunt aut. In assumenda harum id iusto lorena plasico mares</p>
            <ul>
              <li>Et corporis ea eveniet ducimus. </li>
              <li className='mt-2'>Exercitationem dolorem sapiente.</li>
              <li className='mt-2'>Veniam quia modi magnam.</li>
            </ul>
            <button type="button" className='bg-primary rounded mt-2 text-white' >Learn More</button>
          </div>
        </div>
        <div className="col-lg-6">
          <img src="src/assets/images/features-2.jpg" alt=""  className='img-fluid rounded'/>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Features