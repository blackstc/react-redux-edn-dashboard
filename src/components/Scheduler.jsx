import React from 'react';

export default const Scheduler = (props) => {
  return (
    <div className='scheduler'>
      <div className='start-time'>
        <span>8</span>30
        </div>
        -
        <div className='end-time'>
          <span>18</span>30
          </div>
          <img className='clock' src='clock.png'></img>
        </div>
      )
    }
