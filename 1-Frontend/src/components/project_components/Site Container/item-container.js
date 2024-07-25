import React, { Component } from 'react';
import SingleGenerator from '../../pages/single-generator';


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
            {title: "Races",  category: "Characters", slug: "Races"},
            {title: "Weapons",  category: "Objects", slug: "Weapons"},
            {title: "Treasure",  category: "Treasure", slug: "Treasure"}
        ];
        return data.map(_item => {
            return <SingleGenerator key={_item.id} title={_item} slug={_item.slug} />;
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