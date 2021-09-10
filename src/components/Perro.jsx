import React from "react";

class Perro extends React.Component {
  render() {
      const data = this.props.datos;
      const keys = this.props.keys;
    return (
    <React.Fragment>
        <h2>Nombre: {data.nombre}</h2>
        <ul style={{listStyle:"none"}}>
            <li>Edad: {data.edad}</li>
            <li>Sexo: {data.sexo}</li>
            <li>Raza: {data.raza}</li>
            <li>Tamaño: {data.tamaño}</li>
        </ul>
    </React.Fragment>
    );
  }
}

export default Perro;
