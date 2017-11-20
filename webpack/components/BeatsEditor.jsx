import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FileDownload from 'js-file-download';
import BeatLine from './BeatLine';

class BeatsEditor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filename: this.props.filename,
      beats: this.props.beats,
      syllable_text: this.props.syllable_text,
      syllable_number: this.props.syllable_number,
      vocal: this.props.vocal,
      nokan: this.props.nokan,
      dance: this.props.dance
    };
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onClick(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
    FileDownload(JSON.stringify(this.state), this.state.filename);
  }

  onChange(event) {
    this.setState({
      filename: event.target.value
    })
  }

  render() {
    return (
      <div>
        <BeatLine
          label="Beats"
          name="beats"
          grid={this.props.grid}
          cellType="text"
          value={ this.state.beats }
        />
        <BeatLine
          label="Syllable text"
          name="syllable_text"
          grid={this.props.grid}
          cellType="text"
          value={ this.state.syllable_text }
        />
        <BeatLine
          label="Syllable number"
          name="syllable_number"
          grid={this.props.grid}
          cellType="text"
          value={ this.state.syllable_number }
        />
        <BeatLine
          label="Vocal range"
          name="vocal"
          grid={this.props.grid}
          cellType="click"
        />
        <BeatLine
          label="Nokan"
          name="nokan"
          grid={this.props.grid}
          cellType="click"
        />
        <BeatLine
          label="Dance"
          name="dance"
          grid={this.props.grid}
          cellType="click"
        />
        <input type="button" value="Download" onClick={ this.onClick }/>
        <span>as</span>
        <input
          name="filename"
          type="text"
          value={ this.state.filename }
          onChange={ this.onChange }
        />
      </div>
    );
  }
}

BeatsEditor.propTypes = {
  grid: PropTypes.number,
  filename: PropTypes.string,
  beats: PropTypes.array,
  syllable_text: PropTypes.array,
  syllable_number: PropTypes.array,
  vocal: PropTypes.array,
  nokan: PropTypes.array,
  dance: PropTypes.array
}

BeatsEditor.defaultProps = {
  grid: 16,
  filename: 'beats.json',
  beats: [],
  syllable_text: [] ,
  syllable_number: [],
  vocal: [],
  nokan: [],
  dance: []
}


export const Unwrapped = BeatsEditor;
export default BeatsEditor;
