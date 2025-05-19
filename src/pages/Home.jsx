import React from 'react'
import Header from '../components/Header'
import SliderSection from '../components/SliderSection'
import IntroductionSection from '../components/IntroductionSection'
import ObjectivesSection from '../components/ObjectivesSection'
import ProposedSystemSection from '../components/ProposedSystemSection'
import RequirementsSection from '../components/RequirementsSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <Header/>
        <SliderSection/>
        <IntroductionSection></IntroductionSection>
        <ObjectivesSection/>
        <ProposedSystemSection/>
        <RequirementsSection/>
       <Footer/>
    </>
  )
}

export default Home