import React, { useEffect, useState } from 'react';
import { FAQ, PageWrapper, Services, Testimonials, Vision } from '../../Components';
import about from '../../Assets/33.webp';
import './about.css';
import Gallery from '../../Components/Gallery/Gallery';
import ceo from './../../Assets/rfqceo.JPG';
import OurTeam from '../../Components/OurTeams/OurTeam';
import Form21 from './Forms/from21';
import Form29 from './Forms/form29';
import IATAForm from './Forms/iata';
// import Form21 from '../../Components/Forms/Form21';
// import Form29 from '../../Components/Forms/Form29';
// import IATACertificate from '../../Components/Forms/IATACertificate';

function AboutUs() {
    const [activeForm, setActiveForm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                        <div className='col-md-7'>
                            <div className='about-content'>
                                <div className="faith heading-with-sub">
                                    <h6>COMPANY</h6>
                                    <h3>Trusted Since 2005</h3>
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
                                <div className='ceo-content'>
                                    <div className='ceo-img'>
                                        <img src={ceo} alt='' />
                                    </div>
                                    <div className='ceo-main'>
                                        <h6>AMIR ANWAR</h6>
                                        <p>CEO of Karwan e Rafeeq ul Harmain</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-5'>
                            <div className='about-img'>
                                <img className='img-fluid' src={about} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Button Section */}
            <div className='section-padding form-toggle-section'>
                <div className="container text-center mb-4">
                    <h3 className="mb-4">View Forms & Certificates</h3>
                    <div className="d-flex justify-content-center flex-wrap gap-3">
                        <button
                            className="form-toggle-btn"
                            onClick={() => {
                                setActiveForm('form1');
                                setModalTitle('Form 21');
                                setShowModal(true);
                            }}
                        >
                            📄 Form 21
                        </button>
                        <button
                            className="form-toggle-btn"
                            onClick={() => {
                                setActiveForm('form3');
                                setModalTitle('Form 29');
                                setShowModal(true);
                            }}
                        >
                            📄 Form 29
                        </button>
                        <button
                            className="form-toggle-btn"
                            onClick={() => {
                                setActiveForm('form2');
                                setModalTitle('IATA Certificate');
                                setShowModal(true);
                            }}
                        >
                            🧾 IATA Certificate
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal Section */}
            {showModal && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{modalTitle}</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                {activeForm === 'form1' && <Form21 />}
                                {activeForm === 'form3' && <Form29 />}
                                {activeForm === 'form2' && <IATAForm />}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <OurTeam />
            <Vision />
            <Gallery />
            <Services />
            <Testimonials />
            <FAQ />
        </>
    );
}

export default AboutUs;
