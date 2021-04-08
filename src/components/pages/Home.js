import React from 'react'
import logo from '../../images/1e1fc50768fe089201a9d2f194ad33f1.png'
import logo1 from '../../images/img-3.png'
import Footer from '../Footer'
import Nav from '../Nav'
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
      <Nav />
      <div className='banner-box'>
        <div className='main-banner'></div>
        <div className='banner-cards'>
          {cards.map((card, index) => (
            <HomeCard key={card.id} logo={card.src} />
          ))}
        </div>
      </div>

      <div className='body'>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <div>Lorem Ipsem </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
