import React, { useState } from 'react';
import './MusicLink.scss'
import chevron from '../../assets/chevron-right.png'
// TODO only toggle one link at a time
const MusicLink = ({ title, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  function openPlayer() {
    // TODO pass in player/songname here
    alert('pass in player/songname here in api request')
    let url = ''
    try {
      fetch(url)
        .then(res => res.json())
        .then(json => console.log(json))
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="dropdown-btn"
        onClick={() => toggle(!isOpen)}
      >
        {title}
      </div>
      <div className={`dropdown ${isOpen ? 'open' : 'close'}`}>
        {isOpen && (
          <ul className="dropdown-wrapper">
            <div className="dropdown-player">
              <img className="player-img" src="https://via.placeholder.com/50" alt="" />
              <a href="">
                <img className="player-play" src="https://via.placeholder.com/30" alt="" />
              </a>
              <span>{'Song name - Artists name'.substr(0, 20) + "\u2026"}</span>
            </div>
            <div className="progress-bar"></div>
            {
              data.map((item, index) => (
                <li li className="dropdown-li" key={index} >
                  <button className="li-btn" onClick={() => openPlayer()}>
                    <div className="li-music-wrapper">
                      <img className="music-img" src="https://via.placeholder.com/30" alt="" />
                      <span className="li-name">{item.name}</span>
                    </div>
                    <img
                      className="li-image"
                      src={chevron}
                      alt="" />
                  </button>
                </li>
              ))
            }
            <li className="dropdown-footer">
              <a href="https://www.songkick.com/">
                <span>by Songkick</span>
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  )
}

export default MusicLink
