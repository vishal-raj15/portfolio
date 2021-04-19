import React, { Component} from 'react';
import { Grid ,Cell} from 'react-mdl';
import Education from './education';
import Cmap from './cmap';

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
            <div className="about" id="about_me">
                <div className="intro2" >

                <h1 style={{ textAlign:"center"}}>{abot}</h1>
                </div>
                <hr />
                        <div style={{textAlign:'center'}}>
                            <img 
                            src="https://aceingautism.org/wp-content/uploads/2019/04/Male-profile-silhouette.jpg"
                            slt="avatar"
                            style={{height:'200px'}}
                            />

                        </div>

                        <h2 style={{paddingTop: '1em',textAlign:'center' }}>Vishal raj</h2>
                        <h4 style={{ color: 'grey' , textAlign:'center'}}>software developer</h4>
                        <h4 style={{ color: 'grey' , textAlign:'center'}}>Btech 3nd Year undergraduate EE student</h4>

                        <hr style={{borderTop : '3px solid #0337b2',textAlign:'center' ,width:"100%"}} />

                        <h6 style={{ textAlign:"center"}}>College : Indian Institute Of Technology , Mandi</h6>
                        <h6 style={{ textAlign:"center"}}> 2018 - 2022</h6>

                        <hr style={{borderTop : '3px solid #0337b2',textAlign:'center' ,width:"100%"}} />
                        <h5 style={{ textAlign:"center"}}>Address</h5>
                        <p style={{ textAlign:"center"}}> himachal pradesh , mandi , North campus</p>
                        


                        <h5 style={{ textAlign:"center"}}>{ski}</h5>
                        <hr style={{borderTop : '3px solid #0337b2',textAlign:'center' ,width:"100%"}} />
                        <h5 style={{ textAlign:"center"}}>{s}</h5>
                        <h5 style={{ textAlign:"center"}}>{f}</h5>
                        <h5 style={{ textAlign:"center"}}>{o}</h5>

                        {/* <p><i className="fa fa-envelope" aria-hidden="true" />  vishalraj1380@gmail.com</p>
                        <p><i className="fa fa-envelope" aria-hidden="true" />  b18151@students.iitmandi.ac.in</p>
                    */}
                   
                        {/* <div style={{textAlign:'center'}}>
                            <h2> Education </h2>
                        < Education 
                        startyear = {2018}
                        endyear = {2022}/>
                            

                        </div> */}


                        <Cmap />
                    
                     </div>
        )
    }
}
export default About;