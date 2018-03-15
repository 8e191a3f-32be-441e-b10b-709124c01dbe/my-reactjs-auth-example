import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardActions, CardText } from 'material-ui/Card';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';


class Welcome extends Component {
    constructor(props) {
        super(props);
        super(this.state);
        this.state = {
            firstname: ''
        };
    }

    exitbutton() {
        document.cookie = "document_key=0";
    }

    render() {
        // Check for session ID in cookie
        // Send request for check it, if not true delete cookie send alert redirect, 

        // Add backend expred checker
        function getCookie(name) {
            var value = "; " + document.cookie;
            var parts = value.split("; " + name + "=");
            if (parts.length == 2) return parts.pop().split(";").shift();
        }
        // check for key if null return
        axios.post('http://localhost:5005/checksession', {

            sessionkey: getCookie('document_key')


        })
            .then(response => {

                if (response.data.erros === 0) {
                    this.setState({ firstname: response.data.firstname })
                }

                else {
                    console.log(response.data.erros)
                }
                if (response.data.error === 1){
                    document.cookie = "document_key=ivaidkey";
                    window.location.href = "/"
                }
            })
        // Add exit
        return (<div style={{ "padding": "15%" }}>
            <Card><center><p style={{ "color": "red" }}>Welcome, {this.state.firstname}</p></center> <FlatButton label="Logout" secondary={true} onClick={this.exitbutton}/></Card>
            <Card>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Status</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableRowColumn>1</TableRowColumn>
                            <TableRowColumn>John Smith</TableRowColumn>
                            <TableRowColumn>Employed</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>2</TableRowColumn>
                            <TableRowColumn>Randal White</TableRowColumn>
                            <TableRowColumn>Unemployed</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>3</TableRowColumn>
                            <TableRowColumn>Stephanie Sanders</TableRowColumn>
                            <TableRowColumn>Employed</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>4</TableRowColumn>
                            <TableRowColumn>Steve Brown</TableRowColumn>
                            <TableRowColumn>Employed</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>5</TableRowColumn>
                            <TableRowColumn>Christopher Nolan</TableRowColumn>
                            <TableRowColumn>Unemployed</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>
        </div>)
    }
}

export default Welcome;