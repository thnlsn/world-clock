import React, { useState, useEffect } from 'react';
import moment from 'moment';

import Clock from './components/clock/Clock';

import './App.scss';

const App = () => {
  const [hours, setHours] = useState(moment().format('h'));
  const [minutes, setMinutes] = useState(moment().format('mm'));
  const [seconds, setSeconds] = useState(moment().format('ss'));
  const [period, setPeriod] = useState(moment().format('a'));
  return (
    <div className='App'>
      {hours}:{minutes}:{seconds} {period}
      <Clock hours={hours} />
    </div>
  );
};

export default App;
