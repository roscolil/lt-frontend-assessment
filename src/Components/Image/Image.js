import React from 'react';
import './Image.scss';

const Image = (props) => {
  return (
    <div>
      <img src={props.image} alt="" />
    </div>
  )
}

export default Image