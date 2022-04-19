import React, { useContext } from 'react';

import { FormControl, InputGroup } from 'react-bootstrap';
import { BiSearchAlt } from 'react-icons/bi';
import PlanetsContext from '../context/PlanetsContext';

function Search() {
  const { nameContext, setNameContext } = useContext(PlanetsContext);

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
        value={ nameContext.filterByName.name }
        onChange={ ({ target }) => (
          setNameContext({ filterByName: { name: target.value } })
        ) }
        data-testid="name-filter"
      />
    </InputGroup>
  );
}

export default Search;
