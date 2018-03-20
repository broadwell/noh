import React, { Component } from "react";
import PropTypes from "prop-types";

class CellNohkan extends Component {
  render() {
    const cellNohkanClass = this.props.text.length > 0 ? "cell--nohkan" : "";

    return (
      <div className={`cell cell--${this.props.length} ${cellNohkanClass}`}>
        <span data-tooltip={this.props.text} className="truncate">
          {this.props.text}
        </span>
      </div>
    );
  }
}

CellNohkan.propTypes = {
  text: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired
};

export default CellNohkan;
