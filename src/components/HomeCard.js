import React from 'react'
import './HomeCard.css'
const HomeCard = ({ logo }) => {
  return (
    <div
      className='banner-card'
      style={{ background: `transparent url(${logo}) no-repeat` }}
    >
      <p>logo</p>
    </div>
  )
}

export default HomeCard
