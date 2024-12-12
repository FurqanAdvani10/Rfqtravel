import React from 'react'
import './process.css'
import makkah from '../../Assets/process2bg.png'
import makkahtower from '../../Assets/21.png'

function Process() {
    return (
        <div className='process-main-container section-padding' id='Process'>
            <div className='container'>
                <div className='row d-flex justify-content-center align-items-center'>
                    <div className='col-md-6 col-xl-6 col-lg-6 col-sm-12'>
                        <div className='process-content'>
                            <div className='Process-heading heading-with-sub'>
                                <h3>Easy Process</h3>
                            </div>
                            <div className='process-contant-container'>
                                <div className='process-contant-no'>
                                    <div className='process-no'>
                                            <h4 className='p-0 m-0'>01</h4>
                                    </div>
                                    <div className='pro-con'>
                                        <h4 className='p-0 m-0'>Choose Package</h4>
                                        <p className='p-0 m-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit elit tellus luctus.</p>
                                    </div>
                                </div>
                                <div className='process-contant-no'>
                                    <div className='process-no'>
                                            <h4 className='p-0 m-0'>02</h4>
                                    </div>
                                    <div className='pro-con'>
                                        <h4 className='p-0 m-0'>Fill Your Documents</h4>
                                        <p className='p-0 m-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit elit tellus luctus.</p>
                                    </div>
                                </div>
                                <div className='process-contant-no'>
                                    <div className='process-no'>
                                            <h4 className='p-0 m-0'>03</h4>
                                    </div>
                                    <div className='pro-con'>
                                        <h4 className='p-0 m-0'>Enjoy Your Travel</h4>
                                        <p className='p-0 m-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit elit tellus luctus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-xl-6 col-lg-6 col-sm-12'>
                        <div className='process-img'>
                            <img className='makkah' src={makkah} alt='' />
                            {/* <img className='makkahtower' src={makkahtower} alt='' /> */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Process