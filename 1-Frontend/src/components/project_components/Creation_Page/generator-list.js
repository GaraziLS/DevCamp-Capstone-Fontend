import React, { Component } from 'react';

export default class GeneratorList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            RawData: this.props.data,
        }

    }

    render() {
        return (
            <div>
                <div className="item-list-wrapper">
                    <div className="items-in-list">
                        <h2>{this.state.RawData.item_id}</h2>
                        <h2>{this.state.RawData.item_title}</h2>
                    </div>

                    <div className="buttons">
                        <button className="generator-list-btn" onClick={() => this.props.handleEditItem(this.state.RawData)}>Edit</button>
                        <button className="generator-list-btn" onClick={() => this.props.handleDeleteItem(this.state.RawData)}>Delete</button>
                    </div>
                </div>
            </div>
        );
    };
}

