import React, { Component ,useEffect} from 'react';
import { Tabs, Tab,Grid, Cell,Card,CardText,CardMenu,CardTitle,CardActions,Button,IconButton} from 'react-mdl';
import {Link} from 'react-router-dom'

import Aos from "aos";
import "aos/dist/aos.css";

import Background from './test.jpg';



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
				<>

            <div className="categorical-tabs" id='project'>

                


<div className="wrap">
	

		<div className="info">

			<div className="info-col info-col-left">
				<div className="info-item orange">
					<div className="info-item-text" >
						<h3>Power<span className="mark">Station</span></h3>
						<p>An online booking webapp for elctric fuel for electric vehicles, before
visiting power station.</p>

				<h2> Django | paytm | login Auth</h2>


<div className='butnLinks' ><a href="https://github.com/vishal-raj15/hackathon_project" style={{ textDecoration:'none'}}>github</a></div>
                         <div className='butnLinks' ><a href="https://beginners.herokuapp.com/mapnav/first/" style={{ textDecoration:'none'}}>demo</a></div>

                        
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

								<h2> React Native </h2>

                        <div className='butnLinks' ><a href="https://github.com/vishal-raj15/hairDiary/tree/main" style={{ textDecoration:'none'}}>github</a></div>

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
<h2> Ethereum | metamask | solidiy</h2>
                    <div className='butnLinks' ><a href="https://github.com/vishal-raj15/decentralised_postPage" style={{ textDecoration:'none'}}>github</a></div>

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
						<h2> Reactjs</h2>
                        <div className='butnLinks' ><a href="https://github.com/vishal-raj15/video_request" style={{ textDecoration:'none'}}>github</a></div>

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
							<h2> unity | AR</h2>
<div className='butnLinks' ><a href="https://drive.google.com/file/d/1tdwx2hZXlLEhmT-WOy8CPDVV1kXKiXeM/view" style={{ textDecoration:'none'}}>.apk</a></div>
                <div className='butnLinks' ><a href="https://www.youtube.com/watch?v=IpPqfLOAIMo" style={{ textDecoration:'none'}}>Demo</a></div>


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
<h2> Unity </h2>
                <div className='butnLinks' ><a href="https://github.com/vishal-raj15/cs451" style={{ textDecoration:'none'}}>github</a></div>
                <div className='butnLinks' ><a href="https://www.youtube.com/watch?v=33pRmK_9qW0&feature=youtu.be" style={{ textDecoration:'none'}}>Demo</a></div>

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
<h2> tensorflow | CNN</h2>
<div className='butnLinks' ><a href="https://github.com/vishal-raj15/malaria_detector" style={{ textDecoration:'none'}}>github</a></div>

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
<h2> Tensorflow | CNN</h2>
                <div className='butnLinks' ><a href="https://github.com/vishal-raj15/emotion_detection" style={{ textDecoration:'none'}}>github</a></div>

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
			</>
             )
    }
}
export default Project;