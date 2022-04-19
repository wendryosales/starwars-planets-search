import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import style from './Home.module.css';
import Search from './Search';
import PlanetsContext from '../context/PlanetsContext';
import Filters from './Filters';
import AppliedFilters from './AppliedFilters';

function App() {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [planets, setPlanets] = useState([]);
  const [tableHead, setTableHead] = useState([]);
  const [planetsSearch, setPlanetsSearch] = useState([]);

  const { nameContext, numberContext, appliedFilters } = useContext(PlanetsContext);
  const { filterByName } = nameContext;

  useEffect(() => {
    const getPlanets = async () => {
      const { results } = await fetch(URL).then((response) => response.json());
      setPlanets(results);
      setTableHead(Object.keys(results[0]).filter((el) => el !== 'residents'));
    };
    getPlanets();
  }, []);

  useEffect(() => {
    const { column, comparison, value } = numberContext.filterByNumericValues[0];
    let filter = [];
    if (comparison === 'maior que') {
      filter = planets.filter((element) => (
        +element[column] > +value
      ));
    }

    if (comparison === 'menor que') {
      filter = planets.filter((element) => (
        +element[column] < +value
      ));
    }

    if (comparison === 'igual a') {
      filter = planets.filter((element) => (
        +element[column] === +value
      ));
    }
    setPlanets(filter);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberContext]);

  useEffect(() => {
    const researchedPlanets = planets.filter((element) => (
      element.name.toLowerCase().indexOf(filterByName.name) >= 0
    ));
    setPlanetsSearch(researchedPlanets);
  }, [filterByName.name, planets]);

  return (
    <main className={ style.main }>
      <section className={ style.filters_container }>
        <Search />
        <Filters />
      </section>
      <section className="d-flex flex-nowrap gap-2">
        {
          appliedFilters.map((el, index) => (<AppliedFilters
            key={ `${el.filterByNumericValues.column}${index}` }
            data={ el }
          />))
        }
      </section>
      <div className={ style.table }>
        <Table striped bordered hover variant="dark" responsive>
          <thead>
            <tr>
              {tableHead.map((element) => (
                <th key={ element }>
                  { element }
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {
              planetsSearch.map((currentPlanet, index) => (
                <tr role="row" key={ index }>
                  {
                    tableHead.map((head) => (
                      <td key={ head }>{currentPlanet[head]}</td>
                    ))
                  }
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
    </main>
  );
}

export default App;
