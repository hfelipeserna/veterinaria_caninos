import React from "react";

class Perro extends React.Component {
  render() {
      const data = this.props.datos;
      const keys = this.props.keys;
    return (
    <React.Fragment>
        <h2 key={keys+"$a"}>Nombre: {data.nombre}</h2>
        <ul style={{listStyle:"none"}}>
            <li key={keys+"$b"}>Edad: {data.edad}</li>
            <li key={keys+"$c"}>Sexo: {data.sexo}</li>
            <li key={keys+"$d"}>Raza: {data.raza}</li>
            <li key={keys+"$e"}>Tamaño: {data.tamaño}</li>
        </ul>
    </React.Fragment>
    );
  }
}

export default Perro;
