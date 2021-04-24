import React, { Component} from 'react';

import { Grid , Cell} from 'react-mdl';
import Card from "react-bootstrap/Card";
import Logo from './keyboard.jpg';
import Pro from './prob.webp';

import Cpp from './cpp.png';
import  Css from './css.png';
import  Django from './django.png';
import  Js from './js.png';
import  Unity from './unity.png';
import  Node from './node.png';
import  rec from './react.png';
import  Pyt from './python.png';


class Skills extends Component {

   
    render() {
 
        return (
                <div className="skill" style={{ textAlign: 'center' , margin:'0px', backgroundColor:'#FEFFED'}} >
                    <h2> Skills </h2>

                  <h3> Be not afraid of growing slowly, be afraid only of standing still.</h3>

                <div className='icnbox'>

                    <div className='icns1'>
                    <img className='ab' src={Cpp}/>

                    <img className='bc' src={Node}/>
                    <img className='ab' src={rec}/>
                    <img className='ab' src={Js}/>
                    </div>

                   
                    <div className='icns2'>

                    <img className='bc' src={Pyt}/>
                    <img className='bc' src={Django}/>
                    <img className='bc' src={Unity}/>
                    <img className='bc' src={Css}/>
                    </div>
                    
                </div>


            </div>
        )
    }
}
export default Skills;