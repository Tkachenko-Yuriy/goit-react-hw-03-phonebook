import React, { Component } from 'react';

import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';

import { PhonebookComponent } from 'components/Phonebook/Phonebook.styled';

export default class Phonebook extends Component {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  //   name: '',
  //   number: '',
  // };
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  onAddContact = contact => {
    const { contacts } = this.state;

    const searchUnique = contact.name.toLowerCase();
    if (contacts.find(({ name }) => name.toLowerCase() === searchUnique)) {
      alert(`${contact.name} is already in contacts`);

      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  handleClickDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { contacts, filter } = this.state;

    let filterContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase().trim())
    );

    return (
      <PhonebookComponent>
        <h1>Phonebook</h1>

        <ContactForm onAddContact={this.onAddContact} />

        <h2>Contacts</h2>
        <Filter handleFilter={this.handleFilter} value={filter} />
        <ContactList
          contacts={filterContacts}
          handleClickDelete={this.handleClickDelete}
        />
      </PhonebookComponent>
    );
  }
}
