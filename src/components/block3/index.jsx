import React from "react";

import "./styles.scss";

export default class BlockThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="block">
        <h2> $ {this.props.title} / hr </h2>
        <div> Median Hourly earnings </div>
        <div> Nation: $ {this.props.label} / hr </div>
      </div>
    );
  }
}

