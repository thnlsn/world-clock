import React, { useState, useEffect } from 'react';
import './App.scss';

import moment from 'moment';
import 'moment-timezone';

import Clock from './components/clock/Clock';
import Buttons from './components/buttons/Buttons';

const App = () => {
  const usZones = moment.tz.names();
  const [currentZone, setCurrentZone] = useState(moment.tz.guess());

  const [hours, setHours] = useState(moment.tz(currentZone).format('h'));
  const [minutes, setMinutes] = useState(moment.tz(currentZone).format('m'));
  const [seconds, setSeconds] = useState(moment.tz(currentZone).format('ss'));
  const [period, setPeriod] = useState(moment.tz(currentZone).format('a'));
  const [zone, setZone] = useState(moment.tz(currentZone).format('z'));

  const [currentInterval, setCurrentInterval] = useState(null);

  const startClock = (zone) => {
    console.log('Start Clock');
    setCurrentInterval(
      setInterval(() => {
        myTimer(zone);
      }, 500)
    );

    const myTimer = (zone) => {
      // If zone is passed in (therefore exists and will evaluate to truthy) then updateTime with zone passed in, otherwise do so with users timezone
      zone ? updateTime(zone) : updateTime(moment.tz.guess());
    };
  };

  const stopClock = () => {
    console.log('Stop Clock');
    clearInterval(currentInterval);
  };

  const updateTime = (zone) => {
    setHours(moment.tz(zone).format('h'));
    setMinutes(moment.tz(zone).format('mm'));
    setSeconds(moment.tz(zone).format('ss'));
    setPeriod(moment.tz(zone).format('a'));
    setZone(moment.tz(zone).format('z'));
  };

  const updateZone = (zone) => {
    setCurrentZone(zone);
    updateTime(zone);
    stopClock();

    startClock(zone);
  };

  useEffect(() => {
    setCurrentZone(moment.tz.guess());
    startClock();
    console.log(moment.tz.countries());
  }, []);

  return (
    <div className='App'>
      <div className='time'>
        <span>
          {hours}:{minutes}:{seconds} {period} {zone}
        </span>
      </div>
      <Clock hours={hours} minutes={minutes} seconds={seconds} />
      <Buttons zones={usZones} func={updateZone} />
    </div>
  );
};

export default App;
