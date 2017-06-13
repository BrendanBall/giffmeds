import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import Home from './Home.js'
import About from './About.js'

import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Navigation from 'react-toolbox/lib/navigation/Navigation';
import Link from 'react-toolbox/lib/link/Link';

class AppRouter extends Component {
    render() {
        return (
            <Router>
                <div>
                    <AppBar title='React Toolbox'>
                        <Navigation type='horizontal'>
                            <Link href='/' label="Home" />
                            <Link href='/about' label="About" />
                        </Navigation>
                    </AppBar>
                    <div className="App">
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default AppRouter
