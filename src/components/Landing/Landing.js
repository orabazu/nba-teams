import React from 'react';


import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'
import Teams from '../Teams/Teams'


const Landing = () => {
  return (
    <React.Fragment>
      <Hero title="NBA Teams" subtitle="Click to see details" />
      <Teams />
      <Footer />
    </React.Fragment>
  )
}
export default Landing;