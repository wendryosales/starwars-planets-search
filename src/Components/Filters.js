import React, { useContext, useEffect, useState } from 'react';

import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import PlanetsContext from '../context/PlanetsContext';

function Filters() {
  const { setNumberContext,
    setAppliedFilters,
    appliedFilters } = useContext(PlanetsContext);
  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);
  const [columnOriginal, setColumnOriginal] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const values = () => ({
    filterByNumericValues: [
      {
        column: columnFilter,
        comparison: comparisonFilter,
        value: valueFilter,
      },
    ],
  });

  useEffect(() => {
    appliedFilters.forEach(({ filterByNumericValues }) => {
      setColumnOriginal((prevState) => (
        prevState.filter((el) => (
          el !== filterByNumericValues[0].column
        ))
      ));
    });
  }, [appliedFilters]);

  const sendValues = () => {
    const value = values();
    setNumberContext(value);
    setAppliedFilters((prevState) => [...prevState, value]);
  };

  return (
    <div className="d-flex">
      <InputGroup className="mb-3 gap-1">
        <Form.Select
          id="column-filter"
          className="bg-dark text-light"
          aria-label="Default select column"
          data-testid="column-filter"
          value={ columnFilter }
          onChange={ ({ target }) => setColumnFilter(target.value) }
        >
          {
            columnOriginal.map((el) => (
              <option key={ el } value={ el }>{el}</option>
            ))
          }
        </Form.Select>
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
