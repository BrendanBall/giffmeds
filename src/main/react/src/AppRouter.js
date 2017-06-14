import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import Home from './Home.js'
import About from './About.js'

class AppRouter extends Component {
    render() {
        return (
            <Router>
                <nav>
                    <h1>Giff Meds</h1>
                    <lu>
                        <li>
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                        </li>
                    </lu>

                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                </nav>
            </Router>
        );
    }
}

export default AppRouter
