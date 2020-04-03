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
    <Route exact path="/portfolio/home" component={LandingPage} />
    <Route path="/portfolio/about" component={About} />
    <Route path="/portfolio/contact" component={Contact} />
    <Route path="/portfolio/resume" component={Resume} />
    <Route path="/portfolio/project" component={Project} />

    </Switch>
)

export default Main;