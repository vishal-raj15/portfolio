import React, { Component} from 'react';
import { Container , Segment,Input } from 'semantic-ui-react';

import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

import { Switch , Route, Router , HashRouter } from 'react-router-dom';

import LandingPage from './landingPage';
import Project from './project';
import About from './about';
import Contact from './contact';
// import { Link, animateScroll as scroll } from 'react-scroll';

import { HashLink as Link } from 'react-router-hash-link';
import {Logo } from './arte.png';

// class Headerpage extends Component {

//     state = { time :"", date :""};

//   componentDidMount() {
//     setInterval(() => {
//       this.setState({time : new Date().toLocaleTimeString(), date : new Date().toLocaleDateString() })
//     },1000)
//   }

//     render() {
//         return (
            // <header className='toolbar' >
            //     <nav className='toolbar_navigation'>
            //         <div className='logo' > Web DEV</div>
            //         <div className="spacer" />
            //             <div className='toolbar-items'>
            //                 <ul>
            //                 {/* <div className="time"> {this.state.time} </div> */}
            //                 <li><Link to="/portfolio">Home</Link></li>
            //                 <li><Link to="/project">Project</Link></li>
            //                 <li><Link to="/about">About</Link></li>
            //                 </ul>
                        
            //         </div>
            //     </nav>
                

            // </header>
//         )
//     }
// }
// export default Headerpage;

class Headerpage extends Component {

render() {

  const strToDecode = '.RAJI0() ';
  const w = '<Work />';
  const h = '<Home />';
  const a = '<About />';
  const c = '<Contact />';
const parser = new DOMParser();
const decodedString = parser.parseFromString(`<!doctype html><body>${strToDecode}`, 'text/html').body.textContent;
const decodedwork = parser.parseFromString(`<!doctype html><body>${w}`, 'text/html').body.textContent;
const decodedhome = parser.parseFromString(`<!doctype html><body>${h}`, 'text/html').body.textContent;
const decodedabout = parser.parseFromString(`<!doctype html><body>${a}`, 'text/html').body.textContent;
const decodedcontact = parser.parseFromString(`<!doctype html><body>${c}`, 'text/html').body.textContent;

  return (

<nav className='toolbar' >
                <nav className='toolbar_navigation'>


  <div className='logo' > { decodedString}</div>
                    <div className="spacer" />
                        <div className='toolbar-items'>
                           
                              <Link

                              style={{ textDecoration: 'none' }}
                             activeClass="active"
                              className="a"
                              smooth to="#home"
                              // to="home"
                              // spy={true}
                              // smooth={true}

                              
                              // offset={0}
                              // duration={500}
                              
                              >{h}</Link>
                            {/* <div className="time"> {this.state.time} </div> */}
                            
                            <Link
                            // to="project"
                             activeClass="active"
                             style={{ textDecoration: 'none' }}
                              className="a"
                              smooth to="#project"
                              
                              // spy={true}
                              // smooth={true}
                              // duration={500}
                              
                              
                              >{w}</Link>



                              

                            <Link
                             activeClass="active"
                              className="a"
                              style={{ textDecoration: 'none' }}
                              smooth to="#about_me"
                              // to="about"
                              // spy={true}
                              // smooth={true}
                              // offset={0}
                              // duration={500}
                              
                              >{a}</Link>

                              <Link
                             activeClass="active"
                             style={{ textDecoration: 'none' }}
                              className="a"

                              smooth to="#contact"
                              // to="contact"
                              // spy={true}
                              // smooth={true}
                              // offset={0}
                              // duration={500}
                              
                              
                              >{c}</Link>
                            
                    </div>
                </nav>
                

            </nav>

    );
  }
}

export default Headerpage;