import React, { useState, useEffect } from 'react';
import './css/style.css';

import moment from 'moment';
import 'moment-timezone';

import { abbrs } from './momentZones.js';

import Clock from './components/clock/Clock';
import Buttons from './components/buttons/Buttons';

const App = () => {
  const usZones = moment.tz.names();
  const [currentZone, setCurrentZone] = useState(moment.tz.guess());

  moment.fn.zoneName = function () {
    var abbr = this.zoneAbbr();
    return abbrs[abbr] || abbr;
  };

  const [hours, setHours] = useState(moment.tz(currentZone).format('h'));
  const [minutes, setMinutes] = useState(moment.tz(currentZone).format('m'));
  const [seconds, setSeconds] = useState(moment.tz(currentZone).format('ss'));
  const [period, setPeriod] = useState(moment.tz(currentZone).format('a'));
  const [zone, setZone] = useState(moment.tz(currentZone).format('zz'));

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
    setZone(moment.tz(zone).format('zz'));
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
      <div className='time'>
        <span className='time__exact heading-secondary'>
          {hours}:{minutes}:{seconds} <span>{period}</span>
        </span>
      </div>
      <Clock hours={hours} minutes={minutes} seconds={seconds} />
      <div className='time'>
        <div className='time__zone heading-primary'>{zone}</div>
      </div>
      <Buttons zones={usZones} func={updateZone} />
      <div className='links'>
        <a className='link' href='https://github.com/thnlsn/world-clock'>
          <i class='fab fa-github'></i>
        </a>
        <a className='link' href='https://www.linkedin.com/in/thnlsn/'>
          <i class='fab fa-linkedin'></i>
        </a>
      </div>
    </div>
  );
};

export default App;
