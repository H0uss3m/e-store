import React from 'react'
import './Nav.css'
import logo from '../images/logo-store.png'
import { Link } from 'react-router-dom'
import { cards } from '../utils'

const Nav = () => {
  return (
    <div className='navbar'>
      <div className='navbar-header'>
        <Link to='/'>
          <div className='logo'>
            <img src={logo} alt='store-logo' />
          </div>
        </Link>
        <div className='search'>
          <input type='text' placeholder='Recherche' />
        </div>
        <div className='adress'>
          <p>Notre magasin</p>
        </div>
        <div className='config'>
          <p>Configurateur</p>
        </div>
        <div className='header-divider'></div>
      </div>
      <div className='navbar-body'>
        <div className='body-divider'></div>

        <Link className='acceuil' to='/'>
          <p>Accueil</p>
        </Link>
        <div className='boutique'>
          <div className='form-box'>
            <div className='form-img'>
              {cards.map((card) => (
                <p key={card.id}>
                  <Link to='/boutique'>{card.name}</Link>
                </p>
              ))}
            </div>
            <div className='form'>
              <button>Envoyer</button>
            </div>
          </div>

          <p>Boutique</p>
        </div>
        <div className='realisations'>
          <p>Nos realisations</p>
        </div>
        <div className='contact'>
          <div className='form-box'>
            <div className='form-img'>
              <p>Coordonnées & Map</p>
            </div>
            <div className='form'>
              <label>Nom & Prénom :</label>
              <input type='text' />
              <label>E-mail :</label>

              <input type='text' />
              <label>Message</label>
              <textarea rows={5} />
              <button>Envoyer</button>
            </div>
          </div>
          <p>Contactez-nous</p>
        </div>
        <div className='body-divider'></div>
      </div>
    </div>
  )
}

export default Nav
