import React, { Component } from 'react';
import SingleItem from '../Item_Components/single-item';



export default class ItemContainer extends Component {
    constructor() {
        super();

        this.state = {
            data: [],
            isLoading: false
        }
    }

    SingleGenerators() {
        const data = [
            { id: "1", title: "Races", category: "Characters", slug: "Races" },
            { id: "2", title: "Weapons", category: "Objects", slug: "Weapons" },
            { id: "3", title: "Treasure", category: "Treasure", slug: "Treasure" }
        ];
        return data.map(_item => {
            return (< SingleItem key={_item.id} title={_item.title} slug={_item.slug} />)


        })
    }


    render() {
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
