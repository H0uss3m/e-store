import React, { useEffect, useState } from 'react'
import './Store.css'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { url } from '../../utils'
const Store = () => {
  const [cards, setCards] = useState([])
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setCards(res.data))
      .catch((error) => console.log('error  :', error))
  }, [])

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
              <div className='store-aside-buttons'>
                <Link className='active'>
                  <p>Lame Bois</p>
                </Link>
                <Link>
                  <p>Lame Composite</p>
                </Link>
                <Link>
                  <p>Panneau Bois</p>
                </Link>
                <Link>
                  <p>Grille Rigide</p>
                </Link>
                <Link>
                  <p>Gabion</p>
                </Link>
              </div>
            </div>
            <div className='store-aside-links ban'>
              <h1>CATÉGORIES</h1>
              <div className='store-aside-buttons'>
                <Link className='active'>
                  <p>Lame Bois</p>
                </Link>
                <Link>
                  <p>Lame Composite</p>
                </Link>
                <Link>
                  <p>Panneau Bois</p>
                </Link>
                <Link>
                  <p>Grille Rigide</p>
                </Link>
                <Link>
                  <p>Gabion</p>
                </Link>
              </div>
            </div>
          </div>
          <div className='store-cards-container'>
            <div className='store-cards-links'>
              <h4>Nouveautés</h4>
              <h4>Populaire</h4>
              <h4>Meilleures Ventes</h4>
            </div>
            <div className='sotre-cards'>
              {cards.map((card) => (
                <div key={card.id} className='store-card'>
                  {/* <img src={card.picture} alt={card.product_name} /> */}
                  <div className='store-card-overview'>
                    <p>{card.product_name}</p>
                    <h2>{card.price} ML</h2>
                  </div>
                </div>
              ))}
              <div className='store-loading'>
                <button>
                  <b>AFFICHER PLUS</b>
                </button>
              </div>
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
