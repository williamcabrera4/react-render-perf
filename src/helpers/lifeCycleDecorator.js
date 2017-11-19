import isEqual from 'lodash/isEqual';
import {
  componentLog,
  isStatelessComponent,
  replaceLifeCycleEvent,
  performanceFormat,
} from './helper';


const lifeCycleDecorator = (Component, settings) => {
  if (isStatelessComponent(Component)) {
    componentLog(Component, 'Sorry, we don\'t support Stateless component at this moment');
    return { DecoratedComponent: Component, componentReport: {} };
  }

  let componentMountStartTime;
  let componentUpdateStartTime;

  const componentReport = {
    mountRenderTime: 0,
    updateRenderTime: 0,
    unnecessaryRenders: 0,
    unnecessaryRendersTotalTime: 0,
  };

  replaceLifeCycleEvent(Component, 'componentWillMount', function () {
    componentMountStartTime = performance.now();
  });

  replaceLifeCycleEvent(Component, 'componentDidMount', function () {
    componentReport.mountRenderTime = performance.now() - componentMountStartTime;

    if (settings.consoleReport) {
      componentLog(Component, `mount and first render time ${performanceFormat(componentReport.mountRenderTime)}ms`);
    }
  });

  replaceLifeCycleEvent(Component, 'componentWillUpdate', function () {
    componentUpdateStartTime = performance.now();
  });

  replaceLifeCycleEvent(Component, 'componentDidUpdate', function (prevProps, prevState) {
    componentReport.updateRenderTime = performance.now() - componentUpdateStartTime;

    const withoutPropsChanges = isEqual(this.props, prevProps);
    const withoutStateChanges = isEqual(this.state, prevState);

    if (settings.consoleReport) {
      componentLog(Component, `update time ${performanceFormat(componentReport.updateRenderTime)}ms`);
    }

    if (withoutPropsChanges && withoutStateChanges) {
      componentReport.unnecessaryRenders += 1;
      componentReport.unnecessaryRendersTotalTime += componentReport.updateRenderTime;

      if (settings.consoleReport) {
        componentLog(Component, 'render not required, same props and state');
        componentLog(Component, `unnecessary renders ${componentReport.unnecessaryRenders}`);

        const unnecessaryRendersTotalTime = performanceFormat(componentReport.unnecessaryRendersTotalTime);
        componentLog(Component, `unnecessary renders total time ${unnecessaryRendersTotalTime}ms`);
      }
    }
  });

  return { DecoratedComponent: Component, componentReport };
};

export default lifeCycleDecorator;
