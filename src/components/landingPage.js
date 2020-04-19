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
            <div>
            <div className='ui container' style={{width: '100%',height: '105%', magin: 'auto'}}  >
                

                <Grid className="landing-grid">
                
                    <Cell col={12}>

                    
                        <div>
                        
                        <img 
                        src="https://aceingautism.org/wp-content/uploads/2019/04/Male-profile-silhouette.jpg"
                        alt="avatar"
                        
                        className="avatar-img"
                        /> 
                        
                        {/* <Typical className="intro"
                            steps={["hey there ! i'm", 1000 , 'Vishal Raj' ,1500 ]}
                            loop={Infinity}
                            wrapper="p"
                        /> */}

                        <div className="intro" >

                           
                            <h1>Vishal Raj</h1>
                        </div>
                        
                        </div>
                        
                        
                        <div className="banner-text">
                            <h1>open source enthusiast</h1>
                        <hr/>  
                        <p> HTML/CSS | Bootstrap | React | React Native | Godot Engine | Javascript | Block Chain</p>
                        <div className="social-link">

                            <a href="https://www.linkedin.com/in/vishal-raj-021494198/" rel="noopener norefferer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>

                            <a href="https://github.com/vishal-raj15" rel="noopener norefferer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>

                            <a href="https://www.facebook.com/profile.php?id=100005355571095" rel="noopener norefferer" target="_blank">
                                <i className="fa fa-facebook-square" aria-hidden="true" />
                            </a>

                            <a href="https://www.instagram.com/vishal_raj3000/" rel="noopener norefferer" target="_blank">
                                <i className="fa fa-instagram" aria-hidden="true" />
                            </a>

                        </div>
                        </div>

                        
                    </Cell>
                </Grid>
                
            </div>
            <div className='sec'>
            <CommentBox />
            </div>
            
            </div>
        )
    }
}
export default LandingPage;

