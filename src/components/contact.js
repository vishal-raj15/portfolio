import React, { Component} from 'react';
import {Grid , Cell, List , ListItem,ListItemContent} from 'react-mdl';


class Contact extends Component {
    render() {
        return (
            <div className="topco" id="contact">
                <div className="intro2" ><h1>Get in Touch</h1> </div>
                <hr />
                <div className="intro3" >Feel free to drop me a line to contact me</div>
                <Grid>
                <Cell className="topco2" col={6}>
                    <div className="infotab">
                          <div className="containerd">
                           <div className="heading"> Feel Free To Contact</div>
                           <div>Hello Everyone! if you have qyery or any suggestion then please mail me. Thank You.</div>
                          
                        </div>
                        <div className="myinfo">
                           <div className="in1"><i class="fa fa-address-book" aria-hidden="true"></i>   Himachal Pradesh Mandi IIT Mandi North Campus</div>
                           <br />
                           <div className="in2"><i class="fa fa-envelope" aria-hidden="true"></i>vishalraj1380@gmail.com</div>
                           <br />
                           <div className="in2"><i class="fa fa-envelope" aria-hidden="true"></i>vishalraj3344@gmail.com</div>
                           
                          </div>
                        </div>

                        
                      
                </Cell>

                <Cell className="topco3" col={6}>
                    <div className="right-bar">
            <div className="container p-3  text-white" >
            <div className="contact-body">
            <form>
            <div className="form-group">
    <input type="name" className="form-control" id="exampleInputname1" aria-describedby="nameHelp" placeholder="abc"/>
  </div>
  <br />
  <div className="form-group">
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="abc@gmail.com"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1"></label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" placeholder="message"></textarea>
  </div>
  <br />
  <button type="submit" className="btn btn-info btn-lg btn-block">Send a message</button>
</form>
</div> </div></div></Cell>
            </Grid>
            <hr />

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
        )
    }
}
export default Contact;