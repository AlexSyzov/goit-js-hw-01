import React, { Component } from "react";
import { Input, Button, Form } from "./styled";

export default class Searchbox extends Component {
  state = {
    query: "",
  };

  handleInputChange = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  handleFormSubmission = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);

    this.setState({ query: "" });
  };

  render() {
    return (
      <Form onSubmit={this.handleFormSubmission}>
        <Input
          type="text"
          value={this.state.query}
          onChange={this.handleInputChange}
        ></Input>
        <Button type="submit">Search</Button>
      </Form>
    );
  }
}
