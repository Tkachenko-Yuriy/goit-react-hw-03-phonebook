import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  ContactlistItem,
  ContactlistButton,
} from 'components/ContactItem/ContactItem.styled';

export default class ContactItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    handleClickDelete: PropTypes.func.isRequired,
  };

  render() {
    const { name, number, handleClickDelete } = this.props;

    return (
      <ContactlistItem>
        <p>
          <span>{name}</span>: {number}
        </p>
        <ContactlistButton onClick={handleClickDelete} type="button">
          Delete
        </ContactlistButton>
      </ContactlistItem>
    );
  }
}
