import React, { Component} from 'react';
import { Container , Segment,Input } from 'semantic-ui-react';

import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

import { Link,Switch , Route, Router , HashRouter } from 'react-router-dom';

import LandingPage from './landingPage';
import Project from './project';
import About from './about';


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
  return (

<header className='toolbar' >
                <nav className='toolbar_navigation'>
                    <div className='logo' > Web DEV</div>
                    <div className="spacer" />
                        <div className='toolbar-items'>
                            <ul>
                            {/* <div className="time"> {this.state.time} </div> */}
                            <li><Link to="/portfolio">Home</Link></li>
                            <li><Link to="/project">Project</Link></li>
                            <li><Link to="/about">About</Link></li>
                            </ul>
                        
                    </div>
                </nav>
                

            </header>

    );
  }
}

export default Headerpage;