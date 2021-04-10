import React from 'react'
import './Nav.css'
import logo from '../images/logo-store.png'
import { Link } from 'react-router-dom'

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

        <div className='acceuil'>
          <p>Accueil</p>
        </div>
        <div className='boutique'>
          <Link to='/boutique'>
            <p>Boutique</p>
          </Link>
        </div>
        <div className='realisations'>
          <p>Nos realisations</p>
        </div>
        <div className='contact'>
          <p>Contactez-nous</p>
        </div>
        <div className='body-divider'></div>
      </div>
    </div>
  )
}

export default Nav
