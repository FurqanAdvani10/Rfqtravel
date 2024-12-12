import { Route, Routes } from 'react-router-dom';
import './App.css';
import whatsappIcon from './Assets/whatsapp.png'
import { Footer, Header } from './Components';
import { Suspense, lazy } from 'react';
import Cloader from './Components/Loader/Cloader';
import Features from './Pages/Features/features';
import Details from './Pages/Details/Details';
import Service from './Pages/Services/Service';

const MainPage = lazy(() => import('./Pages/MainPage'));
// const Courses = lazy(() => import('./Pages/Courses/Courses'));
const ContactUs = lazy(() => import('./Pages/ContactUs/contactUs'));
const AboutUs = lazy(() => import('./Pages/AboutUs/AboutUs'));
// const OurTeamPage = lazy(() => import('./Pages/ourTeam/OurTeam'));
const HajjPackages = lazy(() => import('./Pages/HajjPackages/hajj'));

function App() {
  return (
    <>
      <Header />
      <div className='nav-gap'></div>
      <Suspense fallback={<Cloader />}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/contactUs' element={<ContactUs />} />
          <Route path='/hajj' element={<HajjPackages />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/Features' element={<Features />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/service' element={<Service />} />
          {/* <Route path='/hajjFac' element={<HajjFacilities />} /> */}
          {/* <Route path='/hajj' element={<HajjPackages />} /> */}
        </Routes>
      </Suspense>
      <Footer />
      <div className='fixed-bottom right-100 p-4' style={{ zIndex: "6", left: "initial" }}>
        <a href='https://wa.me/923332184494?text=Hello How can I help you ?' target='_blank'>
          <img src={whatsappIcon} width="120" alt='aaaa' />
        </a>
      </div>
    </>
  );
}

export default App;
