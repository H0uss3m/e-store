import React from 'react'
import './Banner.css'
import { cards } from '../utils'
import HomeCard from './HomeCard'
const Banner = () => {
  return (
    <div className='banner-box'>
      <div className='main-banner'></div>
      <div className='banner-cards'>
        <HomeCard array={cards} type='cards' />
      </div>
    </div>
  )
}

export default Banner
