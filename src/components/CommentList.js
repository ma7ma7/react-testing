import React, { Component } from "react";
import { connect } from "react-redux";

class CommentList extends Component {
  handleComments() {
    return this.props.comments.map((comment) => {
      return <li key={comment}>{comment}</li>;
    });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>List of Comments</h1>
        <ul>{this.handleComments()}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};

export default connect(mapStateToProps)(CommentList);
