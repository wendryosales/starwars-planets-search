import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function Provider({ children }) {
  const [nameContext, setNameContext] = useState({ filterByName: {
    name: '',
  } });

  const [numberContext, setNumberContext] = useState({ filterByNumericValues: [
    {
      column: 'population',
      comparison: 'maior que',
      value: '0',
    },
  ] });

  const [appliedFilters, setAppliedFilters] = useState([]);

  const contextValue = {
    nameContext,
    setNameContext,
    numberContext,
    setNumberContext,
    appliedFilters,
    setAppliedFilters,
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
