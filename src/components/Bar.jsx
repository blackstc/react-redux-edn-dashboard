import Thermometer from 'react-thermometer'
import React from 'react';

const Bar = (props) => {
  if (props.level > 50) {
    return (
      <div className='bar'>
        <p className='days'>{props.days}</p>
        <div className='therm'>
          <Thermometer
            min={0}
            max={100}
            width={30}
            height={400}
            backgroundColor={'gray'}
            fillColor={'#58648E'}
            current={props.level}
          />
        </div>
      </div>
    )
  } else {
    return (
      <div className='bar'>
        <p className="days">{props.days}</p>
        <div className='therm'>
          <Thermometer
            min={0}
            max={100}
            width={30}
            height={400}
            backgroundColor={'gray'}
            fillColor={'#BE5000'}
            current={props.level}
          />
        </div>
      </div>
    )
  }
}

export default Bar;
