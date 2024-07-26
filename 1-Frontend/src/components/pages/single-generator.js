import React, { Component } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';

export default class SingleGenerator extends Component {
    constructor() {
        super();

}
    render() {
        return (
        <div>
            <NavLink to={`/tables/${this.props.slug}`}>Link to a random table</NavLink>
        </div>
        );
    };
}