import React, { Component } from 'react';

export default class GeneratorForm extends Component {
    constructor() {
        super();

    }
    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="Generator name" />
                    <select name="category">
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
                            name='generator-data'
                            placeholder="Write your generator's content here. Use commas (,) to separate values, please.">
                        </textarea>
                    </div>
                </form>
            </div>
        );
    };
}