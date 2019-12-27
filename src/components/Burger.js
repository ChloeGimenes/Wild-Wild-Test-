import React from 'react';
import './Burger.css';

import { NavLink } from 'react-router-dom';

class Burger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
    this.toggleBurger = this.toggleBurger.bind(this);
  }

  toggleBurger() {
    this.setState({ toggle: !this.state.toggle });
  }

  render() {
    return (
      <div>
        <img
          onClick={this.toggleBurger}
          alt="burger menu"
          className="Burger-Button"
          src={require('../assets/img/revolver_barrel.svg')}
        />
        <div className={this.state.toggle ? 'Burger-Div' : 'Burger-Div-Hidden'}>
          <div className={this.state.toggle ? 'Burger-Div-Content' : 'Burger-Div-Content-Hidden'}>
            <NavLink activeClassName="active" className="Burger-Link" exact to="/">
              <div className="Burger-Div-Content-Link">
                <img
                  alt="bullet"
                  className="Burger-Bullet"
                  src={require('../assets/img/bullet.svg')}
                />
                <span>HOME</span>
              </div>
            </NavLink>
            <NavLink activeClassName="active" className="Burger-Link" to="/Highscores">
              <div className="Burger-Div-Content-Link">
                <img
                  alt="bullet"
                  className="Burger-Bullet"
                  src={require('../assets/img/bullet.svg')}
                />
                <span>HIGHSCORES</span>
              </div>
            </NavLink>
            <NavLink
              activeClassName="active"
              className="Burger-Link"
              to={`/Contact/${this.props.nickname === '' ? 'guest' : this.props.nickname}`}
            >
              <div className="Burger-Div-Content-Link">
                <img
                  alt="bullet"
                  className="Burger-Bullet"
                  src={require('../assets/img/bullet.svg')}
                />
                <span>CONTACT</span>
              </div>
            </NavLink>
            <NavLink activeClassName="active" className="Burger-Link" to="/Legal">
              <div className="Burger-Div-Content-Link">
                <img
                  alt="bullet"
                  className="Burger-Bullet"
                  src={require('../assets/img/bullet.svg')}
                />
                <span>LEGAL</span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Burger;
