## Adding more params to the Sign Up form

```
export default class SignupComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            username: "",
            password: ""
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

**sign up form**

```
<form>
       <input
           type="email"
           name="email"
           placeholder="Type your email"
           value={this.state.email}
           onChange={this.handleChange}>
       </input>

       <input>
           type="text"
           name="username"
           placeholder="Type your username"
           value={this.state.username}
           onChange={this.handleChange}>
       </input>

       <input
           type="password"
           name="password"
           placeholder="Type your password"
           value={this.state.password}
           onChange={this.handleChange}>
       </input>
   </form>
```
