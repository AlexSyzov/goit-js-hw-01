import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Header,
  SearchForm,
  SearchButton,
  SearchButtonLabel,
  SearchFormInput,
} from "./styled";

export default class Searchbar extends Component {
  state = {
    inputValue: "",
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleFormSubmission = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.inputValue);
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleFormSubmission}>
          <SearchButton type="submit">
            <SearchButtonLabel>Search</SearchButtonLabel>
          </SearchButton>

          <SearchFormInput
            type="text"
            value={this.state.inputValue}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
          />
        </SearchForm>
      </Header>
    );
  }
}
