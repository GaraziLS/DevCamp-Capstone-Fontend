import React, { Component } from 'react';
import axios from "axios"
import GenData from "../Item_Components/gen-data"

export default class RandomTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            RandomTableContent: []
        }

        this.getTable = this.getTable.bind(this);
        // this.getTableContent = this.getTableContent.bind(this);

    }

    getTable(item_id) {
        axios.get("http://localhost:5000/tables/" + item_id)
            .then(response => {
                this.setState({ RandomTableContent: response.data });
                this.state.RandomTableContent.item_content = this.state.RandomTableContent.item_content.split(",")
            }).catch(error => {
                console.log(error);
            });
    };

    // getTableContent() {
    //     const { RandomTableContent } = this.state;
    //     console.log('Rendering getTableContent', RandomTableContent);
    //     if (!Array.isArray(RandomTableContent)) {
    //         // Handle the case where RandomTableContent is not an array
    //         return null;
    //     }
    //     return RandomTableContent.map(item => {
    //         return (<GenData item_id={item.item_id} content={item.item_content} />);
    //     });
    // };

    componentDidMount() {
        this.getTable(this.props.match.params.slug);
    };

    render() {
        return (
            <div>
                <h1>{this.state.RandomTableContent.item_title}</h1>
                <h2>{this.state.RandomTableContent.item_content}</h2>
                {/* <div>{this.getTableContent()}</div> */}
                <button>Roll!</button>
            </div>
        );
    };
}