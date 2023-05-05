## React routing playground

```javascript
npx create-react-app react-routers
cd react-routers
npm install --save react-router-dom
```

Lets create two pages. In simple terms two functional react component:

```javascript
// App.js

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
```


---

#### React Routers

##### react-router-dom: BrowserRouter
+ A router which uses client support HTML5 pushState API
+ It routes as normal URL in browser, you can't differentiate whether it is server rendered page or client rendered page through the URL.
+ It accepts forceRefresh props to support legacy browsers which doesn't support HTML5 pushState API
+ Can use browser History
```javascript
import { BrowserRouter as Router } from 'react-router-dom';
```


##### react-router-dom: MemoryRouter
+ Maintain same url for all routes, doesn't change the url but keep them on memory
+ Can't use browser History. So you can't go back/forward using browser history

```javascript
import { MemoryRouter as Router } from 'react-router-dom';
```


##### react-router-dom: HashRouter
```javascript
import { HashRouter as Router } from 'react-router-dom';
```
+ A router which uses client side hash routing.
+ It is used to support legacy browsers which usually doesn't support HTML pushState API
+ Can use browser History


#### React-router-dom 5.1
React-router-dom is the version of React Router v5 designed for web applications.

- React Router v5 was divided into three packages:
+ react-router: common core components between dom and native versions.
+ react-router-dom: the dom version designed for browsers or web apps.
+ react-router-native: the native version designed for react-native mobile apps.


---
### :100: <i>Thanks!</i>
#### Now, don't be an stranger. Let's stay in touch!

##### :radio_button: linkedin: <a href="https://www.linkedin.com/in/leolanese/" target="_blank">@LeoLanese</a>
##### :radio_button: Twitter: <a href="https://twitter.com/LeoLanese" target="_blank">@LeoLanese</a>
##### :radio_button: Portfolio: <a href="https://www.leolanese.com" target="_blank">www.leolanese.com</a>
##### :radio_button: DEV.to: <a href="https://www.dev.to/leolanese" target="_blank">dev.to/leolanese</a>
##### :radio_button: Blog: <a href="https://www.leolanese.com/blog" target="_blank">leolanese.com/blog</a>
##### :radio_button: Questions / Suggestion / Recommendation: developer@leolanese.com
