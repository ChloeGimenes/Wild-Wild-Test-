import React from 'react';

class Answer extends React.Component {
  pressEnter(event) {
    if (event.key === 'Enter') {
      this.props.onKeyPressed();
    }
  }

  render() {
    return (
      <div>
        <label>
          <input
            id="input-answer"
            className="input-answer"
            type="text"
            name="answer"
            value={this.props.parentAnswer}
            onChange={this.props.parentMethodAnswer}
            placeholder="Write your answer here"
            onKeyDown={event => this.pressEnter(event)}
            tabIndex="0"
          />
        </label>
      </div>
    );
  }
}

export default Answer;
