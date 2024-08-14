import React, { Component } from 'react';
import axios from "axios"

export default class LoginComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        // Bindings

        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    // Handlers

    handleLoginChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    handleSubmit(event) {
        axios.post('http://localhost:5000/login',
            {
                client: {
                    username: this.state.username,
                    password: this.state.password
                }
            },
            { withCredentials: true }
        ).then(response => {
            console.log('logged in', response);
        })
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Type your username"
                        value={this.state.username || ""}
                        onChange={this.handleLoginChange}>
                    </input>

                    <input
                        type="password"
                        name="password"
                        placeholder="Type your password"
                        value={this.state.password || ""}
                        onChange={this.handleLoginChange}>
                    </input>
                    <button type='submit'>Log in</button>
                </form>

            </div>
        );
    };
};