import React, { Component } from 'react';
import axios from "axios"

export default class LoginComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        // Bindings

        this.handleLoginChange = this.handleLoginChange.bind(this);
    }

        // Handlers

    handleSubmit(event) {
        axios.post('localhost:5000/login',
            {
                client: {
                    email: this.state.email,
                    password: this.state.password
                }
            },
            { withCredentials: true }
        ).then(response => {
            console.log('logged in', response);
        })
        event.preventDefault()
    }

    handleLoginChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}> 
                    <input
                        type="text"
                        name="username"
                        placeholder="Type your username"
                        value={this.state.username}
                        onChange={this.handleLoginChange}>
                    </input>

                    <input
                        type="password"
                        name="password"
                        placeholder="Type your password"
                        value={this.state.password}
                        onChange={this.handleLoginChange}>
                    </input>
                </form>
                <button type='submit'>Log in</button>
            </div>
        );
    };
};