import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!!!
          This is a React App
        </p>
        <p>Re-Image or no Re-Image... YES!!! Re-Image to get .env working...</p>
        <p>.env is working after compose build? Nop, not working... we have to reimage? </p>
        <p>Here we go again... .env does not work with compose, have tu use env in the compose file...</p>
        <p>Lets try again... yes, it worked on compose under the machine...</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
