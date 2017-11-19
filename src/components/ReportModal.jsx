import React from 'react';
import { performanceFormat } from "../helpers/helper";


let styles = {};

class ReportModal extends React.Component {

  render() {
    const { componentName, componentReport } = this.props;
    return (
      <div style={styles.modal}>
        <span style={styles.title}>{componentName}</span>
        <span style={styles.monitorInfo}>
          Mount render time: {performanceFormat(componentReport.mountRenderTime)}ms
        </span>
        <span style={styles.monitorInfo}>
          Update render time: {performanceFormat(componentReport.updateRenderTime)}ms
        </span>
        <span style={styles.monitorInfo}>
          Unnecessary renders: {componentReport.unnecessaryRenders}
        </span>
        <span style={styles.monitorInfo}>
          Unnecessary renders total time: {performanceFormat(componentReport.unnecessaryRendersTotalTime)}ms
        </span>

      </div>
    );
  }
}

// ReportModal.propTypes = {
//   componentName: React.PropTypes.string,
//   componentReport: React.PropTypes.shape({
//     mountRenderTime: React.PropTypes.number,
//     updateRenderTime: React.PropTypes.number,
//     unnecessaryRenders: React.PropTypes.number,
//     unnecessaryRendersTotalTime: React.PropTypes.number,
//   }),
// };

styles = {
  modal: {
    backgroundColor: 'white',
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    border: 'solid 1px #ccc',
    padding: '10px',
    zIndex: 500,
  },
  title: {
    fontSize: '16px',
    fontWeight: 700,
    display: 'block',
  },
  monitorInfo: {
    fontSize: '14px',
    display: 'block',
  },
};

export default ReportModal;
