import React from 'react'
import './Footer.css'
import logo from '../images/footer-logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-divider'></div>
      <div className='footer-logo'>
        <img src={logo} alt='store-logo' />
      </div>
      <div className='footer-links'>
        <label>Lien Utiles</label>
        <ul>
          <li>
            <Link to='/'>Configurateur</Link>
          </li>
          <li>
            <Link to='/'>Notre magasin</Link>
          </li>
          <li>
            <Link to='/'>Notice et installation</Link>
          </li>
          <li>
            <Link to='/'>Livraison Transport</Link>
          </li>
        </ul>
      </div>
      <div className='footer-contact'>
        <label>Nous Contacter</label>
        <b>Adress :</b>
        <p>3 rue du champ de verger Allonnes, Pays de la Loire, France</p>
        <b>Telephone:</b>
        <p>3 rue du champ de verger Allonnes, Pays de la Loire, France</p>
      </div>
      <div className='footer-schedule'>
        <label>Nous Contacter</label>
        <b>Lundi a Vendredi</b>
        <p className='time'>7:30-12:00</p>
        <p className='time'>13:30-18:00</p>
        <p>
          <b>Samedi </b>
          <br></br>
          <em>(Fermé les samedis de janvier et février)</em>
        </p>
        <p className='time'>9:00-12:00</p>
      </div>
      <div className='footer-divider'></div>
    </div>
  )
}

export default Footer
