# Question 3: What is `useReducer`? How do we use it in a React app?

## What is `useReducer`?
`useReducer` is a React Hook used to manage **component state** in a more predictable way—especially when the next state depends on **complex logic** or **multiple actions**.

It is an alternative to `useState`.

### Core idea
Instead of directly setting state (like `setState`), you:
1. Define a **reducer** function
2. Dispatch **actions** to describe what happened
3. The reducer calculates the **new state**

`useReducer` is based on the **Reducer pattern** (similar to Redux).

---

## Syntax
```js
const [state, dispatch] = useReducer(reducer, initialState);
```
- `reducer(state, action)` → returns the updated state
- `initialState` → starting state value/object
- `dispatch(action)` → sends an action to the reducer

---

## How to use `useReducer` in a React app
### Step 1: Create the reducer
```js
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    default:
      return state;
  }
}
```

### Step 2: Use the hook in a functional component
```jsx
import React, { useReducer } from "react";

function Counter() {
  const initialState = { count: 0 };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>
        +1
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        -1
      </button>
    </div>
  );
}

export default Counter;
```

---

## Example: Handling form or multi-field state
`useReducer` is useful when state has many fields, like:
- forms
- filters/search state
- multi-step checkout

Example actions:
- `{ type: "change_field", field: "email", value: "a@b.com" }`
- `{ type: "reset" }`

---

## Why use `useReducer`?
Use it when:
- state transitions are complex
- many different user events trigger different state changes
- you want clearer structure using action types
- you want easier debugging/maintenance (logic centralized in reducer)

---

## Summary
- `useReducer` manages state via a **reducer** and **actions**.
- You dispatch actions like `{ type: "increment" }`.
- The reducer decides how state changes.
- It’s especially helpful for complex state logic or multi-step behaviors.

