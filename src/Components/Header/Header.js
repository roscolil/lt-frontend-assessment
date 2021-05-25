import React from 'react';
import './Header.css';
import Image from '../Image/Image';
import ProfilePic from '../../assets/Ross.jpg';
// TODO Add props to dynamically change profile picture and profile name from API
const Header = () => {
  return (
    <div className="header">
      <Image image={ProfilePic} />
      <p>@yourname</p>
    </div>
  )
}

export default Header