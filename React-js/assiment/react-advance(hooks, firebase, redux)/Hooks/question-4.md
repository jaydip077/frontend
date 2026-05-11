# Question 4: What is the purpose of useCallback & useMemo Hooks?
# Purpose of `useCallback` & `useMemo` Hooks

## Why we need them (performance idea)
In React, components re-render when state/props change. During re-render:
- Functions defined inside components are recreated.
- Expensive calculations run again unless memoized.

`useCallback` and `useMemo` help avoid unnecessary work by **caching values/functions** between renders.

---

## `useCallback` — memoize a function
### Purpose
`useCallback(fn, deps)` returns a **memoized version of `fn`**.
- It keeps the **same function reference** between renders as long as dependencies (`deps`) don’t change.

### Why it matters
This is especially important when:
- passing callbacks to child components that use `React.memo` (or have optimized renders)
- you want to prevent child re-renders caused only by a new function reference

### Syntax
```js
const memoizedCallback = useCallback(() => {
  // code
}, [dependencies]);
```

### Example
```jsx
import React, { useCallback, useState } from "react";

function Parent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <div>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

---

## `useMemo` — memoize a computed value
### Purpose
`useMemo(() => computeValue, deps)` caches the **result of an expensive calculation**.
- React recalculates the value only when dependencies change.

### Why it matters
This is important when the computation is costly (filtering, sorting large lists, heavy calculations) and would otherwise run on every render.

### Syntax
```js
const memoizedValue = useMemo(() => {
  return computeValue();
}, [dependencies]);
```

### Example
```jsx
import React, { useMemo, useState } from "react";

function ProductList({ products, search }) {
  const filtered = useMemo(() => {
    return products.filter(p => p.name.includes(search));
  }, [products, search]);

  return (
    <ul>
      {filtered.map(p => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  );
}
```

---

## Quick comparison
- **`useCallback`**: caches a **function** (stable reference)
- **`useMemo`**: caches a **value** (stable computed result)

---

## Summary
- Use **`useCallback`** when you want to avoid creating a new function on every render (mainly for performance with memoized child components).
- Use **`useMemo`** when you want to avoid re-running expensive calculations on every render.

