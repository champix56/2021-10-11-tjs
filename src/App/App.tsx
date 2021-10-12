import React, { Component } from 'react'
import Button from './components/Button/Button'

interface Props {
  
}
interface State {
  counter:number
}

export default class App extends Component<Props, State> {
  state = {counter:0, champs2:0}
  componentDidMount(){
    
  }
  componentDidUpdate(){
    console.log(arguments);
    console.log(this.state)
  }
  render() {
    return (
      <div>
        valeur du compteur :{this.state.counter}
        <Button lorsqueJeClique={()=>{
            this.setState({counter:this.state.counter+1});
           // console.log(this.state);
        }}>Cliquez ici</Button>
      </div>
    )
  }
}
