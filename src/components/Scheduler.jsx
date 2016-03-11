import React from 'react';

const Scheduler = (props) => {
  return (
    <div className='schedule-container'>
      <div className='start-time col-xs-4'>
        <div className='hour'>
          {props.start.time}
        <span className='meridiem'>{props.start.meridiem}</span>
        </div>
      </div>
      <div className="hour col-xs-2"> - </div>
      <div className='end-time col-xs-4'>
        <div className='hour'>
          {props.end.time}
          <span className='meridiem'>{props.end.meridiem}</span>
        </div>
      </div>
      <img className='clock col-xs-2' src='../style/images/clock.png'></img>
      </div>
    )
}

export default Scheduler;
