import React from 'react';
import './Image.css';

const Image = (props) => {
  return (
    <div>
      <img src={props.image} alt="" />
    </div>
  )
}

export default Image