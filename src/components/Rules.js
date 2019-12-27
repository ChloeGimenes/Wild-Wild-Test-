import React from 'react';
import './Rules.css';

const Rules = props => {
  if (props.modal === true) {
    return (
      <div className="Rule">
        <div className="Rule-box">
          <div className="Rule-Title">RULES</div>
          <div className="Rule-text">
            <p className="Rule-text-phrase">
              Welcome to the Wild Wild Test !<br />
              Guess right or die as a loser !
            </p>
            <br />
            <span class="yellow"> &#9733;</span> <br />
            Enter a nickname
            <br />
            <span class="yellow"> &#9733;</span> <br />
            Choose a theme
            <br />
            <span class="yellow"> &#9733;</span> <br />
            30 seconds to guess
            <br />
            <span class="yellow"> &#9733;</span> <br />
            10 turns
            <br />
            <span class="yellow"> &#9733;</span>
            <br />
            Your score depends on your speed
            <br />
            <span class="yellow"> &#9733;</span>
            <br />
            Good luck ! <br />
          </div>
          <div>
            <button onClick={props.parentMethod2} className="Rule-button">
              OK
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="divnull"></div>;
  }
};

export default Rules;
