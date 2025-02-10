import React, { useEffect } from 'react'
import { ChoosePackage, FAQ, Faith, Hero, Inquiry, News, Packages, Process, Services, Testimonials } from '../../Components'

function MainPage() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);


  return (
    <>
      <Hero />
      <Packages />

      <Faith />
      <Process />
      <Services />
      <Inquiry />
      {/* <News /> */}
      <Testimonials />
      <FAQ />
    </>
  )
}

export default MainPage