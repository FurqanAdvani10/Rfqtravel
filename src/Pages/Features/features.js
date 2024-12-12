import React from 'react'
import { PageWrapper, Testimonials } from '../../Components'
import icon1 from './../../Assets/icon11.png'
import icon2 from '../../Assets/icon12.png'
import icon3 from '../../Assets/icon2.png'
import icon4 from '../../Assets/icon3.png'
import icon5 from '../../Assets/icon4.png'
import icon6 from '../../Assets/icon7.png'
import arafah from '../../Assets/arafah.webp'
import citytour from '../../Assets/citytour.webp'
import localmarket from '../../Assets/localmarket.webp'
import rawah from '../../Assets/rawah.webp'
import maqam from '../../Assets/maqam.webp'
import lab from '../../Assets/lab.webp'

function Features() {
    return (
        <div>
            <PageWrapper
                title={"Features"}
                moveTo={"Home"}
                navigatePath={'/'}
                subtitle={'Features'}
                className={'feature'}
            />
            <div className='section-padding'>
                <div className='container'>
                    <div className="row ">
                        <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
                            <div className=" heading-with-sub">
                                <h6 className="p-0 m-0">Features</h6>
                                <h3 className="p-0 m-0">Charting Your Sacred Path</h3>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-30 g-5 d-flex align-items-center justify-content-center row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-3'>
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
                        <div className='col'>
                            <div className='content-icon'>
                                <div className='faith-icon'>
                                    <img src={icon4} alt='icon' />
                                </div>
                                <div className='faith-content-box'>
                                    <h4 className='p-0 m-0'>Prayer Mat</h4>
                                    <p >Lorem ipsum dolor sit amet, consectetur ela mattis.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
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
                        <div className='col'>
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
                        <div className='col'>
                            <div className='content-icon'>
                                <div className='faith-icon'>
                                    <img src={lab} alt='icon' />
                                </div>
                                <div className='faith-content-box'>
                                    <h4 className='p-0 m-0'>Library</h4>
                                    <p >Lorem ipsum dolor sit amet, consectetur ela mattis.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
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
                        <div className='col'>
                            <div className='content-icon'>
                                <div className='faith-icon'>
                                    <img src={icon6} alt='icon' />
                                </div>
                                <div className='faith-content-box'>
                                    <h4 className='p-0 m-0'>Arafah</h4>
                                    <p >Lorem ipsum dolor sit amet, consectetur ela mattis.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='content-icon'>
                                <div className='faith-icon'>
                                    <img src={localmarket} alt='icon' />
                                </div>
                                <div className='faith-content-box'>
                                    <h4 className='p-0 m-0'>Local Market</h4>
                                    <p >Lorem ipsum dolor sit amet, consectetur ela mattis.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='content-icon'>
                                <div className='faith-icon'>
                                    <img src={rawah} alt='icon' />
                                </div>
                                <div className='faith-content-box'>
                                    <h4 className='p-0 m-0'>Rawdha</h4>
                                    <p >Lorem ipsum dolor sit amet, consectetur ela mattis.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='content-icon'>
                                <div className='faith-icon'>
                                    <img src={citytour} alt='icon' />
                                </div>
                                <div className='faith-content-box'>
                                    <h4 className='p-0 m-0'>City Tour</h4>
                                    <p >Lorem ipsum dolor sit amet, consectetur ela mattis.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='content-icon'>
                                <div className='faith-icon'>
                                    <img src={maqam} alt='icon' />
                                </div>
                                <div className='faith-content-box'>
                                    <h4 className='p-0 m-0'>Maqam Ibrahim</h4>
                                    <p >Lorem ipsum dolor sit amet, consectetur ela mattis.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Testimonials />
        </div>
    )
}

export default Features