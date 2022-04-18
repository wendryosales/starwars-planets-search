import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import style from './Home.module.css';

function App() {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [planets, setPlanets] = useState([{ name: 'pandora' }]);
  const [tableHead, setTableHead] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const { results } = await fetch(URL).then((response) => response.json());
      setPlanets(results);
      setTableHead(Object.keys(results[0]).filter((el) => el !== 'residents'));
    };
    getPlanets();
  }, []);

  return (
    <main className={ style.main }>
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
              planets.map((currentPlanet, index) => (

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
