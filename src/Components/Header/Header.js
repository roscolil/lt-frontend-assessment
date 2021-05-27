import React from 'react';
import './Header.scss';
import Image from '../Image/Image';
import ProfilePic from '../../assets/Ross.jpg';
import data from '../../data/data.json';
// TODO Add props to dynamically change profile picture and profile name from API or local json
const Header = () => {
  return (
    <div className="header">
      <Image image={ProfilePic} />
      <p>{data[0].user}</p>
    </div>
  )
}

export default Header