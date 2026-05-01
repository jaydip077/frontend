# Custom Color Codes in Tailwind CSS (Your Project)

Your project uses Tailwind via `@import "tailwindcss";` in `src/index.css`.

## Default Colors
Use classes like:
- `bg-red-500` = #ef4444
- `text-blue-600` = #2563eb
- Full list: https://tailwindcss.com/docs/customizing-colors#default-color-palette

Example in your `home.jsx`:
```jsx
<nav className="bg-indigo-600 text-white">  // #4f46e5
```

## 1. Arbitrary Values (No config needed - Tailwind v3+)
Use `[]` for any hex/rgb/hsl:
```jsx
<div className="bg-[#FF5733] text-white p-4">Custom #FF5733</div>
<div className="bg-[rgb(34,197,94)]">RGB Green</div>
<div className="bg-[hsl(240,100%,50%)]">HSL Blue</div>
<div className="text-[oklch(65%_65%_290)]">OKLCH</div>
```
**Apply now**: `<nav className="bg-[#8B4513] p-5">` (Saddle Brown)

## 2. Extend Theme (Recommended for reuse)
Create/update `tailwind.config.js`:
```js
/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        'royal-gold': '#D4AF37',
        'luxury-purple': '#6a0dad',
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',  // Default blue-500
          900: '#1e3a8a',
        }
      }
    }
  }
}
```
Usage: `bg-royal-gold`, `text-primary-500`, `border-luxury-purple/50`

## 3. CSS Vars (Dynamic)
In CSS:
```css
:root {
  --royal-blue: #1e40af;
}
```
```jsx
<div className="[background-color:var(--royal-blue)]">Var color</div>
```

## Integrate to Your App
1. Add arbitrary to `home.jsx` navbar: `bg-[#yourhex]`
2. For custom palette: Create `tailwind.config.js` above, restart dev server.

Run `npm run dev` to test classes live.

Examples work in your JSX exactly as shown.
