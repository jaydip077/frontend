# Question 1: What are components in React? Explain the difference between functional components and class components.

## What are components in React?

## Definition:

    **Components** are the building blocks of a React application.
    They are reusable, independent pieces of UI that return JSX to display on the screen,

    👉 Think of component like functions that create part of the user interface(e.g. header , footer, button).

    ---
## Types of Components in React:

React mainly has twi types of components:
1. Functional Component.
2. Class Component.

---

## 1. Funational Component:
    Functional component are **simple JavaScript function** that return JSX.

### Example:
```
    function Functionapp(){
        return <h1>Hello, React</h1>
    }
```
### Features:
- Easy to write and understand
- Use Hooks (like useState,useEfffect) for state and lifecycle.
- Preferred in modern React.

## 2.Class Component:

Class component are ES6 classes that extend React.Component.

### Example:
```
import React, {Component} from "react";

class Welcome extends Component{
    render(){
        return <h1>Hello, React</h1>
    }
}
```

### Features:
- Use `this.state` to manage data.
- Use lifecycle methods like `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`.
- More complex than functional components.

# Difference between Functional Component and Class Component:
| Feature | Functional Component | Class Component |
| --- | --- | --- |
| Syntax | Simple Function | ES6 Class |
| Code Complexity | Easy and concise | More complex |
| State Management | Uses Hooks (like useState,useEfffect) | Uses `this.state` |
| Lifecycle Methods | Uses Hooks(Like useEffect) | Uses lifecycle methods |
| Performance | Slightly better(lighter) | Slightly heavier |
| Usage Today | Preferred (modern React) | Less commonly used|

## Conclusion:
- Components are the core of React Development.
- Functional components are modern, simple, and widely used.
- Class components are older and more complex, but still important to understand.
 ## In real projects today, focus on function componets with Hooks.
