import React, { Component} from 'react';
import { Grid ,Cell} from 'react-mdl';
import Education from './education';
import Cmap from './cmap';
import ParticleBackground from '../ParticleBackground';

import Me from './me.jpeg';
import Newmap from './newmap';




class About extends Component {
    render() {

        const sk = '< Skills />';
        const skills = '{ .Languages() : { C++/C , Python , Javascript , C#} }';
        const frame = '{ .FrameWork() : { Reactjs , React Native , Django } }';
        const others = '{Git , Unity , Etherium }';
        
        const abz = '< About />';
        const c = '<Contact />';
      const parser = new DOMParser();
      const s = parser.parseFromString(`<!doctype html><body>${skills}`, 'text/html').body.textContent;
    const f = parser.parseFromString(`<!doctype html><body>${frame}`, 'text/html').body.textContent;
        const o = parser.parseFromString(`<!doctype html><body>${others}`, 'text/html').body.textContent;
        const ski = parser.parseFromString(`<!doctype html><body>${sk}`, 'text/html').body.textContent;
        const abot =parser.parseFromString(`<!doctype html><body>${abz}`, 'text/html').body.textContent;
        const cnt =parser.parseFromString(`<!doctype html><body>${c}`, 'text/html').body.textContent;

        return (
            <div className="about" id="about_me" >
                
                <div className="intro2" >
                

                <h2 style={{ textAlign:"center" , color:'black'}}> A LITTLE BIT ABOUT ME</h2>
                </div>
                
                        <div style={{textAlign:'center'}}>
                            <img 
                            src={Me}
                            slt="avatar"
                            style={{height:'200px',width:'200px', borderRadius:'50%'}}
                            />

                        </div>

                        <div className='metext' style={{ textAlign:'center' ,margin:'0 auto' , justifyContent:'center', paddingTop:'5vh' , paddingBottom:'5vh' , fontSize:'1.2rem' ,color: '#27221f'}}>
                        Hey! My name is Vishal Raj and I'm a coding enthusiast with keen interest in the field of Software Development. As of now, I am pursuing my B.Tech in Electrical Engineering from <span className='cole'>Indian Institute of Technology Mandi</span> . With my knowledge of web development, I build webapps that teach me more than I already know and that can be used for a cause. I have a knack for developing and learning. I aspire to have a career where I learn cutting edge technologies and build impeccable things

                        </div>
                        


                        {/* <p><i className="fa fa-envelope" aria-hidden="true" />  vishalraj1380@gmail.com</p>
                        <p><i className="fa fa-envelope" aria-hidden="true" />  b18151@students.iitmandi.ac.in</p>
                    */}
                   
                        {/* <div style={{textAlign:'center'}}>
                            <h2> Education </h2>
                        < Education 
                        startyear = {2018}
                        endyear = {2022}/>
                            

                        </div> */}


                        {/* <Cmap /> */}
                        <Newmap/>
                     </div>
        )
    }
}
export default About;