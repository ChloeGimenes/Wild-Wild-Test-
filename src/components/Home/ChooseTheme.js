import React, { Component } from 'react';
import Select from 'react-select';
import './ChooseTheme.css';

const options = [
  { value: 'classics', label: 'Classics Movies & Series' },
  { value: 'wildWildWest', label: 'Wild Wild West' },
  { value: 'teenMovies', label: 'Teen Movies' },
  { value: 'newSeries', label: 'New Series' },
  { value: 'oldSeries', label: 'Old Series' },
  { value: 'leagueChampions', label: 'League Champions' },
  { value: 'hardBass', label: 'Cука блядь хардбасс' }
];

class ChooseTheme extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.parentMethodChoosePlaylist(event.value);
    if (event.value === 'hardBass') {
      document.getElementById('chooseTheme').style.animation =
        'hardbass .33s infinite ease-in-out running';
    } else {
      document.getElementById('chooseTheme').style.animation = 'hardbass .3s infinite paused';
    }
  }

  render() {
    return (
      <Select
        onChange={this.handleChange}
        placeholder="Pick a theme !"
        defaultValue={this.props.value}
        id="chooseTheme"
        className="chooseTheme"
        options={options}
        label="Single select"
        theme={theme => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: '#62F6B4',
            primary: 'black'
          }
        })}
      />
    );
  }
}

export default ChooseTheme;
