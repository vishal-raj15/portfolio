import React, { Component} from 'react';
import {Grid , Cell, List , ListItem,ListItemContent} from 'react-mdl';
import axios from 'axios';
import emailjs from 'emailjs-com';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:"",
            email:"",
            message:""

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);


    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit= (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "gmail",
                "vishmail",
                ".contact-form" ,
                "user_EWbIWk099ZUQuBQnxkB3h"
            )
            .then()
            .catch();
            this.setState({
                name:"",
                email:"",
                message:""
            });
    };


    // sendEmail(e) {
    //     e.preventDefault();
    
    //     emailjs.sendForm("gmail",
    //         "template_GipBbFcU",
    //         ".contact-form" ,
    //         "user_EWbIWk099ZUQuBQnxkB3h")

    //       .then((result) => {
    //           console.log(result.text);
    //       }, (error) => {
    //           console.log(error.text);
    //       });
    //   }
   
    render() {


        const cdfdfdfk = '< Contact />';
        const parser = new DOMParser();
        const cntefdkf =parser.parseFromString(`<!doctype html><body>${cdfdfdfk}`, 'text/html').body.textContent;


        return (
            <div className="topco" id="contact">
                <div className="intro2" >
                <h1 style={{ textAlign:"center"}}>{cntefdkf}</h1>
                     </div>
                <hr />
                <div className="intro3" >Feel free to drop a line to contact me</div>
                
                <div className="topco2">
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

                        
                      
                </div>

                <div className="topco3" >
                    <div className="right-bar">
            <div className="container p-3  text-white" >
            <div className="contact-body">

            <form className="contact-form"  onSubmit={this.handleSubmit.bind(this)} >
            <div className="form-group">
    <input type="name" name="name" className="form-control" id="name" aria-describedby="nameHelp" value={this.state.name} onChange={this.handleChange.bind(this)} placeholder="abc"/>
  </div>
  <br />
  <div className="form-group">
    <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.handleChange.bind(this)} placeholder="abc@gmail.com"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1"></label>
    <textarea class="form-control" name="message" id="message" rows="6" value={this.state.message} onChange={this.handleChange.bind(this)} placeholder="message"></textarea>
  </div>
  <br />
  <button type="submit" className="btn btn-info btn-lg btn-block">Send a message</button>
</form>
</div> </div></div></div>
          



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