import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// pages
import HomePage from './pageone/main-content';
import AboutPage from './pagetwo/main-content';
import ContactPage from './pagefour/main-content';
import DonatePage from './pagethree/main-content';
// Render correct route


class Router extends  Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/about' component={AboutPage}/>
                    <Route exact path='/contact' component={ContactPage}/>
                    <Route exact path='/donate' component={DonatePage}/>
                </Switch>
            </main>
        );
    }
}
/*
<Route path='/about' component={}/>
                    <Route path='/donate' component={}/>
                    <Route path='/contact' component={}/>
*/
export default Router;