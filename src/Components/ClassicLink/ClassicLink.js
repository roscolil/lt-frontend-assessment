import React from 'react';
import Button from '../Button/Button';

const ClassicLink = (props) => {
  return (
    <div>
      <Button
        onClick={props.href ? () => window.open(props.href, "_blank") : null}
        text={props.text}
      >
      </Button>
    </div>
  )
}

export default ClassicLink