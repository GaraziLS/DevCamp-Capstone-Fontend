import React, { Component } from 'react';
import axios from "axios";
import SingleItem from '../Item_Components/single-item';



export default class ItemContainer extends Component {
    constructor() {
        super();

        this.state = {
            data: [
                { id: "1", title: "Races", category: "Characters", slug: "Races" },
                { id: "2", title: "Weapons", category: "Objects", slug: "Weapons" },
                { id: "3", title: "Treasure", category: "Treasure", slug: "Treasure" }
            ],
            isLoading: false

        }

        // Bindings

        this.getAllItemsData = this.getAllItemsData.bind(this)
    }

    // Data Container

    SingleGenerators() {
        return this.state.data.map(_item => {
            return (< SingleItem key={_item.id} title={_item.title} slug={_item.slug} />)
        })
    }

    // API Connections

    getAllItemsData() {
        axios.get("http://localhost:5000/tables")
            .then(response => {
                console.log("Items received", response)
            }).catch(error => {
                console.log(error)
            })
    }


    render() {
        this.getAllItemsData()
        if (this.state.isLoading === true) {
            return <div>Loading...</div>
        } else {
            return (
                <div>
                    <h1>All the items go here</h1>
                    {this.SingleGenerators()}
                </div>
            );
        };
    }
}