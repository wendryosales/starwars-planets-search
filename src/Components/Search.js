import React, { useContext } from 'react';

import { FormControl, InputGroup } from 'react-bootstrap';
import { BiSearchAlt } from 'react-icons/bi';
import PlanetsContext from '../context/PlanetsContext';

function Search() {
  const { nameKey, setNameKey } = useContext(PlanetsContext);

  return (
    <InputGroup className="mb-3">
      <InputGroup.Text
        className="bg-dark text-light"
        id="basic-addon1"
      >
        <BiSearchAlt />
      </InputGroup.Text>
      <FormControl
        className="bg-dark text-light"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="basic-addon1"
        value={ nameKey.filterByName.name }
        onChange={ ({ target }) => (
          setNameKey({ filterByName: { name: target.value } })
        ) }
        data-testid="name-filter"
      />
    </InputGroup>
  );
}

export default Search;
