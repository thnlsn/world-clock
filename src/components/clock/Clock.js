import React, { Fragment } from 'react';
import './Clock.scss';

const Clock = () => {
  return (
    <Fragment>
      <div className='clock-container'>
        <div className='clock borderSolid borderWidth-xl borderRadius-50 bg-cover'>
          <span className='clock__hand-hinge borderRadius-50'></span>
        </div>
      </div>
    </Fragment>
  );
};

export default Clock;
