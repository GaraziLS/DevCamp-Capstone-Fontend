
import React from 'react';

export default function (props) {
    return (
        <div>
            <h1>
                {props.match.params.slug}
            </h1>
            <h2>
                {props.content}
            </h2>



            <button>Roll!</button>
        </div>


    );
}