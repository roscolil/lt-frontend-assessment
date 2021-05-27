import React from 'react';
import './Footer.scss';
import Logo from '../../assets/link_logo.png'

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <img className="logo" src={Logo} alt="" />
      </footer>
    </div>
  )
}

export default Footer