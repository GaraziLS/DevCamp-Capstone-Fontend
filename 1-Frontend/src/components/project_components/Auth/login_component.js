import React, { Component } from 'react';

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
                <form onChange={this.handleLoginChange}> 
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
                <button type='submit'> Log in</button>
            </div>
        );
    };
};