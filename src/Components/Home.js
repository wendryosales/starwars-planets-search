import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import style from './Home.module.css';
import Search from './Search';
import PlanetsContext from '../context/PlanetsContext';

function App() {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [planets, setPlanets] = useState([]);
  const [tableHead, setTableHead] = useState([]);
  const [planetsSearch, setPlanetsSearch] = useState([]);

  const { nameKey } = useContext(PlanetsContext);
  const { filterByName } = nameKey;

  useEffect(() => {
    const getPlanets = async () => {
      const { results } = await fetch(URL).then((response) => response.json());
      setPlanets(results);
      setTableHead(Object.keys(results[0]).filter((el) => el !== 'residents'));
    };
    getPlanets();
  }, []);

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
      </section>
      <div className={ style.table }>
        <Table striped bordered hover variant="dark" responsive>
          <thead>
            <tr>
              {/* <th>#</th> */}
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

                <tr key={ index }>
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
