import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {
    List,
    ListItem
} from '@brandwatch/axiom-components';

const Navigation = () => (
    <nav class="ax-space--x6">
        <List>
            <ListItem>
                <Link to="/">Launch Pad</Link>
            </ListItem>
            <ListItem>
                <Link to="/clients">Clients</Link>
            </ListItem>
        </List>
    </nav>
);

export default Navigation

