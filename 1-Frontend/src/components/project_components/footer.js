import React from 'react';
import Date from "../../helpers/date";


export default function() {
    return(
        <div className="footer-wrapper">
            <div className="footer-item-wrapper">
                <div className="footer-item">The Home of Imagination</div>

                <div className="footer-item"><Date/></div>

                <div className="footer-item">
               | <a href="" className="link">Frontend code</a>, <a href="" className="link">Backend code</a>.
                </div>
            </div>
        </div>
);
}