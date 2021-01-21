import React, { useState, useEffect } from 'react';
import './css/style.css';

import moment from 'moment';
import 'moment-timezone';

import { abbrs } from './momentZones.js';

import Clock from './components/clock/Clock';
import Buttons from './components/buttons/Buttons';

const App = () => {
  // Get all zones
  const usZones = moment.tz.names();
  // Figure out what zone user is in
  const [currentZone, setCurrentZone] = useState(moment.tz.guess());

  moment.fn.zoneName = function () {
    var abbr = this.zoneAbbr();
    return abbrs[abbr] || abbr;
  };

  // Set all current zone state to correct time
  const [hours, setHours] = useState(moment.tz(currentZone).format('h'));
  const [minutes, setMinutes] = useState(moment.tz(currentZone).format('m'));
  const [seconds, setSeconds] = useState(moment.tz(currentZone).format('ss'));
  const [period, setPeriod] = useState(moment.tz(currentZone).format('a'));
  const [zone, setZone] = useState(moment.tz(currentZone).format('zz'));

  const [currentInterval, setCurrentInterval] = useState(null);

  // Start interval of half a second
  const startClock = (zone) => {
    /*     console.log('Start Clock'); */
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

  // Stop the interval
  const stopClock = () => {
    /* console.log('Stop Clock'); */
    clearInterval(currentInterval);
  };

  // Set all state to the time values of whatever zone is passed in
  const updateTime = (zone) => {
    setHours(moment.tz(zone).format('h'));
    setMinutes(moment.tz(zone).format('mm'));
    setSeconds(moment.tz(zone).format('ss'));
    setPeriod(moment.tz(zone).format('a'));
    setZone(moment.tz(zone).format('zz'));
  };

  // Change the zone state, as well as the time, to reflect new zone then stop and start the clock again
  const updateZone = (zone) => {
    setCurrentZone(zone);
    updateTime(zone);
    stopClock();

    startClock(zone);
  };

  // On page load set the current zone to users and start the clock
  useEffect(() => {
    setCurrentZone(moment.tz.guess());
    startClock();
  }, []);

  return (
    <div className='App'>
      <div className='time u-bg-gradient-down'>
        <span className='time__exact heading-secondary'>
          {hours}:{minutes}:{seconds} <span>{period}</span>
        </span>
      </div>
      <Clock hours={hours} minutes={minutes} seconds={seconds} />
      <div className='time u-pd-small u-bg-gradient-up'>
        <div className='time__zone heading-primary'>{zone}</div>
      </div>
      <Buttons zones={usZones} func={updateZone} />
      <div className='u-spacer'>&nbsp;</div>
      <div className='links'>
        <a
          className='link'
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/thnlsn/world-clock'
        >
          <i className='fab fa-github'></i>
        </a>
        <a
          className='link'
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.linkedin.com/in/thnlsn/'
        >
          <i className='fab fa-linkedin'></i>
        </a>
      </div>
    </div>
  );
};

export default App;
