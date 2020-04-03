import React from 'react';
import { Switch , Route } from 'react-router-dom';
import LandingPage from './landingPage';
import Contact from './contact';
import Resume from './resume';
import Project from './project';
import About from './about';
const Main = () => (
    // return (
    //     <div>
            
    //         <LandingPage />

    // </div>
    // );
    <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/about" component={About} />
    
    <Route path="/resume" component={Resume} />
    <Route path="/project" component={Project} />

    </Switch>
)

export default Main;