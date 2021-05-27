import React, { useState } from 'react';
import './ShowLinks.scss'
import chevron from '../../assets/chevron-right.png'
// TODO only toggle one link at a time
const ShowLinks = ({ title, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // TODO Expand this function to click through to display details of show/venue by passing in required object outlined here https://www.songkick.com/developer/response-objects
  async function fetchShow() {
    alert('Example of Songkick API query https://api.songkick.com/api/3.0/artists/{venue}/gigography.json?apikey={your_api_key}')
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
            {
              data.map((item, index) => (
                <li li className="dropdown-li" key={index} >
                  <button className="li-btn" onClick={() => fetchShow()}>
                    <div className="li-venue-wrapper">
                      <span className="li-date">{item.date}</span>
                      <span className="li-venue">{item.venue}</span>
                    </div>
                    <span
                      className="li-tickets"
                    >
                      {
                        item.tickets ?
                          <img
                            className="li-image"
                            src={chevron}
                            alt="" /> :
                          'Sold out'
                      }
                    </span>
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

export default ShowLinks
