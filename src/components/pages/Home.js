import React from 'react'
import './Home.css'
import Banner from '../Banner'
import HomeCard from '../HomeCard'
import ConfigBox from '../ConfigBox'
import Footer from '../Footer'
import Achievement from '../Achievement'
import { facilities } from '../../utils'
import Facilities from '../Facilities'
import StoreBanner from '../StoreBanner'

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
