import React from 'react';

const SquareWidget = (props) => {
  return (
    <div
      className={props.title === 'Nutrients' ? 'false' :'round-border' }
      onClick= {function(event){console.log(`You clicked ${props.title}`)}}
      >
      <div className="square-widget">
        <img className="image" src={props.image} />
        <p>{props.title}</p>
      </div>
    </div>
  )
}

export default SquareWidget;
