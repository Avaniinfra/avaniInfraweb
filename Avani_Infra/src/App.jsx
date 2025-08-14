import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Amenities from './components/Amenities';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Highlights from './components/Highlights';
import ImageGallery from './components/ImageGallery';
import InvestmentBenifits from './components/InvestmentBenifits';
import LocationSection from './components/LocationSection';
import ProjectOverview from './components/ProjectOverview';
import RegistrationForm from './components/RegistrationForm';
import SpecialOffers from './components/SpecialOffers';
import Header from './components/Header';
import LayoutPlan from './components/LayoutPlan';
import Location from './components/Location';
function App() {

  return (
           <>
  <main className="w-full">
    <Header />
    <HeroSection />
    <LocationSection />
    <ProjectOverview />
    <Highlights/>
    <Amenities />
    <LayoutPlan/>
    <Location/>
    <ImageGallery />
    <RegistrationForm />
    <Footer />
  </main>
</>

  )
}

export default App
