import React from 'react'
import './HomeCard.css'
import FacilityLogo from '../images/Groupe25.png'
const HomeCard = ({ array, type }) => {
  return array.map((card) => (
    <div
      key={card.id}
      className={type === 'cards' ? 'banner-card' : 'facilities-banner-card'}
      style={{
        background: `transparent url(${card.src}) no-repeat`,
        backgroundSize: 'cover',
      }}
    >
      {type === 'cards' ? (
        <p>{card.name}</p>
      ) : (
        <img src={FacilityLogo} alt='lettre E' />
      )}
    </div>
  ))
}

export default HomeCard
