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

  const [currentInterval, setCurrentInterval] = useState(null);

  const startClock = (zone) => {
    console.log('Start Clock');
    setCurrentInterval(
      setInterval(() => {
        myTimer(zone);
      }, 500)
    );

    const myTimer = (zone) => {
      updateTime(zone);
      console.log(zone);
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
  }, []);

  return (
    <div className='App'>
      {hours}:{minutes}:{seconds} {period} {zone} {currentZone}
      <Clock hours={hours} minutes={minutes} seconds={seconds} />
      <Buttons zones={usZones} func={updateZone} />
    </div>
  );
};

/*   let myClock = setInterval(() => {
    updateTime(currentZone);
  }, 500); */

/*   const startClock = () => {
    endClock();
    setInterval(() => {
      updateTime(currentZone);
    }, 500);
  }; */

/*   const endClock = () => {
    clearInterval(myTimer);
  }; */

export default App;
