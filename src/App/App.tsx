import React from 'react';
import './App.css';
import Button from './components/Button/Button'
import Benjamin from './components/Button2/Button'
function App() {
  return (
    <div className="App">
        <Button text="Mr benjamin le button"/>
        <Button text="Un boutton"/>
        <Benjamin/>
    </div>
  );
}

export default App;
