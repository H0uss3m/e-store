import React from 'react'
import './StoreBanner.css'
import logo from '../images/image.png'
import storeImg from '../images/c49410fcd941eb66349f9dd27fceebaf.png'

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
      <div className='store-box-img'>
        <img src={storeImg} alt='store' />
      </div>
    </div>
  )
}

export default StoreBanner
