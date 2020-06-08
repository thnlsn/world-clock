import React, { Fragment } from 'react';
import './Clock.scss';

const Clock = () => {
  return (
    <Fragment>
      <div className='clock-container'>
        <div className='clock'>
          <span className='clock__hand-hinge'></span>
        </div>
      </div>
    </Fragment>
  );
};

export default Clock;
