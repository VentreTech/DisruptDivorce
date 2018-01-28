import React from 'react'
import Link from 'gatsby-link'
import Slider from '../components/Slider'
import OurClients from '../components/OurClients'
import HowItWorks from '../components/HowItWorks'
import Testimonials from '../components/Testimonials'
import Services from '../components/Services'

const IndexPage = ({data}) => (
  <div>
    <Slider />
    <HowItWorks />
    <Services />
  </div>
)

export default IndexPage
