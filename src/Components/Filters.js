import React, { useContext, useState } from 'react';

import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import PlanetsContext from '../context/PlanetsContext';

function Filters() {
  const { setNumberFilter } = useContext(PlanetsContext);
  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);

  const values = () => ({
    filterByNumericValues: [
      {
        column: columnFilter,
        comparison: comparisonFilter,
        value: valueFilter,
      },
    ],
  });

  const sendValues = () => {
    setNumberFilter(values());
  };

  return (
    <div className="d-flex gap-3">
      <InputGroup className="mb-3">
        <Form.Select
          id="column-filter"
          className="bg-dark text-light"
          aria-label="Default select column"
          data-testid="column-filter"
          value={ columnFilter }
          onChange={ ({ target }) => setColumnFilter(target.value) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </Form.Select>
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Select
          className="bg-dark text-light"
          aria-label="Default select comparison"
          data-testid="comparison-filter"
          value={ comparisonFilter }
          onChange={ ({ target }) => setComparisonFilter(target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </Form.Select>
      </InputGroup>
      <InputGroup className="mb-3">
        <FormControl
          className="bg-dark text-light"
          placeholder="number"
          type="number"
          aria-label="value filter"
          aria-describedby="value Filter"
          data-testid="value-filter"
          value={ valueFilter }
          onChange={ ({ target }) => setValueFilter(target.value) }
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Button
          variant="warning"
          data-testid="button-filter"
          onClick={ sendValues }
        >
          Filtrar
        </Button>
      </InputGroup>
    </div>
  );
}

export default Filters;
