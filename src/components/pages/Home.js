import React from 'react'
import logo from '../../images/1e1fc50768fe089201a9d2f194ad33f1.png'
import logo1 from '../../images/img-3.png'
import configLogo from '../../images/008-fence@2x.png'
import './Home.css'
import HomeCard from '../HomeCard'
const cards = [
  { id: 0, src: logo },
  { id: 1, src: logo1 },
  { id: 2, src: logo },
  { id: 3, src: logo1 },
  { id: 4, src: logo },
]
const Home = () => {
  return (
    <div className='Home'>
      <div className='banner-box'>
        <div className='main-banner'></div>
        <div className='banner-cards'>
          {cards.map((card, index) => (
            <HomeCard key={card.id} logo={card.src} />
          ))}
        </div>
      </div>

      <div className='body'>
        <div className='config-box'>
          <div className='config-box-logo'>
            <img src={configLogo} alt='config-logo' />
          </div>
          <div className='config-box-paragraph'>
            <h1>Configurez votre espace</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidu.
            </p>
          </div>
        </div>
        <div className='realisations-box'>
          <div className='title'>
            <h1>Nos realisations</h1>
          </div>
          <div className='slider'>slider</div>
          <div className='realisation-img'>realisation</div>
        </div>
        <div className='instalation-box'>
          <div className='instalation-box-title'></div>
          <div className='instalation-box-img'></div>
        </div>
        <div className='store-box'></div>

        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default Home
