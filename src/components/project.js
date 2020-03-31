import React, { Component} from 'react';
import { Tabs, Tab, Grid, Cell,Card,CardText,CardMenu,CardTitle,CardActions,Button,IconButton} from 'react-mdl';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab :0};
    }
    toggleCategories(){

        if(this.state.activeTab === 0){
            return (

                <div className="project-grid">
                <Card shadow={5} style={{minWidth:'450' , margin:'auto'}}>
                    <CardTitle style={{color: '#fff' , height: '176px', background:
                    'url(https://reactjs.org/logo-og.png) center / cover'}}>
                        React.js project #1
                    </CardTitle>
                    <CardText> this is my portfolio react project</CardText>
                    <CardActions border>
                        <Button colored>github</Button>
                        <Button colored>demo</Button>

                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth:'450' , margin:'auto'}}>
                <CardTitle style={{color: '#fff' , height: '176px', background:
                'url(https://reactjs.org/logo-og.png) center / cover'}}>
                    React.js project #1
                </CardTitle>
                <CardText> this is my portfolio react project #2</CardText>
                <CardActions border>
                    <Button colored>github</Button>
                    <Button colored>demo</Button>

                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth:'450' , margin:'auto'}}>
                <CardTitle style={{color: '#fff' , height: '176px', background:
                'url(https://reactjs.org/logo-og.png) center / cover'}}>
                    React-Native project #1
                </CardTitle>
                <CardText> this is a gaming app underconstruction</CardText>
                <CardActions border>
                    <Button colored>github</Button>

                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
                </Card>
                </div>
                
            ) 

        } else if(this.state.activeTab === 1){
            return (

                <Card shadow={5} style={{minWidth:'450' , margin:'auto'}}>
                    <CardTitle style={{color: '#fff' , height: '176px', background:
                    'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEUAAAD///8/Pz91dXVYWFgkJCQpKSn39/f7+/tiYmJSUlJycnKIiIhlZWXi4uKOjo7w8PAYGBiurq6np6c3NzfW1tYyMjKUlJR/f39CQkJaWlrNzc2+vr4eHh7s7OwRERG4uLjHx8ednZ1ISEj2Yk6TAAAE50lEQVR4nO2d4ZKqMAyFKSqi6Kq4KIq7su77v+MVGdemVCCtXIpzvr+lmRyBNklL9YQQYXzceO/H5hiHV3WeEFnfrnRIUih8Z4GFRE/07UO3nIW37duHjsm9375d6JhZ3w50zlffDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAi6/5bJQu0mj2jh+8TxanDyGxzrbv9N27f/kWOrJR3569hvRDK68k/uzbPWtW0xp9txt56NtFK6ImfQWn4Z7mEyQt9BWs+vbUkFVLfVeSQd7GU3uBVwY4d9SNoJwndROtUrMBd5euRhNzAQ1M1kyBTySeyych4Q+4fnbreepIY9BmDFXR3Kndn50l04PjvWPYyYz7ZaBPiLxqSPqhdiwPgkfH6UskKeiDtCaqrlykVt4Zaj9Szw6O7tJPg9NsH/m39t9RrB2HKobIL3XmuCB3XL9GlcRFaDgd6UW7S3UsUg1tSOuc4cK8/pezhFovyXUHaM2UG/mhXjAhzZxEZEx6BuZitFRfwuzZAWELctlebXZUYfUZjWquzh6XVV8XNxVWJop1/TC//buwOqm7qTBXBH43dViWI06i+SGcVEidaiHwynK/3fvNxhxRuCWmRciaxFScVBhShWMrYy4qHFGBsZ01FxVmxLJtzOuiQnoLU0trDipcEsPWEa+DCulIerE1R6OHutBIhSp8YZpP0yaD42qDgy9BY/jFp9ymZu470hiRnnO5zbe6o8RuJVVo5MKqfeSPW7OJOR1Di4eLGOKm1gG7eHWvQI6bL6VMeSWRB0dihvPeFBgUr8p1yE9+R9NYiz79zAKgGrK3oXwRuJXZgpOZwpQYYXY2cLO8ib9GPf+/wuMTT+opygJ7o57c+qu9wuiJJ/UUga+28NWIWbxF425eX139qpli3GcscUlwx8ESeh+YM6uRn0WF8WDU00igNyM2mLnhIMbSgBjhPukGfpZFYt+gp+kfIBAjObPzjj3l38fDWfOllFBbFmoDKQa3KUJR4vCZSzpOj9ArYK03hxalB5riG/xQJH2ozS1U46StNrewWk+kk6/1qpaD+SH90a2XJh3M8ZX8oLLUwsRFhfSNDy2tuahQGbcN59U7LipU01izCP6OkwrVVMZqGHNSoRp7rVtsWFtu8712kd5NhWq2tm6KAKOyAPWt0eimQnX1SUzr6zWPOmD1nXVUId19UFCTZEzkzKfyzjqqUJOuZc/KkzQ9z9VmVxXq0rVY9zZGyr6USoDgqkJ94SRTAmdfU8JXDZ1JK2ePbbd7oui2OYnkEt0yl8lycdJW8CuGyE1mbZSWO3axOdGkcqJT6OzeRKM1CG0UK9nhJa5Sycg2/tez4W+C1tYEPv9mV25987Ec3dEXK2f+JlrtPu+vsjDywf/a7VC+Kll3e9nbfk1yZ/HETpCuFmalMX+xSl8+Ucjw1mU5+2OdIW0Wdiex2h3WH5usWVvtEzoAZm0GnLxvL+1Im+aNn04Hg/9CVDeqxqa7ItxisteGcdOfN/kO+MY5ihM5lFv/7If9dewT3vl7fAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwYqCHdLTm7Nn9h5P7jL1ODpZyiNjr5mQpdxAe81yxoZFcFb61xEQUCkW4HeSxTo3Mb2db/QMtvTJo60R1jgAAAABJRU5ErkJggg==) center / cover'}}>
                        
                    </CardTitle>
                    <CardText> these are my cpp programs</CardText>
                    <CardActions border>
                        <Button colored>github</Button>

                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

            )
        } else if(this.state.activeTab === 2){
            return (
                
                <Card shadow={5} style={{minWidth:'450' , margin:'auto'}}>
                    <CardTitle style={{color: '#fff' , height: '176px', background:
                    'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEoBmekFZzCgz01w01ZRi2Ja94gn80EZuSAwomXRpm1f9rZBWE&usqp=CAU) center / cover'}}>
                        Godot project #1
                    </CardTitle>
                    <CardText> this is my godot game build in 2d perform basic task of jumping ,running , shooting the enemy</CardText>
                    <CardActions border>
                        <Button colored>github</Button>

                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

            )
        } else if(this.state.activeTab === 3){
            return (
                <div className="project-grid">
                <Card shadow={5} style={{minWidth:'450' , margin:'auto'}}>
                    <CardTitle style={{color: '#fff' , height: '176px', background:
                    'url(https://miro.medium.com/max/2264/1*g9agaYlewb0vzuJIOupf3w.png) center / cover'}}>
                        ML project #1
                    </CardTitle>
                    <CardText> this is my simple ML project</CardText>
                    <CardActions border>
                        <Button colored>github</Button>

                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth:'450' , margin:'auto'}}>
                <CardTitle style={{color: '#fff' , height: '176px', background:
                'url(https://miro.medium.com/max/2264/1*g9agaYlewb0vzuJIOupf3w.png) center / cover'}}>
                    DL project #1
                </CardTitle>
                <CardText> A DL project for malaria detection</CardText>
                <CardActions border>
                    <Button colored>github</Button>

                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
                </Card>

                
                </div>
            )
        }
        else if(this.state.activeTab === 4){
            return (
                <div className="project-grid">
                <Card shadow={5} style={{minWidth:'450' , margin:'auto'}}>
                    <CardTitle style={{color: '#fff' , height: '176px', background:
                    'url(https://miro.medium.com/max/2264/1*g9agaYlewb0vzuJIOupf3w.png) center / cover'}}>
                        ML project #1
                    </CardTitle>
                    <CardText> this is my simple ML project</CardText>
                    <CardActions border>
                        <Button colored>github</Button>

                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth:'450' , margin:'auto'}}>
                <CardTitle style={{color: '#fff' , height: '176px', background:
                'url(https://miro.medium.com/max/2264/1*g9agaYlewb0vzuJIOupf3w.png) center / cover'}}>
                    DL project #1
                </CardTitle>
                <CardText> A DL project for malaria detection</CardText>
                <CardActions border>
                    <Button colored>github</Button>

                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
                </Card>

                
                </div>
            )
        }



    }


    render() {
        return (
            <div className="categorical-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>cpp</Tab>
                    <Tab>godot</Tab>
                    <Tab>ml/dl</Tab>
                    <Tab>JS</Tab>
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