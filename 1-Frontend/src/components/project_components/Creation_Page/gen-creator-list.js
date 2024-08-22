import React from 'react';

const RandomGenList = (props) => {
    console.log("ïtem props", props)
    const { data } = props

    return (
        <div>
            <p style={{ fontSize: '12px' }}>{data.item_content}</p>
        </div>
    );
};


export default RandomGenList;
