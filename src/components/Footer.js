import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import footerLogo from '../images/footer-logo.png'
import clock from '../images/time.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-divider'></div>
      <div className='footer-logo'>
        <img src={footerLogo} alt='logo' />
      </div>
      <div className='footer-links'>
        <h3>Lien Utiles</h3>
        <div>
          <p>
            <Link to='/'>Configurateur</Link>
          </p>
          <p>
            <Link to='/boutique'>Notre magasin</Link>
          </p>
          <p>
            <Link to='/'>Notice et installation</Link>
          </p>
          <p>
            <Link to='/'>Livraison Transport</Link>
          </p>
        </div>
      </div>
      <div className='footer-contact'>
        <h3>Nous Contacter</h3>
        <b>Adress :</b>
        <p>3 rue du champ de verger Allonnes, Pays de la Loire, France</p>
        <b>Telephone:</b>
        <p>3 rue du champ de verger Allonnes, Pays de la Loire, France</p>
      </div>
      <div className='footer-schedule'>
        <h3>Horraires</h3>
        <b>Lundi a Vendredi</b>
        <div className='time'>
          <img src={clock} alt='clock' />
          7:30-12:00
        </div>
        <div className='time'>
          <img src={clock} alt='clock' />
          13:30-18:00
        </div>
        <b>Samedi </b>
        <p>(Fermé les samedis de janvier et février)</p>
        <div className='time'>
          <img src={clock} alt='clock' />
          9:00-12:00
        </div>
      </div>
      <div className='footer-divider'></div>
    </div>
  )
}

export default Footer
