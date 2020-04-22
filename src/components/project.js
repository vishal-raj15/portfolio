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

                <div className="project-grid">
                <Card shadow={5} style={{minWidth:'450' , margin:'auto'}}>
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

    

                <Card shadow={5} style={{minWidth:'450' , margin:'auto'}}>
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
                </Card>
                

                <Card shadow={5} style={{minWidth:'450' , margin:'auto'}}>
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
                        <Button colored><a href="https://github.com/vishal-raj15/data_structure">github</a></Button>

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
                        <Button colored><a href="https://github.com/vishal-raj15/godot_game">github</a></Button>

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
                        <Button colored><a href="https://github.com/vishal-raj15/ML">github</a></Button>

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
                    <Button colored><a href="https://github.com/vishal-raj15/malaria_detector">github</a></Button>

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
                <Card shadow={5} style={{minWidth:'6vw' , margin:'auto'}}>
                    <CardTitle style={{color: '#fff' , height: '176px', background:
                    'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEXw208yMzDw2kvz5ITx3Vnz4nr34VDy3U8vMTAaIC7UwkpCQTL24FAqLC8nKi/65FEVHC55cDkSGi0dIi4hJS4oKy8cIS4uLzDl0U0/PjLOvUnhzkxeWTY5OTHDs0fcyUu5qkVoYjernUJwaTiekkBIRjNQTTSTiD5XUzWCeTuwokOOhD1UUDRiXDagk0B/djv26Z8AES0AACzM4yC8AAAI00lEQVR4nO2ceXv6qhLH8Z5zmURJyKaJ+65VWz3nvv8XdxNtf1UzJLj1Yfrw/bcW+QgMzALsr1+uf9h/frn+y365LCF9WUL6soT0ZQnpyxLSlyWkL0tIX5aQviwhfVlC+rKE9GUJ6csS0pclpC9LSF+WkL4sIX1ZQvqyhPRlCenLEtKXJaQvS0hflpC+LCF9WUL6soT0ZQnpyxLSlyWkL0tIX5aQviwhfVlC+rKE9GUJ6csS0pclpC9LSF+WkL4sIX1ZQvqyhPRlCenLEtKXJaQvS0hflpC+LCF9kSAEEIJzeRTnXADc8M8/RcgxaXUUhGTN7TqcrrrDYXf1Md/NRn2RY2p+8w8Rik1Y1nxc20sQvLkYJG7ie2nqFEo9P4mDYbjNuND66h8i5F3fKylq1hCCzBbdwE8bJTleEnxMhM5A/hRhyyl3060mBDkOUbxPpXFjBvXjaC6hYJugrcQ7jWQynMi6YTSVEOTE86v5jozBlNUMo6GEIMIA+Q9Eba/HK7/aTEJgq0SL7ziMW1n11UYSQjb0dAFzRfsqRBMJc0C1BUURZxWIBhICrG4ZwSPiRL0WDSSUofYa/KNAbbTMIxST4GbARtpgKkTjCIG19baJS/lz1VI0jpBvNDZ6RMFEsfObRgj9O+ZoIcdXzFPTCO8dwkYjCXF7ahghsI5ykDw/l6dapEmrR2IMxVaxU3huY77eL9bhMkiQptJgoYoYGEbIp+hm77jTHudCFOGabD8s/Qqdt7FyyzeLEFiMAiajbzcQhFhHF6158awi5GMYYc9FAccXOwHI3pnrn7uIWZX/ZBah2GPL0B1db3Vi7H+156c1br5ZhPyAxC28afm4InrR8W9pENLy8fkAcZviEXb0mRXzORmOiMVpZBf5WIyGuOWHlwY7crE20Sh/zFmidgT6/y6btQPIDCMEQCZp+oZ7DWKkF9gnQPiu2As0ExdGETJwkFnq6OUnVDKLkA+RjwX9W5JpJZlFKJfIx/x9dci3RmYRogdvp3FTRvRahhHuMP/XP1QGtWtkFqGYoe6hu9bZ+BQyixD3LfJPHrST2iUZRgiof1jEKLTOL5jMIsxNjSJj4USHTK+y4VqGESoWYqF2Z3MXo2GEkEUqwtymBuEdc9UwQibnVXmndjQY6VfSnGQaIfSqY96p292zmyaraYRMYm7+BWOSbMY3TFbjCKFZsRI/5UcfI82KKAMJmdxoJEhTdzkRZlV96RMCYC5USU483GqNo3mE+TzVS7AdGevXo4GEjE/ql+KJsbOkFk38lNxrItaG9JmhhEwutDPBXrCvnqpmEjI5i3TMzVHxqk8nM3P2D6NYuy4q7Uxo1USdJDL94r1GtFEbHGMJGYh1oD2M8VQZrTKXMP+n5qqjuxr9NxWiyYQM5KytO1X9N4VXZTRhUey9TjQLbBJF3ZfhhAx4tnN9rbnqLtBNw3TCgpGtPayGpqQIrRkyn7BghO3Sra+qdVqYr0GB8Hg5aDSNahdkguVwaBCywq72d35Ss0EmSNqUDOFxQc5abiVjsijPU0KEp8k6CCoWpDMkTsiOFV/TSM3olmtvqBEWjM0P5YG1fSjZGnqEBeNoqLCrjvMrCPPDHGwUQQC3dC+VJmFxJscRk+21rSFKyJjcooj+7nqakiVkEq3q96a/hxAY5jqW6/yMJayHx0tTPCLrEHi/NicBI6ysIXgtoTIcJLBsS9my//k4rP+nusf0/WUZVpoSXY/+Uwl5XzUqAptQKkKQk0bieFldFIdhjQYvJAS+d1d4rAQYZtoDlCE/lb27Dl7AftXozxLmR+Jl3HBLG+7pj01sQmHeHONZGJ1OnZ1FNSL00Vn6qjONYGFxHHZS1Aii15mcRvnXEGL/HVuLRpVpJdzS+K+xNPkhyj91DK8j5AesqrI0pfMjdff8p3CbVdZGhkij6Uv2w3zlLP/8nEHpgkthYjGPzru6MAhyfOUWOXHFewkwxpKM6SvONMUTHWfXkJKy/cBrufzLkEPRzPUP4bgj1VoE/o45iS84l4Lcti9sWtq9XorAUizcGU/gvJlZGzWNazz/CXKOxvuf7lt8mfZzea3s8qqZGKBhh+hssKHfjfGgb7LslTNnwLMBntAInuwfXk7QL6X+RP5Jk4Dsv6MOedo6n09iqQpMpMG0d1HLBsBh1sZjNU63NKsfIhTbFO28475PWPEqF5eit1EEAC9XDIzUxQlesFz0QB4vkeZNQm+XqqL85WX4GCEPVWHoNIla03A+XQUd1TtB7mWWQc4rHhRK/U60mu/Wi8UuzJtUZ2qQ1yMeIsRPFV+9Kh67UidUnMbVXpHVZApPd7nVl7mP34ncIHpsHeIumpb89ZXRu+s9jCu5iEPyGCEw5KKSZmdK26Y83P6myaXQi3wP7hZ3//D+ptQZEDe/S3OlALtt+uiOL5XGplrlISyWonPb20JXwt83eZQQoHtPr2L0thaM9fLZuBRv1Dx+ahtrZaCvOrPCT9TiEUTFO0OPn7y/Lo7fICdWXSkU4/Tetah6K+oJvoV2Oeh3ZxAP61OQLe+zqMr3vp7hH/KR5vt4X53ZVvjuAOEd5rniWbqn+Pi85+vPLSeqfiMvd8fiW2eq56td5edEMUT2rrh0VlKaVEdfjq1N9Wv2CrmDTB3ueFIkCviiKr/+rXhVH8wu4jUthbuIyPdnVcXeT4sm8usgC9qZTk3J8peE2A47WuPoB7uKAWTPjAjnP/xb5ZOqTuJu6srOvyX4ZBDV7Y5p7O/qruw9M6oPshcmMe7epL47XNx2f1DI8WIZJCp3yfES92Nbf8vryZkZziZheny5+bsnqefHbmvX03rX+LI5wcezuefGfvs8luWk7bzFRjjJpEaTz86u5Z3i4+1uuvSjIHDdIAgab+FilMn7rrie2pssDoNu8tlgFHcHh8WoLzUvIr4if3h8QV2wrD8e9zNx8yPq5fbg2Mhng+zGFl+XIYWTnt7grS2SeFf/IVlC+rKE9GUJ6csS0pclpC9LSF+WkL5ywr9/uf76P55lpJkCOleQAAAAAElFTkSuQmCC) center / cover'}}>
                        JS project #1
                    </CardTitle>
                    <CardText> ping pong game</CardText>
                    <CardActions border>
                        <Button colored><a href="https://github.com/vishal-raj15/ping_pong_game">github</a></Button>
                        <Button colored><a href="https://vishal-raj15.github.io/ping_pong_game/start.html">demo</a></Button>

                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth:'6vw' , margin:'auto'}}>
                <CardTitle style={{color: '#fff' , height: '176px', background:
                'url(data:image/png;base64,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) center / cover'}}>
                    JS project #2
                </CardTitle>
                <CardText> Galaxy</CardText>
                <CardActions border>
                    <Button colored><a href="https://github.com/vishal-raj15/javascript">github</a></Button>
                    <Button colored><a href="https://vishal-raj15.github.io/javascript/">demo</a></Button>

                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
                </Card>

                
                </div>
            )
        }

        else if(this.state.activeTab === 5){

            return (
                <div className="project-grid">
                <Card shadow={5} style={{minWidth:'450' , margin:'auto'}}>
                    <CardTitle style={{color: '#fff' , height: '176px', background:
                    'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAnFBMVEX///8JLiAAGgAAKRoAGwAADwAFLR43UEUAHACzubba4N6msa05TEQAKhsAGAAAKxoAIxH4+vkAFgDl6OdOXlfT2NYAEwAAJRQAHwrs7+6Kk4+Qm5YAAAB0gnwACgAAIQ6bpaG8w8DGzcpic2x7ioQnQzcRNCdZaWK3vrsABgBDWE/Dyseqs68gPTFqenNUaF8lRDgAMyMvTEBBU0pe2ZgWAAAKA0lEQVR4nO2caZeaShCG2UUICI1sIoK74wgmzv//bxdBoBoRl8hN7tx6zsmHkF7q7aW6usAwDIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCGAxqQkuz+KgYmL/UevegTqNSoTT5dma80qmwz9q3TtQBbaEH1ye/dCqZxwq/PtBhajw7wcVosK/n/+pQr56pn9PhWvPKJl9T4Um5I9a9w7aFH4vUOF/n2+q0PQXhzhD/fRV70mFpm/P1bzyXLnphkzfsud5F7G6s/0H3FVeY6hmHHYLxW+v4i/UYBWm4SSed7XpD9M1cTg5u8ELDreRrhVOwop0QfcQbBMi6kJemcxGW9VvNm/Z8Wq7dkVH54RzlkDWRXJKd1flYJV5VsOYOYQTZFngdCKK7s9xGHwqsJYSjD1H8KLsDPNk4gxWNxIsSsrqRh2zsLXA1vPwA5yH82VCPBfUZSVXlwLY+DD8IRHZcDXQbIZmkM3kxqArwZdLIqrZc8uaa3jES45lMXvryTwswEf6fn7dnJ86RqOtFoVtUZs1cfWmGbnx+r403fIEzuCl6zJ5Oc9tsYeZ74l3q0oGiYtiZuq4LQY7Y6vZ3ii62Vi3Qn8a3bIj2pezMetoPNM4jZv6FgOR76oieZcJ3HjtBVz5k2owFm/O312FH7frORfLFbGr9XPBA2WOmZJOfSwrF1vg07hZTqMC54B0t9epsGN+tM2DCjUXLirl1sRUSEbuaWy5Y2IkUs+i+nF7vee8qlDi7McUstESrFDnzgSyrDfJu9Y7V540K4fN7t4l7OMKJUmjfaWgPqiQJZX7t6NOu/N+Rrnt4xYfA3FLP3Cih0xyZU7nZLfttLitUHI9MhN/JT9/iWCJRasWhZqRdaALtHl6uRN9qTGDfCQLAhStaUWzQ2pvSVF2WOoGVZUUNsY61b0wWsbD3TBeai0n/g2FmqFH+3heLAozqBt0l1cKpShJsw526pI6xYzw0sWeUs4L3mCiHoYDIDFhxXNP5pqq767mtj1PBfiQH5zPKzOB4xMllVc7PJbF8Gc8ScJPeGqnlZHu9krhqAo4rAEQU3ZxcIA1kj4YFg0vq6KS5DP5it7BkvLSbGmUdebNuY62dTT0YJ7Gn+4PjaAkrtapO24qvGyhwpqRBJ4XCwCOt+aqZVGgsGzgCKQAR2WuQQtumj3ZgoLuF7DzUYXXAYkql4VGnQqZFGwbp5hCsGU0t44v62XBukrRL5hCTQJjbIMDWhqZjMnVf2cJPJVez7XVCvluhUPQuZg/ge5xBmL7sB4LQ7kaC0FlAHDORJv5BIv04vl+S+H5rlObc0ehDTrPFVrAbCMFza5qhZ7S1CyNqPvJHLQqq2DPZAuFunU8rdC31XB8GhGn7vuewroLVjwvNBVOqgIV1mGzUFj5szbl4s8qO8BBZ6yYsJ5SLaE8xnMKlXjPCkLzdnRPoVwXzRWCqaJv3ZNaISkUgm1Ir73swKlPDP7I7G8OxTMKd4MPmW8JRZ5VOKhtMyizrxT64AAS6LgdOF5WGzAnMKMhVe5xhZ/rW5HkswrB8eHBCzQT1Jup2EsKmENCX5SoLbpmkrogPWqPKwxvX3WeVQgcvUz5xyuFNlDoUAkVatOyyRsUHuF583sKTaBQ+A2FYA4T5me9LtyUKvegwpAKazM0vvZlTyqEt2kvhsYAl1/ogatUbwQdYJVqJwaEtJcQ6zmFC+ra4HqOs9kvk1Lis3M4rf8eTW4oJLlCC/QrU4NBHfmZL4V+5xd1cD6mEAQhkiwe48U5XflVbsxn9yEwm/bsUGHhV8C1tOEiTThrIROAXelQPukhhVZdXYtis+ziVYW/6vYlA57OcV1S3+VPgNvl9wzEAo7BU6nQ0D3Cgg8pHFa7UNKqiOh1hTAs5aCrAQoviwdeLWQqdQgMP29aC6YwnN2zCuuTGOyb1xWCgz27yoNJBAovxwgMNz1qz4KwgZWzNuB1SvJAZPqQwtptAYf2usI5vNUaYElBhXFRF04NBxqFd+h8Mwcwc6fpcTVwD93x0/cq9EcwrPX2VfANZqw8RuDU8KfKbFsHTeTZH8ugYmV9HdiW7/uWBXxQ/d6iblVvzCFwaK8rpO7E2RQIy4OiKPYhBFf/UmEgw5Kny6l/GMEkwSY/HUI6n695ZLRJkl8eeFwqNK8Ugo0TVZ6hdtdPK1w04geXI5FHBPhKpVToQy0s7+0nB3V1orJyQhHb+levVSStkfasFIKhLJz2AbhiebOcBJPwmNT2PK2QcpHtVMFOIFDP+UiQ6ZdLVXJj93BG2N80FSpwqWhu5EUGHLDnFVrkTv69VkinE1uYVa4huJeSLhXC5Bgpqg86e3leIaPeG+86RrO77dbBTWIy6x64UqEC/MAleKLym9cVn1fIrO6MN7h0DKcddgtU/DKMjC6NpUKYOSqvLOPOF48vKGQmTueLC3ijP3A3ixLwridff1vSscVLhTvg6cpEkTmQOyq+opAZdr6u1WHgtdi0F+UJlSIoyi4/5Na3yhJvkJ9FGRgdzMqLiJnObg2O1J3zvqWQsULRo97FwKOLzln4qXjVu8SLg8al+FJY3XscF7kuz2saz/OuG8k6JxunUL2UB5lndgoM3Qp65PLnMyb7M8quwK7hCefvMjZFGKBMuRICs872VC+f61Mq0WcFG073DDcj0vVNDMIPp/GlhbIkAvDfGu+RU9uHAZf5sIeT5fjrR8bX/rhcxfMFMAge+Jf3DOW/fE6OX+tkk5Gsf3yNl2Fw+LSrqv4QAJRQz5u2KPMg3R636WSnwKhNEq6+JfEP27XrEEEWdMdLxoHSLPAwMHPAj6/+2fRzevlmEcRObpsA8/wdkqoObaXr85xnumkkGXqnDnUusWYvmPCzErK7X+GN1Mkt7Ud/vVDBvN7fSLYAnDGdiHgrFpxC93ob9gnI8XrXB927+ILnDjncr/A+FDC4pPWkewdHKheQ9OIxGX/Vtvh9eInQe+k462RPfabUzMG+rZupHC6ag7dYwxfxaWvF32a3oUKj8muut+OLkkHW6bw+8vw5/VXKRy8/zrWOhArhpY++9kL+VlAzdE87HdNwlR4Tg6PGthcPp4TNyJr0dtpX7z0lLYtts7C08cEtK/cxhYutSH9Lpfe0FRj6zW4bXE9jqyw/anctieH9Gq9yR2G0v9/Ei1hhdLmwuX250Zxuhca6z18iWRNJ1liNjF+/mjxAp0J533Ok6AcjcdPzD9Y6FGqzsP/fkpm7vvuwpu2ZJYnXN5/3q/8HMJcbcv1xOh/pg381Du4Vfx4OZEf2DJc/p4oMT3a8/Tf4X0YozPOPmMLtfjDYH9NAXfyrN1EEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQb4F/wAZydMhqusLHQAAAABJRU5ErkJggg==) center / cover'}}>
                        django project #1
                    </CardTitle>
                    <CardText> hackathon project</CardText>
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



    }


    render() {
        return (
            <div className="categorical-tabs" id='project'>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab style={{color:"white"}}>React</Tab>
                    <Tab style={{color:"white"}}>cpp</Tab>
                    <Tab style={{color:"white"}}>godot</Tab>
                    <Tab style={{color:"white"}}>ml/dl</Tab>
                    <Tab style={{color:"white"}}>JS</Tab>
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