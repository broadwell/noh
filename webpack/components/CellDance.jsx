import React, { Component } from "react";
import PropTypes from "prop-types";

class CellDance extends Component {
  render() {
    const cellDanceClass = this.props.text.length > 0 ? "cell--dance" : "";

    return (
      <div className={`cell cell--${this.props.length} ${cellDanceClass}`}>
        <span data-tooltip={this.props.text} className="truncate">
          {this.props.text}
        </span>
      </div>
    );
  }
}

CellDance.propTypes = {
  text: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired
};

export default CellDance;
