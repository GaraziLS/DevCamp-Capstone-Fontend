import React from 'react';
import { Link } from "react-router-dom"

export default function SingleItem(props) {
    return (
        <div>
            <Link to={`/tables/${props.slug}`}>{props.slug}</Link>
        </div>
    );
}