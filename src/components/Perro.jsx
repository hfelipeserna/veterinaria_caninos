import React from "react";

class Perro extends React.Component {
  render() {
      const data = this.props.datos;
    return (
    <React.Fragment>
        <h2>Nombre: {data.nombre}</h2>
        <ul style={{listStyle:"none"}}>
            <li key={data.edad.id}>Edad: {data.edad}</li>
            <li key={data.sexo.id}>Sexo: {data.sexo}</li>
            <li key={data.raza.id}>Raza: {data.raza}</li>
            <li key={data.tamaño.id}>Tamaño: {data.tamaño}</li>
        </ul>
    </React.Fragment>
    );
  }
}

export default Perro;
