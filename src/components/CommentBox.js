import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions/index";

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  handelSubmit = (event) => {
    event.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({
      comment: "",
    });
  };

  render() {
    console.log(actions);
    return (
      <form onSubmit={this.handelSubmit}>
        <h4>Enter Comment</h4>
        <textarea onChange={this.handleChange} value={this.state.comment} />
        <br />
        <button>Add</button>
      </form>
    );
  }
}

export default connect(null, actions)(CommentBox);
