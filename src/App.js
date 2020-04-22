import React, { Component} from 'react';

import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

import { Link,Switch , Route, Router , HashRouter } from 'react-router-dom';
import 'mapbox-gl/dist/mapbox-gl.css';
import LandingPage from './components/landingPage';
import About from './components/about';
import Project from './components/project';


class App extends Component {
  state = { time :"", date :""};

  componentDidMount() {
    setInterval(() => {
      this.setState({time : new Date().toLocaleTimeString(), date : new Date().toLocaleDateString() })
    },1000)
  }

  render(){

  return (

    // <div style={{height: '700px', position: 'relative'}}>
    //
     
         
    <Layout>
          <Header className='header-color' title={<span><span style={{ color: '#ddd' }}> <i className="fa fa-user" aria-hidden="true" />   My </span><strong>Profile</strong></span>}>
              <Navigation>
                  <div className="date"> {this.state.date} </div>
                  <div className="time"> {this.state.time} </div>
                  <Link to="/portfolio">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/project">Project</Link>
              </Navigation>
          </Header>
          <Drawer className="drawer-color" title="Menu Bar">
              <Navigation>
              <div className="date">Date :  {this.state.date} </div>
                  <div className="time">Time :  {this.state.time} </div>
                  <Link to="/portfolio"><i className='fa fa-home' aria-hidden="true" /> Home</Link>
                  <Link to="/about"><i className='fa fa-address-book' aria-hidden="true" /> About</Link>
                  <Link to="/project"><i className='fa fa-file' aria-hidden="true" /> Project</Link>
              </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
          
            <Switch>
    <Route exact path="/portfolio" component={LandingPage} />
    <Route path="/about" component={About} />
    
    <Route path="/project" component={Project} />

    </Switch>

          </Content>
      </Layout>
      
    

  );
}
}

export default App;
