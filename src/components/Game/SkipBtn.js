import React from 'react';

class SkipBtn extends React.Component {
  render() {
    return (
      <button className="skip-button" onClick={this.props.parentMethodSkip}>
        Skip
      </button>
    );
  }
}

export default SkipBtn;
