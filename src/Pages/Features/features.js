import React, { useEffect } from 'react';
import { PageWrapper, Testimonials } from '../../Components';
import { motion } from 'framer-motion';
import './features.css';

import icon1 from './../../Assets/icon11.png';
import icon2 from '../../Assets/icon12.png';
import icon3 from '../../Assets/icon2.png';
import icon4 from '../../Assets/icon3.png';
import icon5 from '../../Assets/icon4.png';
import icon6 from '../../Assets/icon7.png';
import arafah from '../../Assets/arafah.webp';
import citytour from '../../Assets/citytour.webp';
import localmarket from '../../Assets/localmarket.webp';
import rawah from '../../Assets/rawah.webp';
import maqam from '../../Assets/maqam.webp';
import lab from '../../Assets/lab.webp';

const featuresList = [
  { icon: icon1, title: 'Tawaf', text: 'Circling the Kaaba seven times is a key ritual.' },
  { icon: icon5, title: 'Ihram', text: 'Wearing white garments is essential for Hajj and Umrah.' },
  { icon: icon4, title: 'Prayer Mat', text: 'A clean and sacred mat is used for prayers.' },
  { icon: icon3, title: 'Jamarat', text: 'Throwing pebbles at pillars symbolizes rejecting evil.' },
  { icon: icon2, title: 'Zam-Zam', text: 'This holy water is a blessed gift from Makkah.' },
  { icon: lab, title: 'Library', text: 'A place filled with Islamic books and knowledge.' },
  { icon: icon6, title: 'Mina', text: 'Pilgrims stay here during the days of Hajj.' },
  { icon: arafah, title: 'Arafah', text: 'Standing in Arafah is the most important Hajj ritual.' },
  { icon: localmarket, title: 'Local Market', text: 'A marketplace to buy traditional goods and souvenirs.' },
  { icon: rawah, title: 'Rawdha', text: 'A blessed area inside the Prophet’s Mosque in Madinah.' },
  { icon: citytour, title: 'City Tour', text: 'Exploring the historical and spiritual sites of the city.' },
  { icon: maqam, title: 'Maqam Ibrahim', text: 'The sacred stone where Prophet Ibrahim stood.' },
];

function Features() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='features-page'>
      <PageWrapper title={'Features'} moveTo={'Home'} navigatePath={'/'} subtitle={'Features'} />

      <section className='section-padding'>
        <div className='container'>
          <div className='heading-with-sub text-center mb-4'>
            <h6>Features</h6>
            <h2 className='section-title'>Charting Your Sacred Path</h2>
          </div>

          <div className='row g-4'>
            {featuresList.map((item, index) => (
              <motion.div
                key={index}
                className='col-12 col-sm-6 col-lg-4'
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className='feature-card'>
                  <img src={item.icon} alt={item.title} className='feature-icon' />
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
}

export default Features;
