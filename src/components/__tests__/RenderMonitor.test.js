import React from 'react';
import RenderMonitor from './../RenderMonitor';
import renderer from 'react-test-renderer';


it('renders without crashing', () => {
  const HelloWorldComponent = () => <span>Hello World</span>;
  const DecoratedComponent = RenderMonitor(HelloWorldComponent);
  const renderedComponent = renderer.create(<DecoratedComponent />);

  const tree = renderedComponent.toJSON();
  expect(tree).toMatchSnapshot();
});