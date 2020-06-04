import React, { useState, useEffect } from 'react';
import moment from 'moment';

import './App.css';

const App = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  console.log(moment().format('h:mm:ss a'));
  return (
    <div className='App'>
      <div className='container'>yo</div>
    </div>
  );
};

export default App;
