import React from 'react';
import { Link } from "react-router-dom";

export default function SingleItem(props) {
    return (
        <div className="link">
            <Link to={`/tables/${props.item_id}`}>{props.slug}</Link>
        </div>
    );
}