import React, { useState, useEffect } from 'react';
import axios from "axios";

import SingleItem from "../Item_Components/single-item"

const SearchBar = () => {
    const [data, setData, filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/tables")
                setData(response.data);
            } catch (error) {
                console.log("An error happened", error)
            }
        }

        getData();
    }, []); // Empty dependency array ensures this runs once after initial render

    return (
        <div className='search-wrapper'>
            <div className='search-field'>
                <input
                    type='text'
                    placeholder='Search generators'
                    label="Search generators"
                //onChange={ }
                >
                </input>
            </div>
            <div className="search-results">
                {data.map(item => {
                    return <SingleItem key={item.item_id} item_id={item.item_id} title={item.item_title} content={item.item_content} slug={item.item_title} category={item.item_category} />
                })}
            </div>
        </div>
    )
}

export default SearchBar;