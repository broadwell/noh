/* eslint-disable react/no-array-index-key */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BeatLine extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: this.props.value
    };
  }

  onChangeCell(event, index) {
    const { value } = this.state;
    value[index] = event.target.value;
    this.setState({ value });
  }

  render() {
    const cells = Array(this.props.grid).fill(0).map((v, i) => {
      let cellContent = '';
      if (this.props.cellType === 'text') {
        cellContent = (
          <input
            maxLength={ 2 }
            onChange={ (event) => this.onChangeCell(event, i) }
            value={ this.state.value[i] }
          />
        );
      } else {
        cellContent = <span />;
      }
      return (
        <div className="cell" key={ i }>
          { cellContent }
        </div>
      );
    });
    return (
      <div className="beat-line">
        <div className="label">{ this.props.label }</div>
        <div className="cell-container">
          { cells }
        </div>
      </div>
    );
  }
}

BeatLine.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string),
  label: PropTypes.string.isRequired,
  grid: PropTypes.number,
  cellType: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
}

BeatLine.defaultProps = {
  grid: 16,
  value: [],
  cellType: 'text'
}

export const Unwrapped = BeatLine;
export default BeatLine;
