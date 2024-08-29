import React, { Component } from 'react';
import axios from 'axios';

export default class GeneratorForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item_id: "",
            item_title: "",
            item_category: "Characters",
            item_content: "",
            editMode: false,
            apiUrl: "http://localhost:5000/create",
            apiAction: "post"
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.buildForm = this.buildForm.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.handleEditItem !== this.props.handleEditItem &&
            Object.keys(this.props.handleEditItem).length > 0
        ) {
            this.setState({
                item_id: this.props.handleEditItem.item_id || "",
                item_title: this.props.handleEditItem.item_title || "",
                item_category: this.props.handleEditItem.item_category || "",
                item_content: this.props.handleEditItem.item_content || "",
                editMode: true,
                apiUrl: `http://localhost:5000/tables/${this.props.handleEditItem.item_id}`,
                apiAction: "put"
            });

            // Clear the edit item from props
            this.props.handleClearEditItem();
        }
    }

    buildForm() {
        const formData = new FormData();
        formData.append("Item[item_title]", this.state.item_title);
        formData.append("Item[item_content]", this.state.item_content);
        formData.append("Item[item_category]", this.state.item_category);

        // Logging FormData entries for debugging
        for (let [key, value] of formData.entries()) {
            console.log("FormData entry:", key, value);
        }

        return formData;
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        axios({
            method: this.state.apiAction,
            url: this.state.apiUrl,
            data: this.buildForm(),
            withCredentials: true,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                if (this.state.editMode) {
                    this.props.handleEditFormSubmission();
                } else {
                    this.props.handleNewFormSubmission(response.data);
                }

                // Reset the form state
                this.setState({
                    item_id: "",
                    item_title: "",
                    item_category: "Characters",
                    item_content: "",
                    editMode: false,
                    apiUrl: "http://localhost:5000/create",
                    apiAction: "post"
                });
            })
            .catch(error => {
                console.log("Something went wrong", error);
            });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="item_title"
                        placeholder="Generator name"
                        label="Generator name"
                        value={this.state.item_title}
                        onChange={this.handleChange}
                    />
                    <select
                        name="item_category"
                        value={this.state.item_category}
                        onChange={this.handleChange}
                    >
                        <option value="Characters">Characters</option>
                        <option value="Objects">Objects</option>
                        <option value="Quests">Quests</option>
                        <option value="Skills">Skills</option>
                        <option value="World">World</option>
                        <option value="Other">Other</option>
                    </select>
                    <div>
                        <textarea
                            name="item_content"
                            placeholder="Write your generator's content here. Use commas (,) to separate values, please."
                            label="Write your generator's content here. Use commas (,) to separate values, please."
                            value={this.state.item_content}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit">Save generator</button>
                </form>
            </div>
        );
    }
}
