import React, { Component } from 'react';
import axios from "axios"

export default class RandomTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            RandomTableContent: []
        }
    }

    getTableContent() {
        axios.get("http://localhost:5000/tables"),
            { withCredentials: true }
                .then(response => {
                    this.setState({
                        RandomTableContent: response.data
                    });
                })
                .catch(error => {
                    console.log("error", error);
                });
    }

    render() {
        return (
            <div>
                <h1>{this.props.match.params.slug}</h1>

            </div>
        );
    };
}