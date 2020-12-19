import React, { Component } from "react";
import { Overlay, ModalBox } from "./styled";
import PropTypes from "prop-types";

export default class Modal extends Component {
  static propTypes = {
    onModalClosing: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleEscapePressing);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleEscapePressing);
  }

  handleEscapePressing = (e) => {
    if (e.code === "Escape") {
      this.props.onModalClosing();
    }
  };

  handleClickingOnOverlay = (e) => {
    if (e.target.nodeName !== "IMG") {
      this.props.onModalClosing();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleClickingOnOverlay}>
        <ModalBox>{this.props.children}</ModalBox>
      </Overlay>
    );
  }
}
