import React, { Component } from 'react';

import ContactItem from '../ContactItem';
import PropTypes from 'prop-types';

import { Contactlist } from 'components/ContactList/ContactList.styled';

export default class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
    handleClickDelete: PropTypes.func.isRequired,
  };

  render() {
    const { contacts, handleClickDelete } = this.props;
    return (
      <>
        {contacts.length > 0 && (
          <Contactlist>
            {contacts.map(({ id, name, number }) => (
              <ContactItem
                key={id}
                name={name}
                number={number}
                handleClickDelete={() => {
                  handleClickDelete(id);
                }}
              />
            ))}
          </Contactlist>
        )}
      </>
    );
  }
}
