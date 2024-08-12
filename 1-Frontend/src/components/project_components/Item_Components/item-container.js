import React, { Component } from 'react';
import axios from "axios";
import SingleItem from '../Item_Components/single-item';



export default class ItemContainer extends Component {
    constructor() {
        super();

        this.state = {
            data: [],
            isLoading: false

        }

        // Bindings

        this.getAllTables = this.getAllTables.bind(this)

    }


    // API Connections

    getAllTables() {
        axios.get("http://localhost:5000/tables")
            .then(response => {
                this.setState({ data: response.data })
            }).catch(error => {
                console.log(error)
            })
    }

    // Data Container

    singleGenerators() {
        return this.state.data.map(_item => {
            return (< SingleItem key={_item.item_id} title={_item.item_title} content={_item.item_content} slug={_item.item_title} />)
        })
    }


    componentDidMount() {
        this.getAllTables()
    }

    render() {
        if (this.state.isLoading === true) {
            return <div>Loading...</div>
        } else {
            return (
                <div>
                    <h1>All the items go here</h1>
                    {this.singleGenerators()}
                </div>
            );
        };
    }
}