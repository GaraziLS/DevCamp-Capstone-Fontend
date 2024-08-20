import React from 'react';
import { Link } from "react-router-dom";

export default function SingleItem(props) {
    return (
        <div className="item-wrapper">
            <Link to={`/tables/${props.slug}`}>{props.slug}</Link>
            {props.content}
        </div>
    );
}