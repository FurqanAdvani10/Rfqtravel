import React from 'react'
import { PageWrapper } from '../../Components'
import './services.css'

function Service() {
    return (
        <div>
            <PageWrapper
                title={"Services"}
                moveTo={'home'}
                subtitle={'Services'}
                navigatePath={'/'}
                className={'servicebg'}
            />
            <div className='service-card-box mt-0 section-padding'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12'>
                            <div className="service-page heading-with-sub">
                                <h6 className="p-0 m-0">EXPLORE</h6>
                                <h3 className="p-0 m-0">Our Services</h3>
                                <p className='p-0  m-0'>Karwan e Rafeeq ul Harmain is dedicated to providing a seamless and spiritually enriching experience for Hajj and Umrah pilgrims. Our comprehensive services include visa assistance, transportation, and tailored packages to ensure a hassle-free journey.</p>
                            </div>
                        </div>
                     </div>
                    <div className='row mt-30 g-4 d-flex align-items-center justify-content-center row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-3'>
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
                        <div className='col'>
                            <div className='service-card processing'>
                                <div className='service-content'>
                                    <div className='service-card-title'>
                                        <h3>Visa Processing</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                    <div className='service-card-icon'>
                                        <i class="ri-arrow-right-up-line"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='service-card booking'>
                                <div className='service-content'>
                                    <div className='service-card-title'>
                                        <h3>Hotel Booking</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                    <div className='service-card-icon'>
                                        <i class="ri-arrow-right-up-line"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='service-card transportation'>
                                <div className='service-content'>
                                    <div className='service-card-title'>
                                        <h3>Transportation</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                    <div className='service-card-icon'>
                                        <i class="ri-arrow-right-up-line"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col'>
                            <div className='service-card manasik'>
                                <div className='service-content'>
                                    <div className='service-card-title'>
                                        <h3>Manasik</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                    <div className='service-card-icon'>
                                        <i class="ri-arrow-right-up-line"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='service-card guidance'>
                                <div className='service-content'>
                                    <div className='service-card-title'>
                                        <h3>Guidance</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                    <div className='service-card-icon'>
                                        <i class="ri-arrow-right-up-line"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='service-card accommodation'>
                                <div className='service-content'>
                                    <div className='service-card-title'>
                                        <h3>Accommodation</h3>
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

export default Service