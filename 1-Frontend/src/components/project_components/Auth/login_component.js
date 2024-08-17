import React, { Component } from 'react';
import axios from "axios"

export default class LoginComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            errorText: ''
        };

        // Bindings

        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    // Handlers

    handleLoginChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
        this.setState({
            errorText: ""
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:5000/login', {
            user_name: this.state.username,
            user_password: this.state.password
        }, { withCredentials: true })
            .then(response => {
                if (response.status === 200) {
                    console.log("Successful log in", response)
                }
            })
            .catch(error => {
                if (error.response || error.response.status === 401) {
                    this.setState({
                        errorText: "Wrong username or password"
                    })
                } else {
                    this.setState({
                        errorText: "It seems that the server is down. Please, try again later."
                    })
                }
            }
            )
    }


    render() {
        return (
            <div>
                <h2>Log in</h2>
                <div>{this.state.errorText}</div>

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
                    <button type='submit'>Log in</button>
                </form>

            </div>
        );
    }
}