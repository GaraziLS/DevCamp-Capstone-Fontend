import React, { Component } from 'react';
import axios from "axios";
import RandomGenList from "../Creation_Page/gen-creator-list";


export default class CreationManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            randomGeneratorList: []
        };
    }

    getRandomTables() {
        axios.get('http://localhost:5000/tables')
            .then(response => {
                console.log(response)
                this.setState({
                    randomGeneratorList: [...response.data]
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
                        {this.state.randomGeneratorList.map(item => {
                            return (<RandomGenList key={item.item_id} data={item} />)
                        })}

                    </div>
                </div>
            </div>
        );
    };
}