import React, { useState } from 'react';
import './ShowLinks.scss'
import chevron from '../../assets/chevron-right.png'
// TODO only toggle one link at a time
const ShowLinks = ({ title, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // TODO click through to display details of show/venue on click
  function handleOnClick() { alert('You need to pay to access this feature! :)') }

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
                  <button className="li-btn" onClick={() => handleOnClick()}>
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
