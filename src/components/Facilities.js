import React from 'react'
import './Facilities.css'
import HomeCard from './HomeCard'
import { facilities } from '../utils'
const Facilities = () => {
  return (
    <div className='facilities-box'>
      <div className='facilities-box-title'>
        <h1>Notice</h1>
        <h1> & Installation</h1>
        <p>
          Avant de commencer, calculez la quantité de bois, de béton et de
          quincaillerie dont vous aurez besoin.
        </p>
      </div>
      <HomeCard array={facilities} type='installations' />
    </div>
  )
}

export default Facilities
