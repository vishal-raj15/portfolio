import React, { Component} from 'react';
import { Grid ,Cell} from 'react-mdl';
import Education from './education';


class About extends Component {
    render() {
        return (
            <div className="about">
                <Grid>
                    <Cell className="half1" col={4}>
                        <div style={{textAlign:'center'}}>
                            <img 
                            src="https://aceingautism.org/wp-content/uploads/2019/04/Male-profile-silhouette.jpg"
                            slt="avatar"
                            style={{height:'200px'}}
                            />

                        </div>

                        <h2 style={{paddingTop: '1em',textAlign:'center'}}>Vishal raj</h2>
                        <h4 style={{ color: 'grey' , textAlign:'center'}}>programmer</h4>
                        <h4 style={{ color: 'grey' , textAlign:'center'}}>Btech 2nd Year undergraduate EE student</h4>
                        <hr style={{borderTop : '3px solid #0337b2',textAlign:'center' ,width:"100%"}} />

                        <p>I am vishal raj btech 2nd year undergraduate student from Indian Institute Of Technology , Mandi</p>
                        <hr style={{borderTop : '3px solid #0337b2',textAlign:'center' ,width:"100%"}} />
                        <h5>Address</h5>
                        <p> himachal pradesh , mandi , North campus</p>
                        <h5> Email</h5>
                        <p><i className="fa fa-envelope" aria-hidden="true" />  vishalraj1380@gmail.com</p>
                        <p><i className="fa fa-envelope" aria-hidden="true" />  b18151@students.iitmandi.ac.in</p>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <div style={{textAlign:'center'}}>
                            <h2> Education </h2>
                        < Education 
                        startyear = {2018}
                        endyear = {2022}/>
                            

                        </div>
                    
                    </Cell>
                    </Grid> </div>
        )
    }
}
export default About;