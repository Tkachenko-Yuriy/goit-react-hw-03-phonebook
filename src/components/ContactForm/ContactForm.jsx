import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import {
  FormLabel,
  FormInput,
  FormButton,
} from 'components/ContactForm/ContactForm.styled';

export default class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleFormSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const newContact = { id: nanoid(), name, number };

    this.props.onAddContact(newContact);

    this.setState({ name: '', number: '' });
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <FormLabel>
          Name
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={this.handleInputChange}
            required
          />
        </FormLabel>

        <FormLabel>
          Number
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={this.handleInputChange}
            required
          />
        </FormLabel>
        <FormButton type="submit">Add contact</FormButton>
      </form>
    );
  }
}
