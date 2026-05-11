# Question 6 : What is `useRef`? How to work in React app?

## What is `useRef`?
`useRef` is a React Hook that creates a **mutable reference** to a value.

- The value stored in a ref persists **between re-renders**.
- Updating a ref’s value **does not trigger a re-render**.

`useRef` is commonly used to store:
- DOM elements (to access/manipulate them)
- timeout/interval IDs
- any mutable value that doesn’t need to cause UI updates

---

## Basic syntax
```js
const ref = useRef(initialValue);
```
- `ref.current` holds the current value

---

## How `useRef` works in React app

### 1) Accessing DOM elements
Use `useRef` to get a reference to an element without querying the DOM manually.

```jsx
import React, { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Type here" />
      <button onClick={handleClick}>Focus</button>
    </div>
  );
}
```

### 2) Keeping a value without re-rendering
If you need to store something that changes often (like the latest previous value), use a ref.

```jsx
import React, { useRef, useEffect, useState } from "react";

function LatestValueDemo({ value }) {
  const latestValueRef = useRef(value);

  useEffect(() => {
    latestValueRef.current = value; // does NOT re-render
  }, [value]);

  return <p>Latest stored value: {latestValueRef.current}</p>;
}
```

### 3) Storing interval/timeout IDs
This helps you clear them correctly.

```jsx
import React, { useEffect, useRef } from "react";

function Timer() {
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      console.log("tick");
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return <div>Timer running...</div>;
}
```

---

## Key points to remember
- `useRef` returns an object: `{ current: initialValue }`
- The ref value persists across renders
- Changing `ref.current` **does not** trigger a re-render

---

## Summary
Use `useRef` when you need a persistent, mutable value (often a DOM element reference or a value used for side effects) without causing extra renders.
