import React from "react";

import "./styles.scss";

export default class BlockTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="block">
          <h2> {this.props.title} </h2> 
          <div> % Change({this.props.start} - {this.props.end}) </div>{" "}
          <div> Nation: {this.props.label > 0 ? '+' : '-'} {this.props.label} % </div>{" "}
        </div>
    );
  }
}
