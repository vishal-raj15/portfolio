import React, { Component} from 'react';
import { Tabs, Tab,Grid, Cell,Card,CardText,CardMenu,CardTitle,CardActions,Button,IconButton} from 'react-mdl';
import {Link} from 'react-router-dom'
class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab :0};
    }
    toggleCategories(){

        if(this.state.activeTab === 0){
            return (
                <div>
                    
                    <Grid>
                <Cell className="overflow" col={4}>
                <Card shadow={5} className="styl" style={{minWidth:'450' }}>
                    <CardTitle style={{color: '#fff' , height: '176px', background:
                    'url(https://reactjs.org/logo-og.png) center / cover'}}>
                        React.js project #1
                    </CardTitle>
                    <CardText> this is my portfolio react project</CardText>
                    <CardActions border>
                        <Button colored><a href="https://github.com/vishal-raj15/portfolio">Github</a></Button>
                        <Button colored><a href ="https://vishal-raj15.github.io/portfolio/">demo</a></Button>

                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </Cell>
                <Cell className="overflow" col={4}>
                <Card shadow={5} className="styl" style={{minWidth:'450' }}>
                    <CardTitle style={{color: '#fff' , height: '176px', background:
                    'url(https://reactjs.org/logo-og.png) center / cover'}}>
                        React.js project #2
                    </CardTitle>
                    <CardText>youtube  video fetching</CardText>
                    <CardActions border>
                        <Button colored><a href="https://github.com/vishal-raj15/video_request">Github</a></Button>
                        <Button colored><a href ="https://vishal-raj15.github.io/video_request/">demo</a></Button>

                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </Cell>
    
    <Cell className="overflow" col={4}>
                <Card shadow={5} className="styl" style={{minWidth:'450' }}>
                <CardTitle style={{color: '#fff' , height: '176px', background:
                'url(https://reactjs.org/logo-og.png) center / cover'}}>
                    React-Native project #1
                </CardTitle>
                <CardText> this is a gaming app underconstruction</CardText>
                <CardActions border>
                    <Button colored><a href="https://github.com/vishal-raj15/prototype">github</a></Button>

                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
                </Card></Cell>
                </Grid>
                <Cell className="overflow" col={4}>
                <Card shadow={5} className="styl" style={{minWidth:'450' }}>
                    <CardTitle style={{color: '#fff' , height: '176px', background:
                    'url(https://reactjs.org/logo-og.png) center / cover'}}>
                        React.js project #3
                    </CardTitle>
                    <CardText> it's a progressive weather web app for desktop and mobile</CardText>
                    <CardActions border>
                        <Button colored><a href="https://github.com/vishal-raj15/weather_PWA">Github</a></Button>
                        <Button colored><a href ="https://nostalgic-hawking-9f2fef.netlify.app/">demo</a></Button>

                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </Cell>
                </div>

                
                
            ) 

        } else if(this.state.activeTab === 1){
            return (
                <div>
                    <Grid>
                <Cell className="overflow" col={6}>
                <Card shadow={5} className="styl" style={{minWidth:'450' }}>
                    <CardTitle style={{color: '#fff' , height: '176px', background:
                    'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEoBmekFZzCgz01w01ZRi2Ja94gn80EZuSAwomXRpm1f9rZBWE&usqp=CAU) center / cover'}}>
                        Godot project #1
                    </CardTitle>
                    <CardText> this is my godot game build in 2d perform basic task of jumping ,running , shooting the enemy</CardText>
                    <CardActions border>
                        <Button colored><a href="https://github.com/vishal-raj15/godot_game">github</a></Button>

                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </Cell>

                <Cell className="overflow" col={6}>
                <Card shadow={5} className="styl" style={{minWidth:'450' }}>
                    <CardTitle style={{color: '#fff' , height: '176px', background:
                    'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEoBmekFZzCgz01w01ZRi2Ja94gn80EZuSAwomXRpm1f9rZBWE&usqp=CAU) center / cover'}}>
                        Godot project #2
                    </CardTitle>
                    <CardText> godot game</CardText>
                    <CardActions border>
                        <Button colored><a href="https://github.com/vishal-raj15/godot_game2">Github</a></Button>
                        {/* <Button colored><a href ="https://vishal-raj15.github.io/portfolio/">demo</a></Button> */}

                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </Cell>
                </Grid>
                </div>

            )
        } else if(this.state.activeTab === 7){
            return (
                
                <Card shadow={5} className="styl" style={{minWidth:'450' }}>
                    <CardTitle style={{color: '#fff' , height: '176px', background:
                    'url(https://lh3.googleusercontent.com/BLFGxo0qhMkwYODvV3qyxSpXNlxsvd7-0PqLyNyIOxyom7-ycjEnbtiZCjznjNOWvvQ) center / cover' }}>
                        CPP
                    </CardTitle>
                    <CardText> this is my data structure codes</CardText>
                    <CardActions border>
                        <Button colored><a href="https://github.com/vishal-raj15/data_structure">github</a></Button>

                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

            )
        } else if(this.state.activeTab === 3){
            return (

                <div>
                    
                    <Grid>
                <Cell className="overflow" col={4}>
                <Card shadow={5} className="styl" style={{minWidth:'450' }}>
                    <CardTitle style={{color: '#fff' , height: '176px', background:
                    'url(https://miro.medium.com/max/2264/1*g9agaYlewb0vzuJIOupf3w.png) center / cover'}}>
                        ML project #1
                    </CardTitle>
                    <CardText> ML</CardText>
                    <CardActions border>
                        <Button colored><a href="https://github.com/vishal-raj15/ML">Github</a></Button>
                        {/* <Button colored><a href ="https://vishal-raj15.github.io/portfolio/">demo</a></Button> */}

                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </Cell>
                <Cell className="overflow" col={4}>
                <Card shadow={5} className="styl" style={{minWidth:'450' }}>
                    <CardTitle style={{color: '#fff' , height: '176px', background:
                    'url(https://miro.medium.com/max/2264/1*g9agaYlewb0vzuJIOupf3w.png) center / cover'}}>
                        DL project #1
                    </CardTitle>
                    <CardText>Malaia detector</CardText>
                    <CardActions border>
                        <Button colored><a href="https://github.com/vishal-raj15/malaria_detector">Github</a></Button>
                        {/* <Button colored><a href ="https://vishal-raj15.github.io/video_request/">demo</a></Button> */}

                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </Cell>
    
    <Cell className="overflow" col={4}>
                <Card shadow={5} className="styl" style={{minWidth:'450' }}>
                <CardTitle style={{color: '#fff' , height: '176px', background:
                'url(https://miro.medium.com/max/2264/1*g9agaYlewb0vzuJIOupf3w.png) center / cover'}}>
                    Emotion Detector
                </CardTitle>
                <CardText> emotion detetor with opencv</CardText>
                <CardActions border>
                    <Button colored><a href="https://github.com/vishal-raj15/emotion_detection">github</a></Button>

                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
                </Card></Cell>
                </Grid>
                </div>
               

            )
        }   
        else if(this.state.activeTab === 2){
            return (
                <div>
                    
                <Grid>
            <Cell className="overflow" col={4}>
            <Card shadow={5} className="styl" style={{minWidth:'450' }}>
                <CardTitle style={{color: '#fff' , height: '176px', background:
                'url(https://www.growingsearch.com/blog/wp-content/uploads/2019/02/Javascript-shield.png) center / cover'}}>
                    Javascript project #1
                </CardTitle>
                <CardText> this is ping pong game project</CardText>
                <CardActions border>
                    <Button colored><a href="https://github.com/vishal-raj15/ping_pong_game">Github</a></Button>
                    <Button colored><a href ="https://vishal-raj15.github.io/ping_pong_game/start.html">demo</a></Button>

                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
            </Cell>
            <Cell className="overflow" col={4}>
            <Card shadow={5} className="styl" style={{minWidth:'450' }}>
                <CardTitle style={{color: '#fff' , height: '176px', background:
                'url(https://www.growingsearch.com/blog/wp-content/uploads/2019/02/Javascript-shield.png) center / cover'}}>
                   Javascript project #2
                </CardTitle>
                <CardText> galaxy</CardText>
                <CardActions border>
                    <Button colored><a href="https://github.com/vishal-raj15/javascript">Github</a></Button>
                    <Button colored><a href ="https://vishal-raj15.github.io/javascript/">demo</a></Button>

                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
            </Cell>

<Cell className="overflow" col={4}>
            <Card shadow={5} className="styl" style={{minWidth:'450' }}>
            <CardTitle style={{color: '#fff' , height: '176px', background:
            'url(https://www.growingsearch.com/blog/wp-content/uploads/2019/02/Javascript-shield.png) center / cover'}}>
                Javascript project #3
            </CardTitle>
            <CardText> this is a chat room built with socket.io</CardText>
            <CardActions border>
                <Button colored><a href="https://github.com/vishal-raj15/chatWebApp">github</a></Button>

            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>
            </Card></Cell>
            </Grid>
            </div>

            )
        }

        else if(this.state.activeTab === 8){

            return (
                <div className="overflow">
                <Card shadow={5} className="styl" style={{minWidth:'450' }}>
                    <CardTitle style={{color: '#fff' , height: '176px', background:
                    'url(data:image/png;base64,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) center / cover'}}>
                        django project #1
                    </CardTitle>
                    <CardText> hackathon project with paytm integration for booking</CardText>
                    <CardActions border>
                        <Button colored><a href="https://github.com/vishal-raj15/hackathon_project">github</a></Button>
                        <Button colored><a href="https://beginners.herokuapp.com/mapnav/first/">demo</a></Button>

                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )

        }
        else if(this.state.activeTab === 5){
            return(
                
            <Card shadow={5} className="styl" style={{minWidth:'450' }}>
                <CardTitle style={{color: '#fff' , height: '176px', background:
                'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQl3FxnZr_gD_CI2p2BHyiFwLhbYrEBd5_yLA&usqp=CAU) center / cover'}}>
                    Augmented Reality project #1
                </CardTitle>
                <CardText> this is marker detection based AR project with vufuria</CardText>
                <CardActions border>
                    <Button colored><a href="https://github.com/vishal-raj15/ping_pong_game">Github</a></Button>
                    <Button colored><a href ="https://youtu.be/IpPqfLOAIMo">demo</a></Button>
                    

                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
            )
        }
        else if(this.state.activeTab === 4){
            return(
            <div>
                    
                    <Grid>
                <Cell className="overflow" col={6}>
                <Card shadow={5} className="styl" style={{minWidth:'450' }}>
                    <CardTitle style={{color: '#fff' , height: '176px', background:
                    'url(https://cia.news/wp-content/uploads/2019/03/La-Blockchain-Ethereum-1000x675.jpg) center / cover'}}>
                        Blockchain project #1
                    </CardTitle>
                    <CardText> lottery project in Ethereum</CardText>
                    <CardActions border>
                        <Button colored><a href="https://github.com/vishal-raj15/etherium_lottery">Github</a></Button>
                        {/* <Button colored><a href ="https://vishal-raj15.github.io/portfolio/">demo</a></Button> */}

                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </Cell>

                <Cell className="overflow" col={6}>
                <Card shadow={5} className="styl" style={{minWidth:'450' }}>
                    <CardTitle style={{color: '#fff' , height: '176px', background:
                    'url(https://cia.news/wp-content/uploads/2019/03/La-Blockchain-Ethereum-1000x675.jpg) center / cover'}}>
                        Bloackchain project #2
                    </CardTitle>
                    <CardText> decentralised posting news blog</CardText>
                    <CardActions border>
                        <Button colored><a href="https://github.com/vishal-raj15/decentralised_postPage">Github</a></Button>
                        {/* <Button colored><a href ="https://vishal-raj15.github.io/portfolio/">demo</a></Button> */}

                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </Cell>

                </Grid></div>
                )
        }
        else if(this.state.activeTab === 6){
            return(

                <Card shadow={5} className="styl" style={{minWidth:'450' }}>
                <CardTitle style={{color: '#fff' , height: '176px', background:
                'url(https://upload.wikimedia.org/wikipedia/en/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png) center / cover'}}>
                    Mysql project #1
                </CardTitle>
                <CardText> A basic mysql complaint form for hostle facilities</CardText>
                <CardActions border>
                    <Button colored><a href="https://github.com/vishal-raj15/basic_mysql_form">Github</a></Button>
                    <Button colored><a href ="https://vishal-raj15.github.io/basic_mysql_form/">demo</a></Button>
                    

                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>

            )
        }



    }


    render() {
        return (

            <div className="categorical-tabs" id='project'>
                <div className="title"> Projects</div>
                <Tabs className="tab" activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab style={{color:"white"}}>React</Tab>
                    <Tab style={{color:"white"}}>Godot</Tab>
                    <Tab style={{color:"white"}}>JS</Tab>
                    <Tab style={{color:"white"}}>ML/DL</Tab>
                    <Tab style={{color:"white"}}>Blockchain</Tab>
                    <Tab style={{color:"white"}}>AR</Tab>
                    <Tab style={{color:"white"}}>msql</Tab>
                    <Tab style={{color:"white"}}>CPP</Tab>
                    <Tab style={{color:"white"}}>Django</Tab>
                </Tabs>

                    <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                    </Grid>
             
            </div>
             )
    }
}
export default Project;