import React from 'react';
import './App.css';
import Button from './components/Button/Button'
function App() {
  return (
    <div className="App">
      <Button >
        <img src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/finger-256.png" />
        Cliquez ici
      </Button>
      <Button text="Un boutton" />
    </div>
  );
}

export default App;
