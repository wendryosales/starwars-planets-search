import React from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

const initialContext = {};

function Provider({ children }) {
  return (
    <PlanetsContext.Provider value={ initialContext }>
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
