import React, { Component } from 'react'
import './App.css'
import Navbar from './components/ui/Navbar/Navbar';
import FlexLayout from './components/layouts/FlexLayout/FlexLayout';
import MemeViewer, { demoMeme as defaultmeme, demoMeme } from './components/ui/MemeViewer/MemeViewer';
import MemeForm from './components/functionnals/MemeForm/MemeForm';
import { ADR_SRV, RESSOURCES_NAME } from './config/config';
import MemeThumbnail from './components/layouts/MemeThumbnail/MemeThumbnail';
interface Props {

}
interface State {
  memes: Array<{}>,
  images: Array<{}>,
  currentMeme:Meme
}
interface Meme {
  id?: number,
  imageId: number,
  text: string
  x: number,
  y: number,
  fontSize: number,
  fontWeight: string,
  color: string,
  underline: boolean,
  italic: boolean,
};
interface Image {
  url: string,
  titre: string,
  id: number,
  w: number,
  h: number,
}

export default class App extends Component<Props, State> {
  state = { memes: [], images: [], currentMeme:demoMeme.meme}
  componentDidMount() {
    const pmemes = fetch(`${ADR_SRV}${RESSOURCES_NAME.memes}`).then(f => f.json())
    const pimages = fetch(`${ADR_SRV}${RESSOURCES_NAME.images}`).then(f => f.json())
    Promise.all([pmemes, pimages])
      .then(ar_ar => {
        this.setState({ memes: ar_ar[0], images: ar_ar[1] });
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
          <MemeThumbnail>
            {
              this.state.memes.map((e:Meme, i:number) =><MemeViewer meme={e} image={this.state.images.find((ee:Image) => ee.id === e.imageId)} />)

            }
          </MemeThumbnail>


          <FlexLayout>
            <MemeViewer meme={this.state.currentMeme} image={this.state.images.find((e:Image)=>e.id===this.state.currentMeme.imageId)} />
            <MemeForm meme={this.state.currentMeme} onFormChange={(meme:Meme)=>{this.setState({currentMeme:meme})}} />
          </FlexLayout>

        </div>
      </>
    )
  }
}
