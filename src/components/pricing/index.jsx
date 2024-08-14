import React from 'react'
import './Style.css'

const Pricing = () => {
  return (
    <section id='pricing' className='pricing-section'>
        <div className="container section-title mt-5 text-white">
            <h2>Pricing</h2>
            <p className='mt-3'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>
        <div className="container ">
            <div className="row gy-4 text-white mt-4 ">
                <div className="col-lg-4 ">
                    <div className="pricing-item ">
                        <h3 className='text-start'>Free Plan</h3>
                        <p className='text-start'>Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater</p>
                        <h4 className='price text-start'>
                            <sup>$</sup>
                            0
                            <span className='small text-secondary'> / month </span>
                        </h4>
                        <button type="button" className='rounded mt-3 text-center'>Start a free trial</button>
                        <p className='text-center'> No credit card required</p>
                        <ul className='list-group text-start'>
                            <li className='list-group-item '>
                                <span>Quam adipiscing vitae proin</span>
                            </li>
                            <li className='list-group-item'>
                                <span>Nec feugiat nisl pretium
                                </span>
                            </li>
                            <li className='list-group-item '>
                                <span>Nulla at volutpat diam uteera</span>
                            </li>
                            <li className='list-group-item disabled '>
                                <span>Pharetra massa massa ultricies</span>
                            </li>
                            <li className='list-group-item disabled'>
                                <span>Massa ultricies mi quis hendrerit
                                </span>
                            </li>
                            <li className='list-group-item disabled'>
                                <span>Voluptate id voluptas qui sed aperiam rerum
                                </span>
                            </li>
                            <li className='list-group-item disabled'>
                                <span>Iure nihil dolores recusandae odit voluptatibus
                                </span>
                            </li>
                        </ul>
                     </div>
                </div>
                <div className="col-lg-4">
                    <div className="pricing-item ">
                        <p className='popular rounded'>Popular</p>
                        <h3 className='text-start'>Business Plan</h3>
                        <p className='text-start'>Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater</p>
                        <h4 className='price text-start'>
                            <sup>$</sup>
                            29  
                            <span className='small text-secondary'> / month </span>
                        </h4>
                        <button type="button" className='rounded mt-3 text-center bg-primary text-white'>Start a free trial</button>
                        <p className='text-center'> No credit card required</p>
                        <ul className='list-group text-start'>
                            <li className='list-group-item '>
                                <span>Quam adipiscing vitae proin</span>
                            </li>
                            <li className='list-group-item'>
                                <span>Nec feugiat nisl pretium
                                </span>
                            </li>
                            <li className='list-group-item '>
                                <span>Nulla at volutpat diam uteera</span>
                            </li>
                            <li className='list-group-item  '>
                                <span>Pharetra massa massa ultricies</span>
                            </li>
                            <li className='list-group-item '>
                                <span>Massa ultricies mi quis hendrerit
                                </span>
                            </li>
                            <li className='list-group-item '>
                                <span>Voluptate id voluptas qui sed aperiam rerum
                                </span>
                            </li>
                            <li className='list-group-item disabled'>
                                <span>Iure nihil dolores recusandae odit voluptatibus
                                </span>
                            </li>
                        </ul>
                     </div>
                </div>
                <div className="col-lg-4">
                    <div className="pricing-item ">
                        <h3 className='text-start'>Developer Plan</h3>
                        <p className='text-start'>Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater</p>
                        <h4 className='price text-start'>
                            <sup>$</sup>
                            49
                            <span className='small text-secondary'> / month </span>
                        </h4>
                        <button type="button" className='rounded mt-3 text-center'>Start a free trial</button>
                        <p className='text-center'> No credit card required</p>
                        <ul className='list-group text-start'>
                            <li className='list-group-item '>
                                <span>Quam adipiscing vitae proin</span>
                            </li>
                            <li className='list-group-item'>
                                <span>Nec feugiat nisl pretium
                                </span>
                            </li>
                            <li className='list-group-item '>
                                <span>Nulla at volutpat diam uteera</span>
                            </li>
                            <li className='list-group-item  '>
                                <span>Pharetra massa massa ultricies</span>
                            </li>
                            <li className='list-group-item '>
                                <span>Massa ultricies mi quis hendrerit
                                </span>
                            </li>
                            <li className='list-group-item '>
                                <span>Voluptate id voluptas qui sed aperiam rerum
                                </span>
                            </li>
                            <li className='list-group-item '>
                                <span>Iure nihil dolores recusandae odit voluptatibus
                                </span>
                            </li>
                        </ul>
                     </div>
                </div>
            </div>
        </div>

    </section>

)
}

export default Pricing