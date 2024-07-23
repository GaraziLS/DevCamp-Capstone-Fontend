## Login form auth

## Adding state and more params to the form

Both forms handle state, and change it while the user is typing. We'll add state inside the forms (it will start empty):

```
export default class LoginComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
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

**Log in form**

```
<form>
       <input>
           type="text"
           name="username"
           placeholder="Type your username"
           value={this.state.username}
           onChange={this.handleLoginChange}>
       </input>

       <input
           type="password"
           name="password"
           placeholder="Type your password"
           value={this.state.password}
           onChange={this.handleLoginChange}>
       </input>
   </form>
```

Now we're going to create the handleLoginChange, which will update the state when the user types something in. We'll create that below the constructor.

```
handleLoginChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
```

This code receives an event and sets state. The event.target name is set to distinguish between the state elements, to know which is which (if the user types in the password field the target will be the password, and so on). The [] are used to note that this is an expression and not a string.
