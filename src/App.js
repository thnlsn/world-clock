import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment-timezone';

import Clock from './components/clock/Clock';
import Buttons from './components/buttons/Buttons';

import './App.scss';

const App = () => {
  const usZones = moment.tz.zonesForCountry('US');
  const [currentZone, setCurrentZone] = useState(moment.tz.guess());

  const [hours, setHours] = useState(moment.tz(currentZone).format('h'));
  const [minutes, setMinutes] = useState(moment.tz(currentZone).format('m'));
  const [seconds, setSeconds] = useState(moment.tz(currentZone).format('ss'));
  const [period, setPeriod] = useState(moment.tz(currentZone).format('a'));
  const [zone, setZone] = useState(moment.tz(currentZone).format('z'));

  const updateTime = (zone) => {
    setHours(moment.tz(zone).format('h'));
    setMinutes(moment.tz(zone).format('mm'));
    setSeconds(moment.tz(zone).format('ss'));
    setPeriod(moment.tz(zone).format('a'));
    setZone(moment.tz(zone).format('z'));
  };

  const startClock = () => {
    setInterval(() => {
      updateTime(currentZone);
    }, 500);
  };

  const updateZone = (zone) => {
    setCurrentZone(zone);
    updateTime(zone);
  };

  useEffect(() => {
    startClock();
    setCurrentZone(moment.tz.guess());
  }, []);

  return (
    <div className='App'>
      {hours}:{minutes}:{seconds} {period} {zone} {currentZone}
      <Clock hours={hours} minutes={minutes} seconds={seconds} />
      <Buttons zones={usZones} func={updateZone} />
    </div>
  );
};

export default App;
