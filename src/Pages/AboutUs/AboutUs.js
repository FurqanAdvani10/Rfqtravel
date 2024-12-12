import React from 'react'
import { FAQ, PageWrapper, Services, Testimonials, Vision } from '../../Components'
import about from '../../Assets/33.webp'
import './about.css'

function AboutUs() {
    return (
        <>
            <PageWrapper
                title={"About Us"}
                moveTo={"Home"}
                navigatePath={'/'}
                subtitle={"About Us"}
            />
            <div className='about-main section-padding'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-7 col-sm-12 col-lg-7 col-xl-7'>
                            <div className='about-content'>
                                <div className="faith heading-with-sub">
                                    <h6 className="p-0 m-0">COMPANY</h6>
                                    <h3 className="p-0 m-0">Trusted Since 2005</h3>
                                </div>
                                <div className='about-para'>
                                    <p className='about-paragh'>
                                        Since its founding in 2005, Enrollment No: 4154, G.L No: 2267, Company NTN No: 2460607-3, Karwan-e-Rafeequl Harmain (PVT) LTD has achieved many great successes in its goals to provide the best available services to the Guests of Allah in minimum price. These successes were made possible through the support of our valuable clients, the pilgrims. Without any advertisement, our Hajj Group is increasing in size over the years. All these Hajjis would bear witness to the fact that we did our utmost to make their Hajj as smooth and comfortable as possible.
                                    </p>
                                  
                                    <p>
                                        Karwan-e-Rafeequl Harmain (PVT) LTD is a travel agency as well as Hajj and Umrah service provider. We provide detailed and reliable information to the tourists, business people and individuals to help them make intelligent decisions allied to their journey.we strive to build healthy relationships with our customers. We ensure to provide best possible deals to our customers. We have highly skilled, qualified and professional staff backed by the latest technology and proper infrastructure. We always seek for the customer convenience and satisfaction, enabling us to be one step ahead of our competitors.
                                    </p>
                                    <p className='para-bold'>Our company offer customizable packages that cater to the varying needs and preferences of pilgrims. These packages may include services such as flights, accommodation, transportation, and guided tours.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-5 col-sm-12 col-lg-5 col-xl-5'>
                            <div className='about-img'>
                                <img className='img-fluid' src={about} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Vision />
            <Services />
            <Testimonials />
            <FAQ />
        </>
    )
}

export default AboutUs