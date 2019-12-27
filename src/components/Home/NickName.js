import React from 'react';
import './NickName.css';

const NickName = props => {
  return (
    <div>
      <form>
        <input
          placeholder="Write a name"
          type="text"
          id="name"
          onChange={event => props.handleChange(event)}
          className="NickName"
          value={props.nickname}
        />
      </form>
    </div>
  );
};

export default NickName;
