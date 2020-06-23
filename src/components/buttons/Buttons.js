import React, { Fragment, useState, useEffect } from 'react';
import './Buttons.scss';

import Button from './Button';

const Buttons = ({ zones, func }) => {
  return (
    <Fragment>
      <div className='buttons-container'>
        <div className='buttons'>
          {zones.map((zone, index) => {
            return <Button zone={zone} func={func} key={index} />;
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Buttons;
