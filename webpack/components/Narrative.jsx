import React from "react";
import PropTypes from "prop-types";
import TabbedNarrative from "./TabbedNarrative";
import NonTabbedNarrative from "./NonTabbedNarrative";

class Narrative extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      narrative: props.narrative,
      tabbed: this.checkIfTabbed()
    };
  }

  componentWillMount() {
    this.checkIfTabbed(this.state.narrative, this.state.tabIndicator);
  }

  checkIfTabbed() {
    const re = /tabbed-narrative/;
    if (re.exec(this.props.narrative) != null) {
      return true;
    }
    return false;
  }

  render() {
    let narrative = null;
    if (this.state.tabbed) {
      narrative = <TabbedNarrative narrative={this.state.narrative} />;
    } else {
      narrative = <NonTabbedNarrative narrative={this.state.narrative} />;
    }
    return <div className="narrative">{narrative}</div>;
  }
}

Narrative.propTypes = {
  narrative: PropTypes.string
};

Narrative.defaultProps = {
  narrative: ""
};

export default Narrative;