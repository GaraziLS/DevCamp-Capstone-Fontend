import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default class SingleGenerator extends Component {
    constructor(props) {
        super(props);

}
    render() {
        return (
        <div>
            <Link to={`tables/${this.props.slug}`}>Link</Link>
        </div>
        );
    };
}