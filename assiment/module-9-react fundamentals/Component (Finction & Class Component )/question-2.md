# Question 2: How do you pass data to a component using props?

## Definition:
**Props** are used to pass data from a **parent to child**.
### they make components reusable and dynamic.

---
## Step 1: Passing Props from Parent to Child:
You pass data as attributes when calling a component.

### Example:
```
    import React from "react";
    import Child from "./Child";

    function Parent(){
        return (
            <>
            <div>
                <Child name="Jaydeep" />
            </div>
            </>
        )
    }
    export default Parent;
```

## Step 2: Receiving Props in Child Component:
The child component receives the props as attributes.

### Example:
```
    import React from "react";

    function Child(props){
        return (
            <>
            <h1>Hello, {props.name}</h1>
            </>
        )
    }
    export default Child;
```

## Destructuring Props:
You can also use destructuring to access props more cleanly.

### Example: Parent
```
    import React from "react";
    import Child from "./Child";
    function Parent(){
        return (
            <>
            <div>
                <Child name="Jaydeep" />
            </div>
            </>
        )
    }
    export default Parent;
```
### Example: Child with Destructuring
```
    import React from "react";

    function Child({ name }){
        return (
            <>
            <h1>Hello, {name}</h1>
            </>
        )
    }
    export default Child;
```

## Important Points:
- Props are read-only (cannot be modified).
- Data flows one-way (parent to child).
- Props make components reusable and dynamic.