import React, { Component} from 'react';

import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import 'mapbox-gl/dist/mapbox-gl.css';
class App extends Component {
  render(){
  return (

    // <div style={{height: '700px', position: 'relative'}}>
    //   
    <Layout fixedHeader>
          <Header className='header-color' title={<span><span style={{ color: '#ddd' }}> <i className="fa fa-user" aria-hidden="true" />   My </span><strong>Profile</strong></span>}>
              <Navigation>
                  <Link to="/portfolio/">Home</Link>
                  <Link to="/portfolio/about">About</Link>
                  <Link to="/portfolio/project">Project</Link>
                  <Link to="/portfolio/contact">Contact</Link>
              </Navigation>
          </Header>
          {/* <Drawer title="Title">
              <Navigation>
                  <a href="/">Link1</a>
                  <a href="/">Link</a>
                  <a href="/">Link</a>
                  <a href="/">Link</a>
              </Navigation>
          </Drawer> */}
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
