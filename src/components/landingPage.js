import React, { Component} from 'react';
import { Grid , Cell } from 'react-mdl';
import Typical from 'react-typical';
import Particles from 'react-particles-js';
import Project from './project';
import About from './about';
import CommentBox from './commentBox';
import { Container , Segment,Input } from 'semantic-ui-react';


class LandingPage extends Component {
    render() {
        return (
            <div className='infoPage' id="home">
                

                <Grid className="landing-grid">
                
                    <Cell col={12}>

                    
                        <div>
                        

                        <div className="intro" >

                            <h1>Vishal Raj</h1>
                        </div>
                        
                        </div>
                        
                        
                        <div className="banner-text">
                            <h1>open source enthusiast</h1>
                         
                        <p> React | Django | Augmented Reality | OOPs | CPP |Godot Engine | Javascript | Block Chain</p>
                        <br />
                        
                        </div>

                        
                    </Cell>
                </Grid>
                
            </div>
        )
    }
}
export default LandingPage;

