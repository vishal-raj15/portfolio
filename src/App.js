import React, { Component} from 'react';

import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link,Switch , Route } from 'react-router-dom';
import 'mapbox-gl/dist/mapbox-gl.css';
import LandingPage from './components/landingPage';
import About from './components/about';
import Project from './components/project';


class App extends Component {
  render(){
  return (

    // <div style={{height: '700px', position: 'relative'}}>
    //
    <div>   
         
    <Layout>
          <Header className='header-color' title={<span><span style={{ color: '#ddd' }}> <i className="fa fa-user" aria-hidden="true" />   My </span><strong>Profile</strong></span>}>
              <Navigation>
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/project">Project</Link>
              </Navigation>
          </Header>
          <Drawer className="drawer-color" title="Menu Bar">
              <Navigation>
                  <Link to="/"><i className='fa fa-home' aria-hidden="true" /> Home</Link>
                  <Link to="/about"><i className='fa fa-address-book' aria-hidden="true" /> About</Link>
                  <Link to="/project"><i className='fa fa-file' aria-hidden="true" /> Project</Link>
              </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/about" component={About} />
    
    <Route path="/project" component={Project} />

    </Switch>

          </Content>
      </Layout>
      
    </div>

  );
}
}

export default App;
