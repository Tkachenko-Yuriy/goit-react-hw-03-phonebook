import React, { Component } from 'react';
import { FilterInput, FilterLabel } from 'components/Filter/Filter.styled';

import PropTypes from 'prop-types';

export default class Filter extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    handleFilter: PropTypes.func.isRequired,
  };

  render() {
    const { value, handleFilter } = this.props;
    return (
      <div>
        <FilterLabel>
          Find contacts by name
          <FilterInput
            onChange={handleFilter}
            value={value}
            type="text"
            name="filter"
            title="Find contacts by name"
          />
        </FilterLabel>
      </div>
    );
  }
}
