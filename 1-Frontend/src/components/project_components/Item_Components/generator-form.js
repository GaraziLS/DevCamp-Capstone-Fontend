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



    componentDidUpdate(prevProps) {
        console.log("componentDidUpdate triggered")
        if (prevProps.handleEditItem !== this.props.handleEditItem && Object.keys(this.props.handleEditItem).length > 0) {
            console.log("Updating state with:", this.props.handleEditItem);
            this.setState({
                item_title: this.props.handleEditItem.item_title || "",
                item_category: this.props.handleEditItem.item_category || "",
                item_content: this.props.handleEditItem.item_content || ""
            })

            this.props.handleClearEditItem()
        }
    }

    buildForm() {
        let formData = new FormData();

        formData.append("Item[item_title]", this.state.item_title);
        formData.append("Item[item_content]", this.state.item_content);
        formData.append("Item[item_category]", this.state.item_category);

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
        console.log("Current props:", this.props);
        console.log("Current state:", this.state);

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
                        <option value="Characters">Characters</option>
                        <option value="Objects">Objects</option>
                        <option value="Quests">Quests</option>
                        <option value="Skills">Skills</option>
                        <option value="World">World</option>
                        <option value="Other">Other</option>
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