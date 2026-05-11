# Question-1  What are React hooks? How do useState() and useEffect() hooks work in functional components?

## What are React Hooks?
**React Hooks** are functions that let you use React features (like **state** and **side effects**) inside **functional components**.

Before Hooks, state and lifecycle logic were typically handled in **class components**. Hooks allow the same capabilities in function-based components.

Common built-in hooks:
- `useState()` — manage component state
- `useEffect()` — handle side effects (effects)

---

## How does `useState()` work?
`useState()` lets a functional component hold **local state**.

### Core behavior
- Call `const [value, setValue] = useState(initialValue)`
- `value` is the current state
- `setValue(newValue)` updates state
- When state updates, React **re-renders** the component so the UI reflects the new state

### Example
```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

### Key notes
- State updates trigger re-render.
- Updates may be batched by React for performance.

---

## How does `useEffect()` work?
`useEffect()` runs **after the component renders** and is used for **side effects** such as:
- fetching data from an API
- subscribing/unsubscribing to events
- setting timers
- updating the document title

### Core behavior
```js
useEffect(() => {
  // side effect code
}, dependencies);
```

- The effect function runs **after rendering**.
- The **dependency array** controls when it should re-run.

### Dependency array cases
1. **No dependency array**: runs after **every render**
2. **Empty dependency array `[]`**: runs **once** after the first render
3. **With dependencies `[dep1, dep2]`**: runs again whenever any dependency changes

### Example
```jsx
import React, { useEffect, useState } from "react";

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const res = await fetch(`/api/users/${userId}`);
      const data = await res.json();
      setUser(data);
    }

    fetchUser();
  }, [userId]);

  if (!user) return <p>Loading...</p>;
  return <h2>{user.name}</h2>;
}
```

### Cleanup function
If the effect creates something that must be disposed (like intervals or subscriptions), `useEffect` can return a cleanup function:
```jsx
useEffect(() => {
  const id = setInterval(() => console.log("tick"), 1000);

  return () => clearInterval(id);
}, []);
```

Cleanup runs when:
- the component unmounts, or
- dependencies change (before the effect runs again)

---

## Summary
- **`useState()`**: stores and updates local state inside functional components; updating state causes a re-render.
- **`useEffect()`**: runs side-effect logic after rendering; controlled using the dependency array; supports cleanup to prevent leaks.

