import React, { Component } from 'react'
import Navigation from './Navigation'
//import ClientData from '../data/clients.json'
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableHeaderLabel,
    TableRow
} from '@brandwatch/axiom-components';

const CLIENT_REQUEST = 'http://loki.devserver0.btn1.bwcom.net:4040/brandwatch/clients?nameContains=a&access_token=5eca1443-d312-4315-9143-3828834e28a5';

class Clients extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clients: [],
        };
    }

    componentDidMount() {
        fetch(CLIENT_REQUEST)
            .then(response => response.json())
            .then(data => this.setState({ clients: data.results }));
    }

    render() {

        const { clients } = this.state;

        return (
            <div>
                <h2>Clients</h2>
                <Navigation/>
                <Table id="clientTable">
                    <TableHeader>
                        <TableHeaderLabel>
                            Name
                        </TableHeaderLabel>
                        <TableHeaderLabel>
                            City
                        </TableHeaderLabel>
                    </TableHeader>
                    <TableBody>
                        {
                            clients.map(data => {
                                return (
                                    <TableRow>
                                        <TableCell>{data.name}</TableCell>
                                        <TableCell>{data.city}</TableCell>
                                    </TableRow>
                                );
                            })
                        }
                    </TableBody>
                </Table>
            </div>
        );
    }
}



export default Clients;
