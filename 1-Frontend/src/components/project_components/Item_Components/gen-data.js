import React, { Component } from "react";
import axios from "axios";

export default class GenData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            contentArray: [],
            error: "",
            loading: true
        };

        this.getData = this.getData.bind(this);
    }

    getData() {
        if (!this.props.item_id) {
            this.setState({ error: "Item ID is missing", loading: true });
        } else {

            axios.get(`http://localhost:5000/tables/${this.props.item_id}`)
                .then(response => {
                    const data = response.data;
                    const contentArray = data.item_content.split(","); // Split the item_content into an array
                    console.log(contentArray)

                    this.setState({
                        data: data,
                        contentArray: contentArray, // Store the array in the state
                        loading: false
                    });
                })
                .catch(error => {
                    console.log('Error in the API:', error);
                    this.setState({ error: error.message, loading: true });
                });
        }
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        const { data, contentArray, error, loading } = this.state;

        if (loading) {
            return <div>Loading...</div>; // Show loading state until data is fetched
        }

        if (error) {
            return <div>Error: {error}</div>;
        }

        if (!data) {
            return <div>No data found</div>; // Handle case where no data is returned
        }

        return (
            <div>
                {contentArray.map(item =>
                    (item)
                )}
            </div>
        );
    }
}