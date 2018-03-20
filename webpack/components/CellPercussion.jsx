import React, { Component } from "react";
import PropTypes from "prop-types";

class CellPercussion extends Component {
  render() {
    const cellPercussionClass =
      this.props.text.length > 0 ? "cell--percussion" : "";

    return (
      <div className={`cell cell--${this.props.length} ${cellPercussionClass}`}>
        <span className="truncate">{this.props.text}</span>
      </div>
    );
  }
}

CellPercussion.propTypes = {
  text: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired
};

export default CellPercussion;
