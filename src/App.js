import React from 'react';
import stravaBtn from './assets/images/stravaBtn.png';

import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Treat Me</h1>

        <img src={stravaBtn} className="App-l" alt="logo" />


      </header>
    </div>
  );
}

export default App;
