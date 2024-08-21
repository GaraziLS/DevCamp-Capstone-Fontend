import React from 'react';
import axios from "axios"

const GenData = (_props) => {
    const RawData = (_props) => {
        axios.get('http://localhost:5000/tables' + item_id, { withCredentials: true })
            .then(response => {
                console.log("test", response)
            })
            .catch(error => {
                console.log('Error in the API', error);
            });
    }
    return (
        <div>
            {RawData}
        </div>
    );

}

export default GenData

