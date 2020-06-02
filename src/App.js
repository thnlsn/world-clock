import React from 'react';
import moment from 'moment';

import './App.css';

const App = () => {
  console.log(moment().format('h:mm:ss a'));
  return (
    <div className='App'>
      <div className='container'>yo</div>
    </div>
  );
};

export default App;
