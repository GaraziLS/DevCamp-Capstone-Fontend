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
        this.getTableContent = this.getTableContent.bind(this);
    }

    getTable(item_id) {
        axios.get("http://localhost:5000/tables/" + item_id)
            .then(response => {
                this.setState({ RandomTableContent: response.data });
                console.log(response.data)
                this.state.RandomTableContent.item_content = this.state.RandomTableContent.item_content.split(",")
            }).catch(error => {
                console.log(error);
            });
    };

    getTableContent() {
        return this.state.RandomTableContent.map(item => {
            return (< GenData key={item.item_id} content={item.item_content} />)
        });
    };

    componentDidMount() {
        this.getTable(this.props.match.params.slug);
    }

    render() {
        return (
            <div>
                <h1>{this.state.RandomTableContent.item_title}</h1>
                <button>Roll!</button>
            </div>
        );
    };
}