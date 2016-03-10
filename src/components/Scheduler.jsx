import React from 'react';

const Scheduler = (props) => {
  return (
    <div>
      <div className='start-time col-xs-4'>
        <div className='hour'>
          {props.start}
        </div>
      </div>
      <div className="hour col-xs-2"> - </div>
      <div className='end-time col-xs-4'>
        <div className='hour'>
          {props.end}
        </div>
      </div>
      <img className='clock col-xs-2' src='../style/images/clock.png'></img>
      </div>
    )
}

export default Scheduler;
