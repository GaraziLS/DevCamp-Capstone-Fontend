import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

export default function() {
    return(
    <div>
        <h1>Oops, page or generator not found.</h1>
        <h2>Or perhaps you would like to <NavLink exact to="/create" className="link" activeClassName="active-link">create</NavLink> one?</h2>

        <h2><NavLink exact to="/" >Return to homepage</NavLink> </h2>
    </div>
);
}