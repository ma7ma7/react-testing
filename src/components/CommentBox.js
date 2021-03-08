import React, { Component } from "react";

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
    this.setState({
      comment: "",
    });
  };

  render() {
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

export default CommentBox;
