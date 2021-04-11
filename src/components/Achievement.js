import React from 'react'
import './Achievement.css'
import achievementImg from '../images/1e1fc50768fe089201a9d2f194ad33f1.png'
const Achievement = () => {
  return (
    <div className='achievement-box'>
      <div className='achievement-box-title'>
        <h1>Nos realisations</h1>
      </div>
      <div className='achievement-box-slider'>
        <h3>Panneau bois</h3>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasdundefined
        </p>
      </div>
      <div className='achievement-box-img'>
        <img src={achievementImg} alt='realisation' />
      </div>
    </div>
  )
}

export default Achievement
