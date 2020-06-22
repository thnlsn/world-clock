import React, { Fragment, useState, useEffect } from 'react';
import './Clock.scss';

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { min } from 'moment';

const Clock = ({ hours, seconds, minutes }) => {
  const [secDegrees, setSecDegrees] = useState(seconds);
  const [minDegrees, setMinDegrees] = useState(minutes);
  const [hourDegrees, setHourDegrees] = useState(hours);

  // function to calculate degrees to rotate hand
  const calcDegrees = (num, deg, cb) => {
    const degreesToAdd = num * deg - 90; // minus 90 because default placement of the hand is 90 degrees past the 12 o'clock placement
    cb(degreesToAdd);
  };

  useEffect(() => {
    calcDegrees(seconds, 6, setSecDegrees);
    calcDegrees(minutes, 6, setMinDegrees);
  });

  return (
    <Fragment>
      <div className='clock-container'>
        <div
          className='clock'
          css={css`
            &:before {
              transform: rotate(${secDegrees}deg);
              transition: 50ms;
            }
            &:after {
              transform: rotate(${minDegrees}deg);
              transition: 50ms;
            }
          `}
        >
          <span></span>
          <span className='clock__hand-hinge'></span>
        </div>
      </div>
    </Fragment>
  );

  /*

<style jsx>{

.clock:before {
  transform: rotate(${clockStore.deg}deg);
  }
}

</style>

  */
};

export default Clock;
