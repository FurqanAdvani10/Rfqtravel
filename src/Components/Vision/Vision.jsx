import React from 'react'
import { data } from './data'
import './vision.css'

const Vision = () => {
    return (
        <div className='vision-main section-padding'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
                        <div className="vision-heading heading-with-sub">
                            <h6 className="p-0 m-0">WHAT we offer</h6>
                            <h3 className="p-0 m-0">Our Vision and Mission</h3>
                        </div>
                    </div>
                </div>
                <div className="vision-box-main">
                    <div className="row g-4 d-flex align-items-center justify-content-center row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-4">
                        {data.map((item, index) => (
                            <div className="col" key={index}>
                                <div className="vision-item-box d-flex justify-content-center align-items-center flex-column">
                                    <div className="vision-item-icon">
                                        <i className={`fa ${item.icon}`}></i>
                                    </div>
                                    <div className="vision-item">
                                        <h2>{item.title}</h2>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vision
