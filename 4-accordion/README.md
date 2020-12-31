# Accordion
 A vertically stacked list of headers that can be clicked to reveal or hide content associated with them. It is one of many ways we can expose content to users in a progressive manner.

 ## Usage
 Click the `+` button in each card to expose the content hidden inside of the card. Click the `-` button to hide the content again.


#### Idea

[uidesigndaily](https://uidesigndaily.com/posts/sketch-accordion-website-day-1175)

![](./idea.png)

#### Icon Library

[React icons](https://react-icons.github.io/react-icons/)

```
npm install react-icons --save
```

```javascript
import { FaHome } from 'react-icons/fa';
const Component = () => {
  return <FaHome className='icon'></FaHome>;
};
```
