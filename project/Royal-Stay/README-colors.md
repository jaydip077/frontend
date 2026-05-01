# How to Use Color Codes in React.js

## 1. Inline Styles (JSX style attribute)
Use camelCase properties with strings:
```jsx
<div style={{ backgroundColor: '#FF5733', color: 'white' }}>Hex</div>
<div style={{ backgroundColor: 'rgb(255, 0, 0)' }}>RGB</div>
<div style={{ color: 'hsl(120, 100%, 50%)' }}>HSL</div>
```

**In your project**: Add to any element in `src/components/home.jsx`, e.g.:
```jsx
<button style={{ backgroundColor: '#yourcolor' }}>Button</button>
```

## 2. Tailwind CSS Classes (Your project uses Tailwind)
```jsx
<div className="bg-red-500 text-white p-4">Red</div>
<div className="bg-blue-600 hover:bg-blue-700">Hover</div>
```
Colors: `bg-{color}-{shade}` (e.g., bg-gray-300 in your navbar).

## 3. External CSS Classes
Import CSS and use `className`:
```css
/* color-demo.css */
.custom-blue { background-color: #3498db; }
```
```jsx
import './color-demo.css';
<div className="custom-blue"></div>
```

## 4. CSS Variables
Define in CSS `:root`, use in style/class:
```css
:root { --primary: #e74c3c; }
```
```jsx
<div style={{ backgroundColor: 'var(--primary)' }}></div>
```

## 5. Dynamic Colors
```jsx
const isActive = true;
<div style={{ color: isActive ? 'green' : 'red' }}></div>
```

## Demo Files Created
- `color-demo.jsx`: Full React component demo.
- `color-demo.css`: Custom classes + vars.
Import into App.jsx: `import ColorDemo from './color-demo'; <ColorDemo />`

Run `npm run dev` to see your app. Colors work exactly like vanilla JS/CSS but use `className` and camelCase for style props.

**Pro Tip**: For Tailwind (your setup), use [Tailwind Color Docs](https://tailwindcss.com/docs/background-color) - e.g., change navbar `bg-gray-300` to `bg-blue-500`.

