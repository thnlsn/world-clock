import React, { useState, useEffect } from 'react';
import moment from 'moment';

import './App.css';

const App = () => {
  const [hours, setHours] = useState(moment().format('h'));
  const [minutes, setMinutes] = useState(moment().format('mm'));
  const [seconds, setSeconds] = useState(moment().format('ss'));
  return (
    <div className='App'>
      <div className='container'>
        {hours}:{minutes}:{seconds}
      </div>
    </div>
  );
};

export default App;
