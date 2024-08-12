## Using APIs

We'll now start connecting the frontend and the backend using Axios. This will allow us to create data dynamically over time.

First, we'll make a test to ensure everything is working, and we'll do it in the **app.js** file.

```
export default class App extends Component {
  constructor() {
    super();

    Icons()

    this.getAllItemsData = this.getAllItemsData.bind(this)
  }

  getAllItemsData() {
    axios.get("http://localhost:5000/tables")
      .then(response => {
        console.log("Items received", response)
      }).catch(error => {
        console.log(error)
      })
  }

  render() {
    this.getAllItemsData()
```

Now a message should appear in the console. We're going to move this to the **item-container** file, which is the component rendering in the homepage.

```
import React, { Component } from 'react';
import axios from "axios";
import SingleItem from '../Item_Components/single-item';



export default class ItemContainer extends Component {
    constructor() {
        super();

        this.state = {
            data: [],
            isLoading: false

        }

        // Bindings

        this.getAllItemsData = this.getAllItemsData.bind(this)
    }

    // Data Container

    SingleGenerators() {
        const data = [
            { id: "1", title: "Races", category: "Characters", slug: "Races" },
            { id: "2", title: "Weapons", category: "Objects", slug: "Weapons" },
            { id: "3", title: "Treasure", category: "Treasure", slug: "Treasure" }
        ];
        return data.map(_item => {
            return (< SingleItem key={_item.id} title={_item.title} slug={_item.slug} />)
        })
    }

    // API Connections

    getAllItemsData() {
        axios.get("http://localhost:5000/tables")
            .then(response => {
                console.log("Items received", response)
            }).catch(error => {
                console.log(error)
            })
    }


    render() {
        this.getAllItemsData()
```

Now the console should display the axios calling.

<!-- ##TODO: Create a way for me, as an admin, to delete user accounts. TBD when the project is delivered -->


## Rendering data

We've tested our endpoints and they display on console. Now we're going to render them on the screen. To do that, first we'll go to the **item-container.js** file.

We'll remove the methods we had to start freshly, and will also remove the hardcoded data in the initial state. We'll call Axios in a new method called GetAllTables: