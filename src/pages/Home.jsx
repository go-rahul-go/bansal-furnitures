import React from 'react'
import "./home.css"
import Hero from '../components/Hero';
import TextStack from '../components/TextStack';

import ProductSlider from '../components/Slider';
import Footer from '../components/Footer';
import Features from '../components/Features';
import Faq from '../components/Faq';

const Home = () => {
  return (
    <>
      <Hero />
      <TextStack />
      <ProductSlider/>
      <Features/>
      <Faq/>
      <Footer/>
    </>
  )
}

export default Home;