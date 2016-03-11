import React from 'react';

const SquareWidget = (props) => {
  return (
    <div
      className={props.status === true ? 'round-border' : 'false' }
      onClick= {
        function(event){
          console.log(`You clicked ${props.title}`)}}
    >
      <div className="square-widget">
        <img className="image" src={props.image} />
        <p className='title'>{props.title}</p>
      </div>
    </div>
  )
}

export default SquareWidget;
