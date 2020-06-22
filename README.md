## Basic React routing

```javascript
npx create-react-app react-routers
cd react-routers
```

Lets create two pages. In simple terms two functional react component:
// App.js
...

const LandingIndexPage = () => {
  return (
    <h3>Landing Page</h3>
  );
};

const AboutPage = () => {
  return (
    <h3>About Page</h3>
  );
};

...

---

#### React Routers
- react-router-dom: BrowserRouter
+ A router which uses client support HTML5 pushState API
+ It routes as normal URL in browser, you can't differentiate whether it is server rendered page or client rendered page through the URL.
+ It accepts forceRefresh props to support legacy browsers which doesn't support HTML5 pushState API
+ Can use browser History
```javascript
import { BrowserRouter as Router } from 'react-router-dom';
```


- react-router-dom: MemoryRouter
+ Maintain same url for all routes, doesn't change the url but keep them on memory
+ Can't use browser History. So you can't go back/forward using browser history

```javascript
import { MemoryRouter as Router } from 'react-router-dom';
```


- react-router-dom: HashRouter
```javascript
import { HashRouter as Router } from 'react-router-dom';
```
+ A router which uses client side hash routing.
+ It is used to support legacy browsers which usually doesn't support HTML pushState API
+ Can use browser History
