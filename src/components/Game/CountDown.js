import React from 'react';
import cry from '../../assets/img/no.gif';

class CountDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.go = this.go.bind(this);
  }

  go() {
    this.props.onClick();
  }

  render() {
    return (
      <div onClick={this.go} className={this.props.className} id="countdown-number">
        {this.props.number === 'cry' ? (
          <img src={cry} alt="cry" className="img-cry" />
        ) : (
          <span>{this.props.number}</span>
        )}
      </div>
    );
  }
}

export default CountDown;
