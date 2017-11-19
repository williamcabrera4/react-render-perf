import React from 'react';
import ReportModal from './ReportModal';
import lifeCycleDecorator from '../helpers/lifeCycleDecorator';
import PerformanceIcon from './PerformanceIcon';


let styles = {};

const defaultOptions = {
  disable: false,
  consoleReport: true,
  uiReport: true,
  popperPosition: 'left',
};


const RenderMonitor = (Component, options = {}) => {
  const settings = { ...defaultOptions, ...options };

  if (settings.disable) {
    return Component;
  }

  const componentName = Component.name;
  const { DecoratedComponent, componentReport } = lifeCycleDecorator(Component, settings);

  return class extends React.Component {

    constructor(props) {
      super(props);
      this.toggleUiReport = this.toggleUiReport.bind(this);

      this.state = {
        showUiReport: false,
      };
    }

    toggleUiReport() {
      this.setState({ showUiReport: !this.state.showUiReport })
    }

    renderWithUiReport() {
      const { showUiReport } = this.state;
      return (
        <div style={styles.container}>
          <PerformanceIcon
            style={styles.icon}
            onClick={this.toggleUiReport}
          />

          <DecoratedComponent {...this.props} />
          {showUiReport && (
            <ReportModal
              componentName={componentName}
              componentReport={componentReport}
            />
          )}
        </div>
      );
    }

    render() {
      return settings.uiReport ? this.renderWithUiReport() : <DecoratedComponent {...this.props} />;
    }
  }
};

styles = {
  container: {
    position: 'relative',
  },
  icon: {
    cursor: 'pointer',
    position: 'absolute',
    top: '5px',
    right: '5px',
    width: '20px',
    height: '20px',
  }
};

// Icon credit
// <div>Icon made from <a href="http://www.onlinewebfonts.com/icon">Icon Fonts</a> is licensed by CC BY 3.0</div>

export default RenderMonitor;