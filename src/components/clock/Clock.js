import React, { Fragment, useState, useEffect } from 'react';

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const Clock = ({ hours, seconds, minutes }) => {
  const [secDegrees, setSecDegrees] = useState(seconds);
  const [minDegrees, setMinDegrees] = useState(minutes);
  const [hourDegrees, setHourDegrees] = useState(hours);

  // function to calculate degrees to rotate hand
  const calcDegrees = (num, deg, cb) => {
    const degreesToAdd = num * deg - 90; // minus 90 because default placement of the hand is 90 degrees past the 12 o'clock placement
    if (degreesToAdd === 0) {
      cb(360);
    }
    cb(degreesToAdd);
  };

  useEffect(() => {
    calcDegrees(seconds, 6, setSecDegrees);
    calcDegrees(minutes, 6, setMinDegrees);
    calcDegrees(hours, 30, setHourDegrees);
  });

  return (
    <div className='clock-container'>
      <div
        className='clock'
        css={css`
          &:before {
            transform: rotate(${minDegrees}deg);
            transition: 250ms;
          }
          &:after {
            transform: rotate(${secDegrees}deg);
            transition: 50ms;
          }
        `}
      >
        <span
          className='clock__hour-hand'
          css={css`
            &:before {
              transform: rotate(${hourDegrees}deg);
              transition: 500ms;
            }
          `}
        ></span>
        <span className='clock__hand-hinge'></span>
      </div>
    </div>
  );
};

export default Clock;
