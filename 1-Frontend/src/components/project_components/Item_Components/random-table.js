
import React from 'react';

export default function (props) {
    return (
        <h1>
            {props.match.params.slug}
            {props.match.params.content}
        </h1>
    );
}