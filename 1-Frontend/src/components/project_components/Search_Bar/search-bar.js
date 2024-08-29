import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";

export default class SearchBar extends Component {
    constructor() {
        super();

        this.state = {
            data: []
        }
    }

    dataContainer() {
        axios.get("http://localhost:5000/tables")
            .then(response => {
                this.setState({
                    data: response.data
                })
            }).catch(error => {
                console.log("error", error)
            })
    }

    render() {
        return (
            <div className='search-wrapper'>
                <div className='search-field'>
                    <input
                        type='text'
                        placeholder='Search generators'
                        label="Search generators"
                    // onChange={}
                    >
                    </input>
                    <button><FontAwesomeIcon icon="magnifying-glass" /> Search</button>
                </div>
            </div>
        );
    };
}