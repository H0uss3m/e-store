import React from 'react'
import './ConfigBox.css'
import configLogo from '../images/008-fence@2x.png'

const ConfigBox = () => {
  return (
    <div className='config-box'>
      <div className='config-box-logo'>
        <img src={configLogo} alt='config' />
      </div>
      <div className='config-box-paragraph'>
        <h1>Configurez votre espace</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidu.
        </p>
      </div>
    </div>
  )
}

export default ConfigBox
