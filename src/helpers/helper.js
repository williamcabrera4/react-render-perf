import isFunction from 'lodash/isFunction';

export const isStatelessComponent = Component => !Component.prototype.render;

export const componentLog = (Component, msg) => console.log(`${Component.name}: ${msg}`);

export const replaceLifeCycleEvent = (Component, lifecycle, eventTask) => {
  const originalEvent = Component.prototype[lifecycle];

  Component.prototype[lifecycle] = function (...parameters) {
    eventTask.apply(this, parameters);

    if (isFunction(originalEvent)) {
      originalEvent.apply(this, parameters);
    }
  };
};

export const performanceFormat = time => time && time.toFixed(2);
