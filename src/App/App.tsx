import React from 'react';
import './App.css';
import Button from './components/Button/Button'
import  {CloudPoints, Histogram as Histo} from 'react-graphical-ui'
function App() {
  let mesVaules=[12,58,45,65,84,123,151,12,0,45]
  return (
    <div className="App">
      <Histo values={mesVaules} display={'inline'} max={152} />
      <CloudPoints values={mesVaules} display={'inline'} max={152} />

      <Button lorsqueJeClique={ (argument1)=> {alert('J\'ai cliqué sur Benjamin');console.log(argument1);}} >
        <img src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/finger-256.png" />
        Cliquez ici
      </Button>
      <Button text="Un boutton" color="blue" style={{textDecoration:'underline'}}/>
    </div>
  );
}

export default App;
