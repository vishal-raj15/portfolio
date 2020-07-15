import React, { Component} from 'react';

import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

import { Link,Switch , Route, Router , HashRouter } from 'react-router-dom';
import 'mapbox-gl/dist/mapbox-gl.css';
import LandingPage from './components/landingPage';
import About from './components/about';
import Project from './components/project';
import Headerpage from './components/headerPage';

class App extends Component {
  render(){
    return (

    // <div style={{height: '700px', position: 'relative'}}>
    //
         <div>
           <header> 
           <Headerpage />
           </header>
           <section>
           <LandingPage />
           </section>
           <section>
             <Project />
           </section>
      
      
      </div>


  );
}
}

export default App;
