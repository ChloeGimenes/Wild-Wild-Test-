import React from 'react';
import './Title.css';

export default props => {
  return (
    <div className="title">
      <h1>
        {props.theme === 'teenMovies'
          ? 'Teen Movies'
          : props.theme === 'wildWildWest'
          ? 'Western Movies'
          : props.theme === 'newSeries'
          ? 'New Series'
          : props.theme === 'oldSeries'
          ? 'Old Series'
          : props.theme === 'hardBass'
          ? 'Hard Bass'
          : props.theme === 'classics'
          ? 'Classic Movies & Series'
          : props.theme === 'leagueChampions'
          ? 'League Champions'
          : 'Wild Wild Test'}
      </h1>
    </div>
  );
};
