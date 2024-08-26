import React from 'react';

const GeneratorList = (props) => {
    const RawData = props.data;
    return (
        <div>
            <h1>{RawData.item_id}</h1>
            <h2>{RawData.item_title}</h2>

            <button>Edit</button>
            <button>Delete</button>

        </div>
    );

};

export default GeneratorList;
