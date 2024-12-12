import React from 'react'
import { ChoosePackage, FAQ, Faith, Hero, Inquiry, News, Packages, Process, Services, Testimonials } from '../../Components'

function MainPage() {
  return (
   <>
    <Hero />
    <Packages />

    <Faith />
    <Process />
    <Services />
    <Inquiry />
    <News />
    <Testimonials />
    <FAQ />
   </>
  )
}

export default MainPage