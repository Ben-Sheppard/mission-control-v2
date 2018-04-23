import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import LaunchPad from './components/LaunchPad';
import Clients from './components/Clients';

const BasicExample = () => (
    <Router>
        <div>
            <Route exact path="/" component={LaunchPad}/>
            <Route path="/clients" component={Clients}/>
        </div>
    </Router>
);
export default BasicExample
