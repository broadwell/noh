import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BeatLine extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: this.props.value || []
    };
  }

  onChangeCell(event, index) {
    let value = this.props.value;
    value[index] = event.target.value;
    this.setState({ value });
  }

  render() {
    const cells = Array(this.props.grid).fill(0).map((v, i) => {
      let cellContent = '';
      if (this.props.cellType === 'text') {
        const value = (this.props.value && i < this.props.value.length) ? this.props.value[i] : '';
        cellContent = (
          <input
            maxLength={ 2 }
            onChange={ (event) => this.onChangeCell(event, i) }
            value={ value }
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
  value: PropTypes.array,
  label: PropTypes.string,
  grid: PropTypes.number,
  cellType: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
}

export const Unwrapped = BeatLine;
export default BeatLine;
