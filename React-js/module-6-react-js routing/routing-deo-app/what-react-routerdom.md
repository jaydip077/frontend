# What is react router dome?
1. react router dom is external package of react.js
2. react js router dom is used to connet one page to anither page.
3. react router dom is a package that is used to redirect one page to redirect one page to another page.

**how to install react router dom**

```
npm create vite@latest
cd appname
npminstall react-router-dom

```

**modules of react router dom**

**browserRouter :**
```
it is aparent of routing will be load your router in your web page

import {BrowserRouter as Router} from 'react-router-dom'
```

**Router :**

```
it is aparent of routing will be load your router in your web page

import {BrowserRouter as Router} from 'react-router-dom'
```

**Rooutes**
```
Routes is modules come from react router dome that can be hold as parent of multiple Route
import {BrowserRouter as Router ,Routes} from 'react-router-dom'
```

**Route**
```
Route is hold multiple component via path
Route is multiple that can be hold multiple pages Route

import {BrowserRouter as Router,Route} from 'react-router-dom'
```
**link:**
```
Link is an modulw of react router dom and its used to redirect from on page to another page or linkn multiple pages.

import {Link} from 'react-router-dom'

<a href='about.html'>about<a>
or
<link to='/about'>About<Link>

** *: **
```
* is search all page routing if page routin not foundload 404 or page not found
```

**path :**
```
Path is load your routing from react-roouter-dom
<Route path='/'></Route>
```

**element**
```
Element is attribute of route that cn be explain your page route are loaded from which component in react js.
<Route path='/ element={<layout/>}'></Route>
```