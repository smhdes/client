import React, { Component } from "react";
import axios from "axios";
import "./FeedBack.css";
import Aux from "../../Hoc/Auxiliary/Auxiliary";
class FeedBack extends Component {
 
state = {
      issue: "",
      comment: "",
    };

  handleIssue = (event) => {
    if (event) {
      this.setState({
        issue: event.target.value,
      });
    } else {
      return;
    }
  };

  handleComment = (event) => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = (e) => {
    const user = {
      issue: this.state.issue,
      comment: this.state.comment,
    };
    axios
      .post("http://localhost:4000/feedbacks/save", { user })
      .then(function(response) {
        return response;
      });
   
    e.preventDefault();
  };
  render() {
    return (
      <Aux>
        <form onSubmit={this.handleSubmit}>
          <label>
            Issue:
            <input
              type="text"
              value={this.state.issue}
              name="name"
              onChange={this.handleIssue}
            />
          </label>
          <label>
            Comment:
            <textarea
              type="text"
              value={this.state.comment}
              name="name"
              onChange={this.handleComment}
            />
          </label>
          <input type="submit" value="Submit" />
          <p>{this.state.issue}</p>
          <p>{this.state.comment}</p>
        </form>
      </Aux>
    );
  }
}

export default FeedBack;
