import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import './AppRouter.css';

import About from './About'
import Prescriptions from './Prescriptions'

class AppRouter extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="nav">
                        <h1>Giff Meds</h1>
                        <lu>
                            <li>
                                <Link to="/">Prescriptions</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </lu>
                    </nav>

                    <Route exact path="/" component={Prescriptions}/>
                    <Route path="/about" component={About}/>
                </div>
            </Router>
        );
    }
}

export default AppRouter
