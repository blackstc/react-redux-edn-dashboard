import React from 'react';

const Scheduler = (props) => {
  return (
    <div className='scheduler'>
      <div className='start-time col-xs-4'>
        <span className='hour'>8</span>30
      </div>
      <div className="hour col-xs-2"> - </div>
      <div className='end-time col-xs-4'>
        <span className='hour'>18</span>30
      </div>
      <img className='clock col-xs-2' src='clock.png'></img>
    </div>
  )
}

export default Scheduler;
