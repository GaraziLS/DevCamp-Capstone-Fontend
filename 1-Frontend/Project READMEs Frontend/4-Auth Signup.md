## Signup form auth

## Adding state and more params to the form

```
export default class SignupComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: ""
            username: "",
            password: ""
        }
    }  
} 
```

Now we need to add an event handler to the form:

```
<form onSubmit={}>
```

Inside the curly brackets we're going to pass a function **WITH NO PARENTHESES** to avoid errors:

```
<form onSubmit={this.handleSubmit}>
```

> We'll create the function later.

Now, we'll add more params to each input because we need to keep track of the value, as well as the changes. So our code from above would become this:

**Sign up form**

```
<form onSubmit={this.handleSubmit}>
        <input>
           type="email"
           name="email"
           placeholder="Type your email"
           value={this.state.email}
           onChange={this.handleSignupChange}>
       </input>

       <input>
           type="text"
           name="username"
           placeholder="Type your username"
           value={this.state.username}
           onChange={this.handleSignupChange}>
       </input>

       <input
           type="password"
           name="password"
           placeholder="Type your password"
           value={this.state.password}
           onChange={this.handleSignupChange}>
       </input>
   </form>
   <button type="submit">Sign up</button>
```

Now we're going to create the handleSignupChange, which will update the state when the user types something in. We'll create that below the constructor.

## Change handler

```
handleSignupChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
```

> We must bind the handler to the ``this`` keyword in order to call it properly, so we'll type ``this.handleSignupChange = this.handleSignupChange.bind(this);``. We should get this:

```
import React, { Component } from 'react';

export default class SignupComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };

        this.handleSignupChange = this.handleSignupChange.bind(this);
    }

    handleSignupChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render {...}
```

## Submit handler

```
this.handleSubmit = this.handleSubmit.bind(this);

handleSubmit(event) {
        event.preventDefault()
    }
```



