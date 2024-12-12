import React from 'react'
import './faith.css'
import icon1 from './../../Assets/icon11.png'
import icon2 from '../../Assets/icon12.png'
import icon3 from '../../Assets/icon2.png'
import icon4 from '../../Assets/icon3.png'
import icon5 from '../../Assets/icon4.png'
import icon6 from '../../Assets/icon7.png'


function Faith() {
    return (
        <div className='faith-main section-padding'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 col-sm-12 col-lg-12'>
                        <div className="faith heading-with-sub">
                            <h6 className="p-0 m-0">FEATURE</h6>
                            <h3 className="p-0 m-0">Elevate Your Faith</h3>
                        </div>
                    </div>
                </div>
                <div className='faith-content '>
                    <div className='row'>
                        <div className='col-md-4 col-sm-12 col-lg-4 col-xl-4'>
                            <div className='faith-img-section'>
                                <img src='https://site.sociolib.com/tawaf/wp-content/uploads/sites/10/2023/11/14.jpg' alt='faith-img' />
                            </div>
                        </div>
                        <div className='col-md-8 col-xl-8 col-lg-8 col-sm-12'>
                            <div className='row res-margin g-4 d-flex align-items-center justify-content-center row-cols-1 row-cols-sm-1 row-cols-lg-2 row-cols-xl-2'>
                                <div className='col'>
                                    <div className='content-icon'>
                                        <div className='faith-icon'>
                                            <img src={icon1} alt='icon' />
                                        </div>
                                        <div className='faith-content-box'>
                                            <h4 className='p-0 m-0'>Tawaf</h4>
                                            <p >Lorem ipsum dolor sit amet, consectetur ela mattis.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='content-icon'>
                                        <div className='faith-icon'>
                                            <img src={icon5} alt='icon' />
                                        </div>
                                        <div className='faith-content-box'>
                                            <h4 className='p-0 m-0'>Ihram</h4>
                                            <p >Lorem ipsum dolor sit amet, consectetur ela mattis.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col mt-80'>
                                    <div className='content-icon'>
                                        <div className='faith-icon'>
                                            <img src={icon4} alt='icon' />
                                        </div>
                                        <div className='faith-content-box'>
                                            <h4 className='p-0 m-0'>Prayer Mat</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur ela mattis.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col mt-80'>
                                    <div className='content-icon'>
                                        <div className='faith-icon'>
                                            <img src={icon3} alt='icon' />
                                        </div>
                                        <div className='faith-content-box'>
                                            <h4 className='p-0 m-0'>Jamarat</h4>
                                            <p >Lorem ipsum dolor sit amet, consectetur ela mattis.</p>
                                        </div>
                                    </div>
                                </div>

                                    <div className='col mt-80'>
                                        <div className='content-icon'>
                                            <div className='faith-icon'>
                                                <img src={icon2} alt='icon' />
                                            </div>
                                            <div className='faith-content-box'>
                                                <h4 className='p-0 m-0'>Zam-Zam</h4>
                                                <p >Lorem ipsum dolor sit amet, consectetur ela mattis.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col mt-80'>
                                        <div className='content-icon'>
                                            <div className='faith-icon'>
                                                <img src={icon6} alt='icon' />
                                            </div>
                                            <div className='faith-content-box'>
                                                <h4 className='p-0 m-0'>Mina</h4>
                                                <p >Lorem ipsum dolor sit amet, consectetur ela mattis.</p>
                                            </div>
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

export default Faith