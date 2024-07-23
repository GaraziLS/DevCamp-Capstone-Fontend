import React, { Component } from "react";

export default class SignupComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            username: "",
            password: ""
        }
    }
    render() {
        return (
            <div>
                <form>
                    <input
                        type="email"
                        name="email"
                        placeholder="Type your email"
                        value={this.state.email}
                        onChange={this.handleChange}>
                    </input>

                    <input
                        type="text"
                        name="username"
                        placeholder="Type your username"
                        value={this.state.username}
                        onChange={this.handleChange}>
                    </input>

                    <input
                        type="password"
                        name="password"
                        placeholder="Type your password"
                        value={this.state.password}
                        onChange={this.handleChange}>
                    </input>
                </form>
            </div>
        );
    };
}
