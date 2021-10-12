import React, { Component } from 'react'
import './App.css'
import Navbar from './components/ui/Navbar/Navbar';
import FlexLayout from './components/layouts/FlexLayout/FlexLayout';
import MemeViewer, { demoMeme as defaultmeme } from './components/ui/MemeViewer/MemeViewer';
import MemeForm from './components/functionnals/MemeForm/MemeForm';
import { ADR_SRV, RESSOURCES_NAME } from './config/config';
interface Props {

}
interface State {
  memes:Array<{}>,
  images:Array<{}>
}

export default class App extends Component<Props, State> {
  state = { memes:[],images:[] }
  componentDidMount() {
    const pmemes=fetch(`${ADR_SRV}${RESSOURCES_NAME.memes}`).then(f=>f.json())
    const pimages=fetch(`${ADR_SRV}${RESSOURCES_NAME.images}`).then(f=>f.json())
    Promise.all([pmemes,pimages])
      .then(ar_ar=>{
        this.setState({memes:ar_ar[0], images:ar_ar[1]});
        return ar_ar;
      })
  }
  componentDidUpdate() {
    console.log(arguments);
    console.log(this.state)
  }
  render() {
    return (
      <>
        <div>{JSON.stringify(this.state)}</div>
        <div className="App">
          <Navbar></Navbar>
          <FlexLayout>
            <MemeViewer meme={defaultmeme.meme} image={defaultmeme.image} />
            <MemeForm />
          </FlexLayout>

        </div>
      </>
    )
  }
}
