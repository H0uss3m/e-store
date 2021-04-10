import React from 'react'
import './StoreBanner.css'
import logo from '../images/1e1fc50768fe089201a9d2f194ad33f1.png'

const StoreBanner = () => {
  return (
    <div className='store-box'>
      <div className='store-box-title'>
        <h1>Notre magasin</h1>
      </div>
      <div className='store-box-slider'>
        <img src={logo} alt='magasin' />
        <p>
          Dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr.
        </p>
      </div>
      <div className='store-box-img'>magasin photos</div>
    </div>
  )
}

export default StoreBanner
