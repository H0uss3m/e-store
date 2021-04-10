import React from 'react'
import './HomeCard.css'
const HomeCard = ({ array, type }) => {
  return array.map((card) => (
    <div
      key={card.id}
      className='banner-card'
      style={{
        background: `transparent url(${card.src}) no-repeat`,
        backgroundSize: 'cover',
      }}
    >
      {type === 'cards' ? <p>{card.name}</p> : ''}
    </div>
  ))
}

export default HomeCard
