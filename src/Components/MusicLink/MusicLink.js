import React, { useState } from 'react';
import './MusicLink.scss'
import chevron from '../../assets/chevron-right.png'
// TODO only toggle one link at a time
const Dropdown = ({ title, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // TODO click through to display details of show/venue on click
  function handleOnClick() { alert('You need to pay to access this feature! :)') }
  // TODO generic clasnames
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
            <div className="dropdown-song">
              <img className="song-img" src="https://via.placeholder.com/50" alt="" />
              <a href="">
                <img className="song-play" src="https://via.placeholder.com/30" alt="" />
              </a>
              <span>{'Song name - Artists name'.substr(0, 20) + "\u2026"}</span>
            </div>
            <div className="progress-bar"></div>
            {
              data.map((item, index) => (
                <li li className="dropdown-li" key={index} >
                  <button className="li-btn" onClick={() => handleOnClick()}>
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

export default Dropdown
