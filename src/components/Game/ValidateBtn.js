import React from 'react';

class ValidateBtn extends React.Component {
  pressEnter(event) {
    if (event.key === 'Enter') {
      this.props.onKeyPressed();
    }
  }
  render() {
    return (
      <button
        onClick={this.props.parentMethodValidate}
        className="validate"
        onKeyDown={event => this.pressEnter(event)}
        tabIndex="0"
      >
        OK
      </button>
    );
  }
}

export default ValidateBtn;
