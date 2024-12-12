import React from 'react'
import './service.css'

function Services() {
    return (
        <div className='service   section-padding'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12'>
                            <div className="service heading-with-sub">
                                <h6 className="p-0 m-0">Explore</h6>
                                <h3 className="p-0 m-0">Our Services</h3>
                            </div>
                    </div>
                </div>
                <div className='service-card-box'>
                    <div className='row g-4 d-flex align-items-center justify-content-center row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-3'>
                        <div className='col'>
                            <div className='service-card'>
                                <div className='service-content'>
                                    <div className='service-card-title'>
                                        <h3>Umrah</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                    <div className='service-card-icon'>
                                        <i class="ri-arrow-right-up-line"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='service-card hajj'>
                                <div className='service-content'>
                                    <div className='service-card-title'>
                                        <h3>Hajj</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                    <div className='service-card-icon'>
                                        <i class="ri-arrow-right-up-line"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='service-card tour'>
                                <div className='service-content'>
                                    <div className='service-card-title'>
                                        <h3>Tour</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                    <div className='service-card-icon'>
                                        <i class="ri-arrow-right-up-line"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services