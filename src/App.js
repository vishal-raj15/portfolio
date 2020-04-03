import React, { Component} from 'react';

import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

import 'mapbox-gl/dist/mapbox-gl.css';
import LandingPage from './components/landingPage';
import About from './components/about';
import Project from './components/project';


class App extends Component {
  render(){
  return (

    // <div style={{height: '700px', position: 'relative'}}>
    //   
    <Layout fixedHeader>
          <Header className='header-color' title={<span><span style={{ color: '#ddd' }}> <i className="fa fa-user" aria-hidden="true" />   My </span><strong>Profile</strong></span>}>
              <Navigation>
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/project">Project</Link>
              </Navigation>
          </Header>
          <Drawer title="Title">
              <Navigation>
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/project">Project</Link>
              </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
            

          </Content>
      </Layout>
    //</div>

  );
}
}

export default App;
