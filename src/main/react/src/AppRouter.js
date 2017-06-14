import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import Home from './Home.js'
import About from './About.js'

import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';

class AppRouter extends Component {
    render() {
        return (
            <Router>
                <div>
                    <AppBar title='Giff Meds'>
                        <Navigation type='horizontal'>
                            <Link to='/'>Home</Link>
                            <Link to='/about'>About</Link>
                        </Navigation>
                    </AppBar>

                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                </div>
            </Router>
        );
    }
}

export default AppRouter
