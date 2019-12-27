import React from 'react';
import { Link } from 'react-router-dom';

class EndGame extends React.Component {
  render() {
    return (
      <div className={this.props.toggleEnd ? 'end-game' : 'end-game-none'}>
        <p className="end-game-pseudo">
          Good job <span className="finalscore">{this.props.nickname}</span> !
        </p>
        <p className="end-game-score">
          Your scored <span className="finalscore">{this.props.score}</span> points !
        </p>
        <div>
          <Link to="/">
            <button className="end-game-button">Home</button>
          </Link>
          <Link to="/Highscores">
            <button className="end-game-button">Scores</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default EndGame;
