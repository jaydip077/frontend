# Question 5: Difference between `useCallback` & `useMemo` Hooks

## Quick difference
- **`useCallback`** memoizes a **function** (keeps the same function reference between renders).
- **`useMemo`** memoizes a **computed value** (reuses the calculated result between renders).

---

## `useCallback` (memoize a function)
### Purpose
Returns a memoized version of a callback function.

### Syntax
```js
const memoizedFn = useCallback(() => {
  // function body
}, [dependencies]);
```

### Use case
When you pass callbacks to child components, especially those optimized with **`React.memo`**, to prevent unnecessary child re-renders.

---

## `useMemo` (memoize a value)
### Purpose
Returns a memoized value from an expensive calculation.

### Syntax
```js
const memoizedValue = useMemo(() => {
  return computeExpensiveValue();
}, [dependencies]);
```

### Use case
When you have expensive computations like sorting/filtering large arrays and want to avoid recomputing on every render.

---

## Comparison table
| Hook | Memoizes | Returns | Common reason |
|------|-----------|---------|----------------|
| `useCallback` | Function reference | Function | Avoid recreating callback each render |
| `useMemo` | Computed result | Value | Avoid recalculating expensive computation |

---

## Rule of thumb
- If you want to memoize a **function** you pass around → **`useCallback`**.
- If you want to memoize a **calculated value** → **`useMemo`**.

