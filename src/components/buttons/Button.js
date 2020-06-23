import React, { Fragment, useState, useEffect } from 'react';
import './Buttons.scss';

const Button = ({ zone, func }) => {
  return (
    <Fragment>
      <div className='buttons__btn' onClick={() => func(zone)}>
        {zone}
      </div>
    </Fragment>
  );
};

export default Button;
