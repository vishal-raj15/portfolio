import React, { Component} from 'react';

import { Grid , Cell} from 'react-mdl';
import Card from "react-bootstrap/Card";
import Logo from './keyboard.jpg';
import Pro from './prob.webp';
import Skills from './skills';
import Cpp from './cpp.png';

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Do extends Component {

   
    render() {
 
        return (
                <div className="dopage" style={{ textAlign: 'center' , margin:'0px', backgroundColor:'white'}} >
                    <h2> My Interests </h2>

                    
                    <div className="card-group">
            

    <Card  text="white" style={{ width: '100vw'  , backgroundColor:'white', border: 'none'}}>
    {/* <Card.Header style={{ boarder:'none'}}><img src={Logo} style={{ width:'200px' , height:'200px'}}/></Card.Header> */}
    <Card.Body style={{ paddingTop:'10vh'}} >
    <img src={Logo} style={{ width:'200px' , height:'200px' ,borderRadius:'50%'}}/>
      <Card.Title style={{ boarder:'none' ,padding:'5vh' ,color:'black'}}>Development</Card.Title>
      <Card.Text style={{ boarder:'none' , color:'black' ,paddingLeft:'5vw' , paddingRight:'5vw' , paddingBottom:'60px'}}>
      Development is not just about building softwares. It is also about the insight that every line of code is for a cause. I expect that as I am learning new development concepts, I also learn to produce clean, readable, modular code that can be used for a cause and to build great things.
      </Card.Text>
    </Card.Body>
  </Card>
  <br />

  <Card text="white" style={{ width: '100vw'  , backgroundColor:'white' , border: 'none'}}>
    {/* <Card.Header style={{ boarder:'none'}}><img src={Logo} style={{ width:'200px' , height:'200px'}}/></Card.Header> */}
    <Card.Body style={{ paddingTop:'10vh'}} >
    <img src={Pro} style={{ width:'200px' , height:'200px' ,borderRadius:'50%'}}/>
      <Card.Title style={{ boarder:'none', padding:'5vh',color:'black' }}>Problem Solving</Card.Title>
      <Card.Text style={{ boarder:'none',color:'black',paddingLeft:'5vw' , paddingRight:'5vw' , paddingBottom:'60px'}}>
      I know for a fact that the basics are what one builds a foundation on. So, I give myself adequate time daily to learn different problem solving techniques. I hope these will help me in future scenarios when I would have to tackle real problems while building softwares.
      </Card.Text>
    </Card.Body>
  </Card>
  <br />


</div>

<Skills />


            </div>
        )
    }
}
export default Do;