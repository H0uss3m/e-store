import React from 'react'
import './Store.css'
import Footer from '../Footer'
const Store = () => {
  return (
    <div className='store'>
      <div className='store-banner-box'>
        <div className='store-main-banner'>
          <h1>Nos Produits</h1>
          <p>
            Acceuil <em>></em> boutique
          </p>
        </div>
      </div>
      <div className='store-body'>
        <div className='store-container'>
          <div className='sotre-divider'></div>
          <div className='store-aside'>
            <div className='store-aside-links'>
              <h1>CATÉGORIES</h1>
              <h3>Lame Bois</h3>
              <h3>Lame Bois</h3>
              <h3>Lame Bois</h3>
              <h3>Lame Bois</h3>
              <h3>Lame Bois</h3>
            </div>
            <div className='store-aside-banner'>
              <h1>CATÉGORIES</h1>
              <h3>Lame Bois</h3>
              <h3>Lame Bois</h3>
              <h3>Lame Bois</h3>
              <h3>Lame Bois</h3>
              <h3>Lame Bois</h3>
            </div>
          </div>
          <div className='store-cards-container'>
            <div className='store-cards-links'>
              <h4>Nouveautés</h4>
              <h4>Populaire</h4>
              <h4>Meilleures Ventes</h4>
            </div>
            <div className='sotre-cards'>
              <div className='store-card'></div>
              <div className='store-card'></div>
              <div className='store-card'></div>
              <div className='store-card'></div>
              <div className='store-card'></div>
              <div className='store-card'></div>
              <div className='store-card'></div>
              <div className='store-card'></div>
              <div className='store-card'></div>
            </div>
          </div>
          <div className='sotre-divider'></div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Store
