import React, { Component} from 'react';

import './App.scss';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

import { Link,Switch , Route, Router , HashRouter } from 'react-router-dom';
import 'mapbox-gl/dist/mapbox-gl.css';
import LandingPage from './components/landingPage';
import About from './components/about';
import Project from './components/project';
import Headerpage from './components/headerPage';
import Contact from './components/contact';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  render(){
    return (

    // <div style={{height: '700px', position: 'relative'}}>
    //
    <div className="App">
          
          
           <Headerpage />
           
           <LandingPage />
          
             <Project />
             <About />
             <Contact />
             </div>


  );
}
}

export default App;

