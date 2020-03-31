import React, { Component} from 'react';
import {Grid , Cell, List , ListItem,ListItemContent} from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                
                <img 
                   src="https://aceingautism.org/wp-content/uploads/2019/04/Male-profile-silhouette.jpg"
                   alt="avatar"
                   style={{ height: '250px'}}
                />
                <h2>Vishal Raj</h2>
                </Cell>

                <Cell col={6}><h2>Contact Me :</h2>
                <hr/>
                <div className="contact-inf">
                <List>
                    <ListItem>
                        <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                            <i className="fa fa-envelope" aria-hidden="true" />
                            vishalraj1380@gmail.com</ListItemContent>
                    </ListItem>

                    <ListItem>
                        <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                            <i className="fa fa-envelope" aria-hidden="true" />
                            b18151@students.iitmandi.ac.in</ListItemContent>
                    </ListItem>

                    <ListItem>
                        <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                            <i className="fa fa-envelope" aria-hidden="true" />
                            vishalraj3344@gmail.com</ListItemContent>
                    </ListItem>
                    
                </List>
                </div>
                </Cell>
            </Grid>
            </div>
        )
    }
}
export default Contact;