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
      nohkan: this.props.nohkan,
      dance: this.props.dance
    };
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onClick(event) {
    const { name, value} = event.target;
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
          value={ this.state.vocal }
        />
        <BeatLine
          label="Nohkan"
          name="nohkan"
          grid={this.props.grid}
          cellType="click"
          value={ this.state.nohkan }
        />
        <BeatLine
          label="Dance"
          name="dance"
          grid={this.props.grid}
          cellType="click"
          value={ this.state.dance }
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
  beats: PropTypes.arrayOf(PropTypes.string),
  syllable_text: PropTypes.arrayOf(PropTypes.string),
  syllable_number: PropTypes.arrayOf(PropTypes.string),
  vocal: PropTypes.arrayOf(PropTypes.string),
  nohkan: PropTypes.arrayOf(PropTypes.string),
  dance: PropTypes.arrayOf(PropTypes.string)
}

BeatsEditor.defaultProps = {
  grid: 16,
  filename: 'beats.json',
  beats: [],
  syllable_text: [] ,
  syllable_number: [],
  vocal: [],
  nohkan: [],
  dance: []
}


export const Unwrapped = BeatsEditor;
export default BeatsEditor;
