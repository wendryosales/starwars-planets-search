import React from 'react';
import PropTypes from 'prop-types';

import { InputGroup } from 'react-bootstrap';
import { AiOutlineClose } from 'react-icons/ai';

function AppliedFilters({ data }) {
  const { column, comparison, value } = data.filterByNumericValues[0];

  return (
    <InputGroup className="mb-3 d-flex flex-nowrap justify-content-center">
      <InputGroup.Text
        className="bg-dark text-light"
      >
        {
          `${column} ${comparison} ${value}`
        }
        <AiOutlineClose className="bg-danger ms-2" />
      </InputGroup.Text>
    </InputGroup>
  );
}

AppliedFilters.propTypes = {
  data: PropTypes.shape({
    filterByNumericValues: PropTypes.arrayOf(PropTypes.shape({
      column: PropTypes.string,
      comparison: PropTypes.string,
      value: PropTypes.number,
    })),
  }),
};

AppliedFilters.defaultProps = {
  data: {},
};
export default AppliedFilters;
