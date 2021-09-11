import React from "react";
import Perro from "./Perro";
import data from "../data/data.json";
import { v4 as uuidv4 } from "uuid";

//Aquí se genera un id único con la librería uuid
const dataParse = data.map((data) => ({ ...data, id: uuidv4() }));

class ListaDeClientes extends React.Component {

  //Se usa mockapi como un servidor en la nube para una API de pruebas
  /*state = { perrera: [] };
  componentDidMount() {
    fetch("https://613c0c9b270b96001798b01b.mockapi.io/api/perros")
      .then((response) => response.json())
      .then((data) => {
        this.setState({perrera:data});
      });
  }

  render() {
    return (
      <div>
        <h1>Listado de pacientes</h1>
        <React.Fragment>
          {this.state.perrera.map((perro) => (
            <Perro key={perro.id} datos={perro} />
          ))}
        </React.Fragment>
      </div>
    );
  }*/

  render() {
    return (
      <div>
        <h1>Listado de pacientes</h1>
        <React.Fragment>
          {dataParse.map((perro) => (
            <Perro key={perro.id} datos={perro} />
          ))}
        </React.Fragment>
      </div>
    );
  }
}

export default ListaDeClientes;
