import React from 'react';
import './Footer.css';
import Logo from '../../assets/link_logo.png'

const Footer = () => {
  return (
    <div>
      <footer>
        <img className="logo" src={Logo} alt="" />
      </footer>
    </div>
  )
}

export default Footer