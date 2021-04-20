import React, { Component ,useEffect} from 'react';
import { Tabs, Tab,Grid, Cell,Card,CardText,CardMenu,CardTitle,CardActions,Button,IconButton} from 'react-mdl';
import {Link} from 'react-router-dom'

import Aos from "aos";
import "aos/dist/aos.css";


class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab :0};
    }


    render() {


        const w = '<Work />';
        const h = '<Home />';
        const a = '<About />';
        const c = '<Contact />';
      const parser = new DOMParser();
     // const decodedString = parser.parseFromString(`<!doctype html><body>${strToDecode}`, 'text/html').body.textContent;
      const decodedwork = parser.parseFromString(`<!doctype html><body>${w}`, 'text/html').body.textContent;
      const decodedhome = parser.parseFromString(`<!doctype html><body>${h}`, 'text/html').body.textContent;
      const decodedabout = parser.parseFromString(`<!doctype html><body>${a}`, 'text/html').body.textContent;
      const decodedcontact = parser.parseFromString(`<!doctype html><body>${c}`, 'text/html').body.textContent;
      

        return (

            <div className="categorical-tabs" id='project'>
				{/* <ParticleBackground /> */}
                <div className="title"> {w}</div>
                {/* <Tabs className="tab" activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab style={{color:"white"}}>React</Tab>
                    <Tab style={{color:"white"}}>Godot</Tab>
                    <Tab style={{color:"white"}}>JS</Tab>
                    <Tab style={{color:"white"}}>ML/DL</Tab>
                    <Tab style={{color:"white"}}>Blockchain</Tab>
                    <Tab style={{color:"white"}}>AR</Tab>
                    <Tab style={{color:"white"}}>msql</Tab>
                    <Tab style={{color:"white"}}>CPP</Tab>
                    <Tab style={{color:"white"}}>Django</Tab>
                </Tabs>

                    <Grid className='testit'>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                    </Grid> */}




<div className="wrap">
	

		<div className="info">

			<div className="info-col info-col-left">
				<div className="info-item orange">
					<div className="info-item-text">
						<h3>Power<span className="mark">Station</span></h3>
						<p>An online booking webapp for elctric fuel for electric vehicles, before
visiting power station.</p>

<Button colored><a href="https://github.com/vishal-raj15/hackathon_project">github</a></Button>
                         <Button colored><a href="https://beginners.herokuapp.com/mapnav/first/">demo</a></Button>

                        
					</div>
					<div className="info-item-wrap">
						<div className="info-item-triangle">
							<div className="triangle triangle-top"></div>
							<div className="triangle triangle-bottom"></div>
							<div className="icon sprite-dollar"></div>
						</div>
					</div>
				</div>
				<div className="info-item green">
					<div className="info-item-text">
						<h3>Hair <span className="mark">Diary</span></h3>
						<p>Task reminder android app.</p>
                        <p>Fetching user data from a post api with all attributes and media on a
                                specific day of the calendar.</p>

                        <Button colored><a href="https://github.com/vishal-raj15/hairDiary/tree/main">github</a></Button>

					</div>
					<div className="info-item-wrap">
						<div className="info-item-triangle">
							<div className="triangle triangle-top"></div>
							<div className="triangle triangle-bottom"></div>
							<div className="icon sprite-stats"></div>
						</div>
					</div>
				</div>
                <div className="info-item orange">
					<div className="info-item-text">
						<h3>News<span className="mark">Feed</span></h3>
						<p>A decentralised app for posting news or any new information by the
users with the help of Ethereum blockchain technology .</p>

                    <Button colored><a href="https://github.com/vishal-raj15/decentralised_postPage">github</a></Button>

					</div>
					<div className="info-item-wrap">
						<div className="info-item-triangle">
							<div className="triangle triangle-top"></div>
							<div className="triangle triangle-bottom"></div>
							<div className="icon sprite-stats"></div>
						</div>
					</div>
				</div>
                
                <div className="info-item green">
					<div className="info-item-text">
						<h3>Video<span className="mark">Request</span></h3>
						<p>this uses user input data to fetch request from youtube api , atmost 30 video can be fetched for each search.</p>

                        <Button colored><a href="https://github.com/vishal-raj15/video_request">github</a></Button>

					</div>
					<div className="info-item-wrap">
						<div className="info-item-triangle">
							<div className="triangle triangle-top"></div>
							<div className="triangle triangle-bottom"></div>
							<div className="icon sprite-stats"></div>
						</div>
					</div>
				</div>
            
            </div>
			<div className="info-col info-col-right">
				<div className="info-item red">
					<div className="info-item-text">
						<h3>AR<span className="mark">one</span></h3>
                            <p>A marker-based Augmented Reality app build with unity and vuforia. </p>

<Button colored><a href="https://drive.google.com/file/d/1tdwx2hZXlLEhmT-WOy8CPDVV1kXKiXeM/view">.apk</a></Button>
                <Button colored><a href="https://www.youtube.com/watch?v=IpPqfLOAIMo">Demo</a></Button>


                       </div>
					<div className="info-item-wrap">
						<div className="info-item-triangle">
							<div className="triangle triangle-top"></div>
							<div className="triangle triangle-bottom"></div>
							<div className="icon sprite-search"></div>
						</div>
					</div>
				</div>
				<div className="info-item blue">
					<div className="info-item-text">
						<h3>X<span className="mark">plore</span></h3>
                        <p> A 2d Space game where Spaceship in 0 gravity have ability to move in
infinite 2d space and can doutch and destroy obstacles.</p>

                <Button colored><a href="https://github.com/vishal-raj15/cs451">github</a></Button>
                <Button colored><a href="https://www.youtube.com/watch?v=33pRmK_9qW0&feature=youtu.be">github</a></Button>

    					</div>
					<div className="info-item-wrap">
						<div className="info-item-triangle">
							<div className="triangle triangle-top"></div>
							<div className="triangle triangle-bottom"></div>
							<div className="icon sprite-man"></div>
						</div>
					</div>
				</div>

                <div className="info-item red">
					<div className="info-item-text">
						<h3>Malaria<span className="mark">Detector</span></h3>
						
                        <p> Deep learning-based Convolutional Neural Network model which can
detect malarial parasites from microscopic images of blood samples
with accuracy of about 98 percent</p>
<Button colored><a href="https://github.com/vishal-raj15/malaria_detector">github</a></Button>

                        </div>
					<div className="info-item-wrap">
						<div className="info-item-triangle">
							<div className="triangle triangle-top"></div>
							<div className="triangle triangle-bottom"></div>
							<div className="icon sprite-man"></div>
						</div>
					</div>
				</div>




                <div className="info-item blue">
					<div className="info-item-text">
						<h3>Emotion<span className="mark">Detector</span></h3>
                        <p> A OpenCV project for user's emotions detection with tensorflow and
openCv ,this model can recognize or identify different human
emotions to include happiness, sadness, fear, anger, neutral of an
image or a live video </p>

                <Button colored><a href="https://github.com/vishal-raj15/emotion_detection">github</a></Button>

    					</div>
					<div className="info-item-wrap">
						<div className="info-item-triangle">
							<div className="triangle triangle-top"></div>
							<div className="triangle triangle-bottom"></div>
							<div className="icon sprite-man"></div>
						</div>
					</div>
				</div>



			</div>
		</div>
	</div>
	













             
            </div>
             )
    }
}
export default Project;