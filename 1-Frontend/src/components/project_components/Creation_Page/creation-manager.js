import React, { Component } from 'react';
import axios from "axios";
import RandomGenList from "../Creation_Page/gen-creator-list";


export default class CreationManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            RandomGeneratorList: []
        };
    }

    getRandomTables() {
        axios.get('http://localhost:5000/tables', { withCredentials: true })
            .then(response => {
                this.setState({
                    RandomGeneratorList: [response.data]
                });
            })
            .catch(error => {
                console.log('Error in the API', error);
            });
    }

    componentDidMount() {
        this.getRandomTables();
    }
    render() {
        return (
            <div>
                <h1>Here you can create random generators</h1>
                <div className="creation-manager-wrapper">
                    <div className="upper-part-wrapper">
                        <h1>Creation part</h1>
                    </div>
                    <div className="lower-part-wrapper">
                        <RandomGenList data={this.state.RandomGeneratorList} />
                    </div>
                </div>
            </div>
        );
    };
}