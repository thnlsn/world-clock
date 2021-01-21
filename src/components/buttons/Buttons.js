import React, { Fragment } from 'react';

import moment from 'moment';
import 'moment-timezone';

import Button from './Button';

const Buttons = ({ zones, func }) => {
  let newArr = ((zones) => {
    // Empty object
    let map = [],
      // Empty array
      newArr = [];
    // For as long as the length of zones prop array...
    for (let i = 0; i < zones.length; i++) {
      // let v equal the abbv zone
      let v = moment.tz(zones[i]).format('z');
      // If it is NOT the case that map at index
      if (!map[v]) {
        newArr.push([v, zones[i]]);
        map[v] = true;
      }
    }
    return newArr;
  })(zones);

  return (
    <div className='buttons-container'>
      <div className='buttons'>
        {newArr.map((zone, index) => {
          console.log(zone[1]);
          return (
            <Button zone={zone[1]} abbv={zone[0]} func={func} key={index} />
          );
        })}
      </div>
    </div>
  );
};

export default Buttons;
