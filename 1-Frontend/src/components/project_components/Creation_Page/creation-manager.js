import React, { Component } from 'react';
import axios from "axios";
import GeneratorList from "../Creation_Page/generator-list";
import GeneratorForm from "../Item_Components/generator-form"


export default class CreationManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            randomGeneratorList: []
        };
    }

    getRandomTables() {
        axios.get('http://localhost:5000/tables', { withCredentials: true })
            .then(response => {
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
                <div className="creation-manager-wrapper">
                    <div className="upper-part-wrapper">
                        <GeneratorForm />
                    </div>
                    <div className="lower-part-wrapper">
                        {this.state.randomGeneratorList.map(item => {
                            return (<GeneratorList key={item.item_id} data={item} />)
                        })}

                    </div>
                </div>
            </div>
        );
    };
}