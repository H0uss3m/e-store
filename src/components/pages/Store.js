import React, { useEffect, useState } from 'react'
import './Store.css'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { URL } from '../../utils'
import toolLogo from '../../images/029-toolbox.png'
const Store = () => {
  const [cards, setCards] = useState([])
  // fetch card data
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => setCards(res.data))
      .catch((error) => console.log('error  :', error))
  }, [])

  return (
    <div className='store'>
      <div className='store-banner-box'>
        <div className='store-main-banner'>
          <h1>Nos Produits</h1>
          <p>
            Acceuil <em> > </em> boutique
          </p>
        </div>
      </div>
      <div className='store-body'>
        <div className='store-container'>
          <div className='sotre-divider'></div>
          <div className='store-aside'>
            <div className='store-aside-links'>
              <h3>CATÉGORIES</h3>
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
            <div className='store-aside-links banner'>
              <div className='store-aside-banner'>
                <img src={toolLogo} alt='tool' />
                <p>
                  <b>Configurez votre espace</b>
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidu.
                </p>
              </div>
            </div>
          </div>
          <div className='store-cards-container'>
            <div className='store-cards-links'>
              <h4 className='active-link'>Nouveautés</h4>
              <h4>Populaire</h4>
              <h4>Meilleures Ventes</h4>
            </div>
            <div className='sotre-cards'>
              {cards.map((card) => (
                <div
                  key={card.id}
                  style={{
                    background: `transparent url(${card.picture}) no-repeat`,
                    backgroundSize: 'cover',
                  }}
                  className='store-card'
                >
                  <div className='store-card-overview'>
                    <p className='product-name'>{card.product_name}</p>
                    <p className='product-price'>{card.price} ML</p>
                    <p className='details'>VOIR DETAILS</p>
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
