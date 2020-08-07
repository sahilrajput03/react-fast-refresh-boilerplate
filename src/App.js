import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  let [mystate, setMyState] = useState(19)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={() => {
          setMyState(mystate+200)
        }}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {mystate}
        </a>
      </header>
    </div>
  );
}

export default App;
