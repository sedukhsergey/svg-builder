import React from 'react';
import logo from '../../images/Classic_sonic_run3.svg';
import './App.css';
import SvgManager from '../SvgManager';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SvgManager
          svg={logo}
        />
      </header>
    </div>
  );
}

export default App;
