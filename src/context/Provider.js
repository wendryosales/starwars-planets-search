import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function Provider({ children }) {
  const [nameKey, setNameKey] = useState({ filterByName: {
    name: '',
  } });

  const [numberFilter, setNumberFilter] = useState({ filterByNumericValues: [
    {
      column: 'population',
      comparison: 'maior que',
      value: '0',
    },
  ] });

  const contextValue = {
    nameKey,
    setNameKey,
    numberFilter,
    setNumberFilter,
  };
  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
