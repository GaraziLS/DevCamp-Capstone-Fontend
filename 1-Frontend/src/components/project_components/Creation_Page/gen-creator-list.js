import React from 'react';

const RandomGenList = (props) => {
    const RandomGen = props.data.map(item => {
        return (
            <div key={item.item_id}>
                {item.item_content}
            </div>
        );
    });


    return <div>{RandomGen}</div>;
};


export default RandomGenList;
