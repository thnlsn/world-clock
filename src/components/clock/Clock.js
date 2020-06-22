import React, { Fragment, useState } from 'react';
import './Clock.scss';

const Clock = ({ hours, seconds, minutes }) => {
  const [degrees, setDegrees] = useState(hours);

  // function to calculate degrees to rotate hand
  const calcDegrees = (hours) => {
    const degreesToAdd = hours * 30 - 90; // minus 90 because default placement of the hand is 90 degrees past the 12 o'clock placement
    degrees = degreesToAdd;
  };

  return (
    <Fragment>
      <div className='clock-container'>
        <div className='clock degStyle'>
          <span className='clock__hand-hinge'></span>
        </div>
      </div>
    </Fragment>
  );

  let degStyle = {
    transform: `rotate(${degrees}deg)`,
  };

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
