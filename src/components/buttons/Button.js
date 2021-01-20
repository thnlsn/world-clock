import React from 'react';

const Button = ({ zone, abbv, func }) => {
  return (
    <div className='buttons__btn unselectable' onClick={() => func(zone)}>
      {abbv}
    </div>
  );
};

export default Button;
