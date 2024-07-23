## Creating an item container for the homepage

In the **src > project_components** folder, we've created another folder called Site Container, and inside it we'll create a file called **item-container.js** This component will be embeded in the homepage and will store our random generators. Right now no items will appear, but we can start by doing the page structure. We'll also import from here ach individual item, so we should get this:

```
import React, { Component } from 'react';
import SingleGenerator from "../../pages/generator-item"

export default class ItemContainer extends Component {
    constructor() {
        super();

}
    render() {
        return (
        <div>
            <SingleGenerator/>
        </div>
        );
    };
}
```