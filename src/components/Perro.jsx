import React from "react";

class Perro extends React.Component {
  render() {
      const data = this.props.datos;
      const id = this.props.index;
    return (
    <React.Fragment>
        <h2>Nombre: {data.nombre}</h2>
        <ul style={{listStyle:"none"}}>
            <li key={id.concat("a")}>Edad: {data.edad}</li>
            <li key={id.concat("b")}>Sexo: {data.sexo}</li>
            <li key={id.concat("c")}>Raza: {data.raza}</li>
            <li key={id.concat("d")}>Tamaño: {data.tamaño}</li>
        </ul>
    </React.Fragment>
    );
  }
}

export default Perro;
