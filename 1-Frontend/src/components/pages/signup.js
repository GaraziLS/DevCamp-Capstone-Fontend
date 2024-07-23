import React, { Component } from 'react';
import SignupComponent from '../project_components/Auth/signup_component';

export default class Signup extends Component {
    constructor() {
        super();

}
    render() {
        return (
        <div>
            <SignupComponent/>
        </div>
        );
    };
}