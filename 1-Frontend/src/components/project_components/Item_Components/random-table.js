
import React from 'react';

export default function (props) {
    return (
        <h1>
            {props.match.params.slug}
        </h1>
    );
}