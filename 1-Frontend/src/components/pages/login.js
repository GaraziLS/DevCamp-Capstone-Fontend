import React, { Component } from 'react';
import LoginComponent from '../project_components/Auth/login_component';

export default class Login extends Component {
    constructor() {
        super();

}
    render() {
        return (
        <div>
            <LoginComponent/>
        </div>
        );
    };
}