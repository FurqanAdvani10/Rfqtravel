import React from 'react'
import './news.css'

function News() {
    return (
        <div className='news section-padding'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 col-sm-12 col-lg-12 col-xl-12'>
                        <div className="news heading-with-sub">
                            <h6 className="p-0 m-0">ARTICLES</h6>
                            <h3 className="p-0 m-0">Haramain News</h3>
                        </div>
                    </div>
                </div>
                <div className='new-main'>
                    <div data-aos="fade-up"
                        data-aos-duration="3000">
                        <div className='row mt-20 g-5 d-flex align-items-center justify-content-center row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-3'>
                            <div className='col'>
                                <div className='new-box'>
                                    <div className='new-box-container'>
                                        <div className='news-img'>
                                            <img decoding="async" src="https://site.sociolib.com/tawaf/wp-content/uploads/sites/10/2023/11/28.jpg" alt="Essential Packing Tips for Your Hajj"></img>
                                        </div>
                                        <div className='news-content'>
                                            <h4>Essential Packing Tips for Your Hajj</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='new-box'>
                                    <div className='new-box-container'>
                                        <div className='news-img'>
                                            <img decoding="async" src="https://site.sociolib.com/tawaf/wp-content/uploads/sites/10/2023/11/24-1.jpg" alt="Personal Stories from the Sacred Journey" />
                                        </div>
                                        <div className='news-content'>
                                            <h4>Essential Packing Tips for Your Hajj</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='new-box'>
                                    <div className='new-box-container'>
                                        <div className='news-img'>
                                            <img decoding="async" src="https://site.sociolib.com/tawaf/wp-content/uploads/sites/10/2023/11/23.jpg" alt="The Ultimate Guide to Performing Umrah" />
                                        </div>
                                        <div className='news-content'>
                                            <h4>Essential Packing Tips for Your Hajj</h4>
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

export default News