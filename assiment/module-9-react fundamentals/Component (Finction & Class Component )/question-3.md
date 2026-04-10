# Question 3:What is the role of render() in class components?

## What is `render()`?
The `render()` method is a **required method in class components**.
It is used to **return JSX** that defines what should be displayed on the screen.

---

## Key Role of `render()`

### 1. Return JSX:
- `render()` returns the structure of the components UI.

```
    class Welcome extends React.Component{
        render(){
            return <h1>Hello, React</h1>
        }
    }
```

### 2.Executes Every Time State Or Props Change:
- When state or props update, `render()` runs again.
- This updates the UI automatically.

### 3. Must Return a Single Parent Element:
- JSX inside `render()` must be wrapped in one parent element.

```
    render(){
        return (
            <>
            <div>
            <h1>Hello, React</h1>
            </div>
            </>
        )
    }
```

### 4. Pure Function Behavior:
- It should not modify state or perform side effects.
- It should only calculate and return JSX.

## Important Rules:
- Do not use `setState()` in `render()`.
- Do not perfrom API calls inside `render()`.
- Keep it simple and focused on rendering.

## Summary:
- `render()` defines what appears on the screen.
- It updates automatically when data changes.
- it is mandatory in class components.


## Conclusion:
 The `render()` method is the heart of class components because it:
 - Controls UI output
 - Updates the view dynamically
 - Connects data with visual representation.

 ### Without `render()` a class component cannot display anything.

