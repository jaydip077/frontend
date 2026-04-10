# Question 3:Discuss the importance of using curly braces {} in JSX expressions.

## What are curly braces `{}` in jsx ?
 Curly braces `{}` in jsx are used to * embed JavaScript expressions inside HTML-like syntax**.
 They allows React to render dynamic and interactive content.

 ---

 ## Why are curly  braces {} important ?
 ### 1. Enable Dynamic Content:
- you can display variable and dynamic values in the UI.

```
const name = "Jaydeep";
return <h1>Hello, {name}!</h1>;

```

### 2. Allow JavaScript Expressions:
- Perform calculations directly inside JSX.
```
const a = 5;
const b = 10;
return <p>The sum of a and b is {a + b}.</p>;
```
### 3.Function Execution:
- Call functions and display their results.

```
function greet(name) {
  return `Hello, ${name}!`;
}
return <h1>{greet("Jaydeep")}</h1>;
```

### 4. Conditional Rendering:
- Use JavaScript logic to conditionally render elements.
```
const isAuth = true;
return isAuth ? <h1>Welcome, Jaydeep!</h1> : <h1>Please log in.</h1>;
```

### 5.Rendering Lists:
- Loop through arrays to render multiple elements.

```
   import React from "react";

function FruitList() {
  const fruits = ["Apple", "Banana", "Mango"];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

export default FruitList; 
```

### 6.Applying inline Styles:
- Apply styles directly to JSX elements.

```
import React from "react";

function StyledText() {
  const style = { color: "red" };

  return (
    <h1 style={style}>Hello</h1>
  );
}

export default StyledText;
```


# Important Rules:
- only JavaScript epressions are allowed inside {}:
  - Allowed:variables,expressions,functions calls
  - not allowed:statements like if,for,while
- For conditions use:
    - Ternary operator (condition A : B)
    - Loginc AND (condition && A)

# Conclusion:
Curly braces `{}` are essential in JSX because they:
- Make UI dynamic and interactive.
- Conntct JavaScript logic with HTMl structure.
- ALlows real-time rendering
