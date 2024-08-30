import React, { Component } from "react";

export default class SignupComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            username: "",
            password: ""
        };

        // Bindings

        this.handleSignupChange = this.handleSignupChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    // Handlers

    handleSubmit(event) {
        event.preventDefault()
    }

    handleSignupChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Type your email"
                        label="Type your email"
                        value={this.state.email}
                        onChange={this.handleSignupChange}>
                    </input>

                    <input
                        type="text"
                        name="username"
                        placeholder="Type your username"
                        label="Type your username"
                        value={this.state.username}
                        onChange={this.handleSignupChange}>
                    </input>

                    <input
                        type="password"
                        name="password"
                        placeholder="Type your password"
                        label="Type your password"
                        value={this.state.password}
                        onChange={this.handleSignupChange}>
                    </input>
                </form>
                <button type="submit">Sign up</button>
            </div>
        );
    };
}
