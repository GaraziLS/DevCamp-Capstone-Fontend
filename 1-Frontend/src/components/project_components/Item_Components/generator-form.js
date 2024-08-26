import React, { Component } from 'react';
import axios from "axios";

export default class GeneratorForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item_title: "",
            item_category: "Characters",
            item_content: "",

        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.buildForm = this.buildForm.bind(this)
    }

    buildForm() {
        let formData = new FormData();

        formData.append("Item[item_title]", this.state.item_title);
        formData.append("Item[item_content]", this.state.item_content);
        formData.append("Item[item_category]", this.state.item_category);


        if (this.state.item_title) {
            formData.append("Item[item_title]", this.state.item_title);
        }

        if (this.state.item_content) {
            formData.append("Item[item_content]", this.state.item_content);
        }

        if (this.state.item_category) {
            formData.append("Item[item_category]", this.state.item_category);
        }

        return formData;
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        axios.post(
            "http://localhost:5000/create",
            this.buildForm(),
            { withCredentials: true, headers: { "Content-Type": "application/json" } })
            .then(response => {
                this.props.handleSuccessfulFormSubmission(response.data)
                this.setState({
                    item_title: "",
                    item_category: "Characters",
                    item_content: "",
                })
            }).catch(error => {
                console.log("Something went wrong", error)
            })
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="item_title"
                        placeholder="Generator name"
                        value={this.state.item_title}
                        onChange={this.handleChange}
                    />
                    <select
                        name="item_category"
                        value={this.state.item_category}
                        onChange={this.handleChange}
                    >
                        <option value="characters">Characters</option>
                        <option value="objects">Objects</option>
                        <option value="quests">Quests</option>
                        <option value="skills">Skills</option>
                        <option value="world">World</option>
                        <option value="other">Other</option>
                    </select>
                    <div>
                        <textarea
                            type="text"
                            name='item_content'
                            placeholder="Write your generator's content here. Use commas (,) to separate values, please."
                            value={this.state.item_content}
                            onChange={this.handleChange}>
                        </textarea>
                    </div>
                    <button type="submit">Save generator</button>
                </form>
            </div>
        );
    };
}