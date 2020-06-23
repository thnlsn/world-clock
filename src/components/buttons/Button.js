import React, { Fragment } from 'react';

import moment from 'moment';
import 'moment-timezone';

const Button = ({ zone, abbv, func }) => {
  return (
    <Fragment>
      <div className='buttons__btn unselectable' onClick={() => func(zone)}>
        {abbv}
      </div>
    </Fragment>
  );
};

export default Button;
