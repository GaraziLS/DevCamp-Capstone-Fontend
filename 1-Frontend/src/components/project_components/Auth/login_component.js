import React, { Component } from "react";

export default class LoginComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        }

        handleLoginChange(Event); {
            this.setState({
                [Event.target.name]: Event.target.value
            })
        }
    }
    render() {
        return (
            <div>
                <form onChange={handleLoginChange}> 
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
            </div>
        );
    };
}
