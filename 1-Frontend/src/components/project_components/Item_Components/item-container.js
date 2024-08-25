import React, { Component } from 'react';
import axios from "axios";
import SingleItem from '../Item_Components/single-item';
import LoadingIcon from "../../../../src/helpers/loading-status";

export default class ItemContainer extends Component {
    constructor() {
        super();

        this.state = {
            data: [],
            isLoading: true

        };

        // Bindings

        this.getAllTables = this.getAllTables.bind(this);
        this.singleGenerator = this.singleGenerator.bind(this);

    };


    // API Connections

    getAllTables() {
        axios.get("http://localhost:5000/tables")
            .then(response => {
                this.setState({ data: response.data, isLoading: false })
            }).catch(error => {
                console.log(error)
            });
    };

    // Data Container
    singleGenerator() {
        return this.state.data.map(item => {
            return (< SingleItem key={item.item_id} item_id={item.item_id} title={item.item_title} content={item.item_content} slug={item.item_title} category={item.item_category} />)
        })
    }


    componentDidMount() {
        this.getAllTables()
    }

    render() {
        if (this.state.isLoading === true) {
            return <LoadingIcon />
        } else {
            return (
                <div>
                    <h2>Welcome</h2>

                    <div className="homepage-wrapper">
                        <div className="filter">
                            <button>Characters</button>
                            <button>Objects</button>
                            <button>Quests</button>
                            <button>Skills</button>
                            <button>World</button>
                            <button>Other</button>
                            <button>Filter All</button>
                        </div>
                        <div className="items-wrapper link">{this.singleGenerator()}</div>
                    </div>
                </div>
            );
        };
    }
}