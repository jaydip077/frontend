# Question 2:How is JSX different from regular JavaScript? Can you write JavaScript inside JSX?

## Difference Between JSX and JavaScript

| Feature          |JSX                |JavaScript       |
|------------------|-------------------|-----------------|
| Syntax           |HTML-like syntax  |JavaScript syntax|
|Readability      |Easy to read and write UI code   |Less readble for UI  |
|Usage    | Used in React for UI rendering  | General programming |

| Compilation    | Need Babel to convert into JS   | Runs directly on browser |
| Example   | `<h1>Helo</h1>`   | `React.createElement("h1", null, "Hello")` |

---

## Can You Write JavaScript Inside JSX?

### Yes You Can Write JavaScript Inside JSX using curly braces {}.

### Example:
 1. **Using JavaScript Variables in JSX**:

 ```
    const name = "Jaydeep";
    return <h1>Hello, {name}!</h1>;
```

2. **Using Expressions**:
```
    const a = 5;
    const b = 10;
    return <p>The sum of a and b is {a + b}.</p>;
```

3. **Using Functions**:
```
    function greet(name) {
      return `Hello, ${name}!`;
    }
    return <h1>{greet("Jaydeep")}</h1>;
```

# Important Rules:

- Only expressions can be used inside curly braces.(Not statements like if,for).
- For condition use:
  - Ternar operator: {condition ? "yes" : "no"}
  - Logical AND: {condition && "yes"}