import React from 'react';
import './Contact.css';
import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';

class Contact extends React.Component {
  render() {
    return (
      <div className="container-form">
        <div className="contactform">
          <img src={logo} alt="logo" />
          <p>
            Hi {this.props.match.params.nickname ? this.props.match.params.nickname : 'guest'},
            contact us !
          </p>
          <input type="email" placeholder="write your email" />
          <textarea className="textarea" type="textarea" placeholder="Tell us a joke"></textarea>
          <div className="buttons-container">
            <Link to="/">
              <button className="button-back">BACK</button>
            </Link>
            <button className="button-send">SEND !</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
