import React from 'react';
import './App.css';
import Greeting from './Greeting';
import Counter from './Counter';

function App() {
  return (
    <div className="app-container">
      <div className="greeting">
        <Greeting name="Messoudi" />
      </div>
      <div className="counter">
        <Counter />
      </div>
    </div>
  );
}

export default App;
