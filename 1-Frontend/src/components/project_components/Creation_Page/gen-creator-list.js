import React from 'react';

const RandomGenList = (props) => {
    const RandomGen = props.data.map(item => {
        debugger;
        return (
            <div>
                <h1>{item.item_title}</h1>
                <h2>{item.item_id}</h2>
            </div>
        );
    });

    return (
        <div>
            {RandomGen}
        </div>
    );
}

export default RandomGenList;
