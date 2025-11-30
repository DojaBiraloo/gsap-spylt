import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './section/HeroSection'
import MessageSection from './section/MessageSection'
import FlavorSection from './section/FlavorSection'
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import NutritionSection from './section/NutritionSection'
import BenefitSection from './section/BenefitSection'


   gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


const App = () => {
useGSAP(()=>{
  ScrollSmoother.create({
    smooth:3,
    effects:true,
  })
})
  return (
    <main>
      <NavBar></NavBar>
      <div id="smooth-wrapper">
    <div id="smooth-content">
      <HeroSection></HeroSection>
      <MessageSection></MessageSection>
      <FlavorSection></FlavorSection>
      <NutritionSection></NutritionSection>
      <BenefitSection></BenefitSection>
      <div className='h-dvh'></div>
    </div>
  </div>
      
    </main>
  )
}

export default App
