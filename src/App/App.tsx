import React, { Component } from 'react'
import './App.css'
import Navbar from './components/ui/Navbar/Navbar';
import FlexLayout from './components/layouts/FlexLayout/FlexLayout';
import MemeViewer, { demoMeme as defaultmeme, demoMeme } from './components/ui/MemeViewer/MemeViewer';
import MemeForm from './components/functionnals/MemeForm/MemeForm';
import { ADR_SRV, RESSOURCES_NAME } from './config/config';
import MemeThumbnail from './components/layouts/MemeThumbnail/MemeThumbnail';
import { Switch, Route, Link, withRouter } from 'react-router-dom'
import store from './store/store'
import { connect } from 'react-redux';
interface Props {

}
interface State {
  memes: Array<{}>,
  images: Array<{}>,
  currentMeme: Meme
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

class App extends Component<any, State> {
  state = { memes: [], images: [], currentMeme: demoMeme.meme }
  componentDidMount() {
    console.log(store );
    // store.dispatch({type:'APP_IS_MOUNT'});
   
  }
  componentDidUpdate() {
    console.log(arguments);
    console.log(this.state)
  }
  render() {
    console.log(this.props);
    return (
      <>
        {/* <div>{JSON.stringify(this.state)}</div> */}
        <div className="App">
          <Navbar></Navbar>
          <Switch>
            <Route path="/" exact>
              <h1>Demat breizh</h1>
              <h2>degemer mat im meme generator</h2>
              |&nbsp;<Link to="/Thumbnail">Liens Thumbnail</Link>&nbsp;
              |&nbsp;<Link to="/Editor">Liens editor</Link>&nbsp;
              |&nbsp;<Link to="/innexistant">Liens editor</Link>&nbsp;|
            </Route>
            <Route path="/Thumbnail">
              <MemeThumbnail>
                {
                  this.props.memes.map((e: Meme, i: number) =>(
                  <div key={`thumb-view-${i}`} onClick={()=>{
                    this.props.setCurrent(e);
                    //this.props.location.pathname='/Editor'
                    this.props.history.push('/Editor',null)
                    }}>
                    <MemeViewer meme={e} image={this.props.images.find((ee: Image) => ee.id === e.imageId)} />
                  </div>))
                }
              </MemeThumbnail>
            </Route>
            <Route path="/Editor">
              <FlexLayout>
                <MemeViewer meme={this.props.current} image={this.props.images.find((e: Image) => e.id === this.props.current.imageId)} />
                <MemeForm />
              </FlexLayout>
            </Route>
            {/* 
              creation d'un ramasse miettes de routes
              match toutes les routes n'ayant trouver de <Route path=""/>
            */}
            <Route path="/">
              <h1>ERROR Url not found!!!</h1>
            </Route>
          </Switch>
        </div>
      </>
    )
  }
}
function mapStateToProps(state,ownProps){
  return {
    images:state.list.images,
    memes:state.list.memes,
    current: state.current,
    ...ownProps
  }
}
function mapDispatchToProps(dispatch,ownProps){
  return {
    setCurrent:(meme)=>dispatch({type:'UPDATE_CURRENT',value:meme})
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(App))