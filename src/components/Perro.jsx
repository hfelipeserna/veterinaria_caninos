import React from "react";

class Perro extends React.Component {
  render() {
      const data = this.props.datos;
    return (
    <React.Fragment>
        <h2>Nombre: {data.nombre}</h2>
        <ul key={a} style={{listStyle:"none"}}>
            <li key={b}>Edad: {data.edad}</li>
            <li key={c}>Sexo: {data.sexo}</li>
            <li key={d}>Raza: {data.raza}</li>
            <li key={e}>Tamaño: {data.tamaño}</li>
        </ul>
    </React.Fragment>
    );
  }
}

export default Perro;
