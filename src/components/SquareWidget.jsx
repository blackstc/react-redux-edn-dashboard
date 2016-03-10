import React from 'react';

const SquareWidget = (props) => {
  return (
    <div className='round-border'>
      <div className="square-widget">
        <img className="image" src={props.image} />
        <p>{props.title}</p>
      </div>
    </div>
  )
}

export default SquareWidget;
