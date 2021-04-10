import React from 'react'
import Banner from '../Banner'
import ConfigBox from '../ConfigBox'
import Footer from '../Footer'
import Achievement from '../Achievement'
import Facilities from '../Facilities'
import StoreBanner from '../StoreBanner'
import './Home.css'

const Home = () => {
  return (
    <div className='Home'>
      <Banner />

      <div className='body'>
        <ConfigBox />
        <Achievement />
        <Facilities />
        <StoreBanner />
        <Footer />
      </div>
    </div>
  )
}

export default Home
