import React, { Component} from 'react';
import { Grid , Cell} from 'react-mdl';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGL from 'react-map-gl'
import Cmap from './cmap';

class Education extends Component {

   
    render() {
 
        return (

            <div>
                <Grid>
                    <Cell col={4}> 
                    <p > <h4>IIT Mandi </h4></p>
                    <img 
                        src="https://qph.fs.quoracdn.net/main-qimg-9c53c11577b1f01abad93f17ce93b3b9"
                        slt="avatar"
                        style={{height:'230px' , paddingTop:'2em'}}
                        />

                    <img 
                        src="https://qph.fs.quoracdn.net/main-qimg-f274ca32b54dd43cfbf051f5e8a26054"
                        slt="avatar"
                        style={{height:'230px' , paddingTop:'2em'}}
                        />

                    </Cell>
                    <Cell col={8}> 
        <p> <h4>{this.props.startyear} - {this.props.endyear}</h4></p>

                    <h4> My college </h4>
                    <p><h6>Indian Institute of Technology Mandi (IIT Mandi) is an autonomous engineering and technology university located in Mandi, Himachal Pradesh. IIT Mandi's permanent campus (about 14 km from Mandi) is fully functional at Kamand and Salgi Mandi.</h6></p>
                    <Cmap />
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Education;