import React, { Component} from 'react';
import { Grid , Cell } from 'react-mdl';
import Typical from 'react-typical';
import Particles from 'react-particles-js';
import Project from './project';
import About from './about';
import CommentBox from './commentBox';
import { Container , Segment,Input } from 'semantic-ui-react';
import ParticleBackground from '../ParticleBackground';


class LandingPage extends Component {
    render() {
        return (
            <div className='infoPage' id="home">
                
                
                <div className="landing-grid">

                
                
                        <div className="intro" >
                            

                            <h1>Hi, my name is Vishal Raj</h1>

                        </div>
                        
                        <ParticleBackground /><div className="secx" >
                        <h1>I develop web apps/mobile apps/Games/things/UI</h1>

                        </div>

                        
                        
                        
                </div>
                
            </div>
        )
    }
}
export default LandingPage;

