import React, { Component } from 'react';
import { StyleBackdrop, StyleModal } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = evt => {
    if (evt.code === `Escape`) {
      this.props.onCloseModal();
    }
  };

  //Метод для очищення після розмонтування

  onBackdropClick = evt => {
    if (evt.target.id === 'backDrop') {
      this.props.onCloseModal();
    }
    return;
  };
  render() {
    return (
      <StyleBackdrop id="backDrop" onClick={this.onBackdropClick}>
        <StyleModal>{this.props.children}</StyleModal>
      </StyleBackdrop>
    );
  }
}
