import React, { useEffect } from 'react';
import './contactUs.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { Formik, useFormik } from 'formik';
import { PageWrapper } from '../../Components';
import { contactForm } from './validation';



const ContactUs = () => {

  const center = [24.8505366, 66.9950476]; // Latitude, Longitude

  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const infoCards = [
    { title: "Head Office", address: "Office #103 Iconic Trade Center Bahadurabad, Karachi ", icon: <FaMapMarkerAlt /> },
    { title: "Phone Number", address: "+9221 34857005, 34856651, 333 2184494 ,322 2184494", icon: <FaPhoneAlt /> },
    { title: "Send Email", address: "rafiqulharamain1@hotmail.com", icon: <FaEnvelope /> },
    { title: "Our Website", address: "www.rfqtravel.com", icon: <FaGlobe /> },
  ];

  const initialValues = {
    name: "",
    email: "",
    message: "",
    service: "",
    phone: ""
  };

  const { values, errors, touched, handleChange, handleSubmit, setFieldTouched } = useFormik({
    initialValues: initialValues,
    validationSchema: contactForm,
    country: '',
    onSubmit: (values, action) => {

      const emailBody = `
          Name: ${values.name} ${values.lastname}
          Email: ${values.email}
          Country: ${values.country}
          phone: ${values.phone}
          Message: ${values.message}
  `;

      const mailtoLink = `mailto:info@slcedu.com?subject=Inquiry&body=${encodeURIComponent(emailBody)}`;

      window.location.href = mailtoLink;

      action.resetForm()
    },
  });
  return (
    <>

      <PageWrapper
        title={"Get In Touch With Us"}
        moveTo={"Home"}
        navigatePath={'/'}
        subtitle={"Contact Us"}
      />

      <div className="contact-us section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-xl-12 col-lg-12 col-sm-12">
              <div className="contact-us-heading heading-with-sub">
                <h6 className="p-0 m-0">Get in Touch with Us</h6>
                <h3 className="p-0 m-0">We're Always Eager To Hear From You!</h3>
              </div>
            </div>
          </div>

          <div className="contact-container">
            <div className="row">
              <div className="col-md-6 col-xl-8 col-lg-8 col-sm-12">
                <div className="map-section">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d930.0!2d67.0585244!3d24.8820308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f0131f9c6c5%3A0xe57eacee2fe6169c!2sIconic%20Trade%20Center%20(ICT)!5e0!3m2!1sen!2s!4v1699986456985!5m2!1sen!2s"
                    style={{
                      border: "0",
                      width: "100%", // Make the width responsive
                      height: "410px", // Fixed height
                    }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  >
                  </iframe>
                </div>
              </div>
              <div className="col-md-6 col-xl-4 col-lg-4 col-sm-12">
                <div className="info-cards-container">
                  <div className="info-cards">
                    {infoCards.map((card, index) => (
                      <div className="info-card" key={index}>
                        <div className="info-card-icon">
                          {card.icon}
                        </div>
                        <div className="info-card-content">
                          <h4>{card.title}</h4>
                          <p>{card.address}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='contact-us-form section-padding'>
        <div className='container'>
          <div className="row">
            <div className="col-md-12">
              <div className="contact-us-form-heading heading-with-sub">
                <h6 className="p-0 m-0">Get in touch with Contact us</h6>
                <h3 className="p-0 m-0">Fill The Form Below So We Can Get To Know You And Your Needs Better.</h3>
              </div>
            </div>
          </div>
          <div className='contact-us-form-container'>
            <div className="row align-items-center justify-content-center">
              <div className="col-md-12 col-sm-12 col-xl-8 col-lg-8">
                <div class="col-md-12">
                  <div class="row">

                    <div class="fst-lst col-md-6 col-12">
                      <input type="name"
                        name='name'
                        class="form-control"
                        id="John"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={() => setFieldTouched('name', true, true)}
                        placeholder="Your Name *" />
                      {errors.name && touched.name ? (
                        <p className="p_msg p-0 m-0">
                          {errors.name}
                        </p>
                      ) : null}
                    </div>
                    <div class="col-6 col-md-6 col-12 email">
                      <input
                        type="eamil"
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={() => setFieldTouched('email', true, true)}
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Your Email *" />
                      {errors.email && touched.email ? (
                        <p className="p_msg p-0 m-0">
                          {errors.email}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div class="col-md-12">
                  <div class="row mt-30">
                    <div class="fst-lst col-md-6 col-12">
                      <input
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={() => setFieldTouched('phone', true, true)}
                        name='phone'
                        type="phone"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Phone Number *" />
                      {errors.phone && touched.phone ? (
                        <p className='p_msg p-0 m-0'>{errors.phone}</p>
                      ) : null}
                    </div>

                    <div class="col-6 col-md-6 col-12 email">
                      <select class="form-select"
                        name='service'
                        value={values.service}
                        onChange={handleChange}
                        onBlur={() => setFieldTouched('service', true, true)}
                        aria-label="Default select example">
                        <option selected>Discord</option>
                        <option value="Hajj">Hajj</option>
                        <option value="Umrah">Umrah</option>
                        <option value="Ziarat">Ziarat</option>
                      </select>
                      {errors.service && touched.service ? (
                        <p className='p_msg p-0 m-0'>
                          {errors.service}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>


                <div class="text-section mt-30">
                  <textarea class="form-control"
                    name='message'
                    value={values.message}
                    onChange={handleChange}
                    onBlur={() => setFieldTouched('message', true, true)}
                    placeholder="Your Message"
                    id="exampleFormControlTextarea1" rows="8"></textarea>
                  {errors.message && touched.message ? (
                    <p className='p_msg msg p-0 m-0'>
                      {errors.message}
                    </p>
                  ) : null}

                </div>
                <div class="contact-btn ">
                  {/* <button type="submit" onClick={handleSubmit}>Submit</button> */}
                  <button type="Submit" onClick={handleSubmit}>Send Your Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default ContactUs;
