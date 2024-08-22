import React, { Component } from "react";
import axios from "axios";


export default class GenData extends Component {
    constructor(props) {
        super(props);

        this.RawData = this.RawData.bind(this);
    }

    RawData(item_id) {
        axios.get('http://localhost:5000/tables' + item_id, { withCredentials: true })
            .then(response => {
                console.log("test", response);
            })
            .catch(error => {
                console.log('Error in the API', error);
            });
    };

    render() {
        return (
            <div>
                {this.RawData()}
            </div>
        );
    }
};
