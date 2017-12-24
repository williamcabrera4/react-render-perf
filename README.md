[![Build Status](https://travis-ci.org/williamcabrera4/react-render-perf.svg?branch=master)](https://travis-ci.org/williamcabrera4/react-render-perf)

<div align=center>

# React Render Perf
Monitor your component render time and check if we are making unnecessary render calls

</div>

## Installation

##### Yarn
```bash
yarn add react-render-perf
```

##### NPM
```bash
npm install --save react-render-perf
```

## Example
#### Mini demo
![https://github.com/williamcabrera4/react-render-perf/blob/master/images/demo.gif](https://github.com/williamcabrera4/react-render-perf/blob/master/images/demo.gif)

#### Console Report
![https://github.com/williamcabrera4/react-render-perf/blob/master/images/consoleReport.png](https://github.com/williamcabrera4/react-render-perf/blob/master/images/consoleReport.png)

#### UI Report
![https://github.com/williamcabrera4/react-render-perf/blob/master/images/uiReport.png](https://github.com/williamcabrera4/react-render-perf/blob/master/images/uiReport.png)


## Description
You can use the `MonitorRender` to decorate any React component and monitor the render performance. Currently we don't 
support `Stateless` components.


## Options:
 - `disable {Boolean}` - if we want to disable the monitor in case we want to push our app to production.
 - `consoleReport {Boolean}` - enable the console report.
 - `uiReport {Boolean}` - enable the UI report.
 

## Sample usage
```javascript
import { RenderMonitor } from 'react-render-perf';
import MyFirstComponent from './MyFirstComponent';
import MySecondComponent from './MySecondComponent';

// Example with default options
const MyComponentWithRenderMonitor = RenderMonitor(MyFirstComponent);

const customOptions = {
  uiReport: false,
};

const MyComponentWithConsoleMonitor = RenderMonitor(MySecondComponent);


const App = () => (
  <div>
      <MyComponentWithRenderMonitor />
      <MyComponentWithConsoleMonitor />
  </div>
);
```


## Roadmap
- [ ] Fix linter
- [ ] Add test
- [ ] Change performance icon
- [ ] Add render monitor to Stateless component
- [ ] Optimize webpack
- [ ] Add JSDocs


## Credits
Performance icon:
Icon made from <a href="http://www.onlinewebfonts.com/icon">Icon Fonts</a> is licensed by CC BY 3.0

