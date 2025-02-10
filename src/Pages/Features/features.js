import React, { useEffect } from 'react'
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

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);


    return (
        <div>
            <PageWrapper
                title={"Features"}
                moveTo={"Home"}
                navigatePath={'/'}
                subtitle={'Features'}
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
                        {[
                            { icon: icon1, title: 'Tawaf', text: 'Circling the Kaaba seven times is a key ritual.' },
                            { icon: icon5, title: 'Ihram', text: 'Wearing white garments is essential for Hajj and Umrah.' },
                            { icon: icon4, title: 'Prayer Mat', text: 'A clean and sacred mat is used for prayers.' },
                            { icon: icon3, title: 'Jamarat', text: 'Throwing pebbles at pillars symbolizes rejecting evil.' },
                            { icon: icon2, title: 'Zam-Zam', text: 'This holy water is a blessed gift from Makkah.' },
                            { icon: lab, title: 'Library', text: 'A place filled with Islamic books and knowledge.' },
                            { icon: icon6, title: 'Mina', text: 'Pilgrims stay here during the days of Hajj.' },
                            { icon: icon6, title: 'Arafah', text: 'Standing in Arafah is the most important Hajj ritual.' },
                            { icon: localmarket, title: 'Local Market', text: 'A marketplace to buy traditional goods and souvenirs.' },
                            { icon: rawah, title: 'Rawdha', text: 'A blessed area inside the Prophet’s Mosque in Madinah.' },
                            { icon: citytour, title: 'City Tour', text: 'Exploring the historical and spiritual sites of the city.' },
                            { icon: maqam, title: 'Maqam Ibrahim', text: 'The sacred stone where Prophet Ibrahim stood.' },
                        ].map((item, index) => (
                            <div key={index} className='col'>
                                <div className='content-icon'>
                                    <div className='faith-icon'>
                                        <img src={item.icon} alt='icon' />
                                    </div>
                                    <div className='faith-content-box'>
                                        <h4 className='p-0 m-0'>{item.title}</h4>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Testimonials />
        </div>
    )
}

export default Features