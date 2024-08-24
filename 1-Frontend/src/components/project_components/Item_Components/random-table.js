import React, { Component } from "react";
import axios from "axios";
import GenData from "../Item_Components/gen-data";


export default class RandomTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            RandomTableContent: []
        }

        this.getTable = this.getTable.bind(this);
    }

    getTable(item_id) {
        axios.get("http://localhost:5000/tables/" + item_id)
            .then(response => {
                this.setState({ RandomTableContent: response.data });
                const { RandomTableContent } = this.state
                RandomTableContent.item_content = this.state.RandomTableContent.item_content.split(",")
            }).catch(error => {
                console.log(error);
            });
    };

    componentDidMount() {
        this.getTable(this.props.match.params.slug);
    }

    render() {
        const { RandomTableContent } = this.state
        return (
            <div>
                <h1>{RandomTableContent.item_title}</h1>
                <div><GenData key={RandomTableContent.item_id} item_id={RandomTableContent.item_id} content={RandomTableContent.item_content} /></div>
                <button>Roll!</button>
            </div>
        );
    };
}