import React from "react";

class Perro extends React.Component {
  render() {
      const data = this.props.datos;
      const key = this.props.key;
    return (
    <React.Fragment>
        <h2>Nombre: {data.nombre}</h2>
        <ul style={{listStyle:"none"}}>
            <li key={key+"-"+1}>Edad: {data.edad}</li>
            <li key={key+"-"+2}>Sexo: {data.sexo}</li>
            <li key={key+"-"+3}>Raza: {data.raza}</li>
            <li key={key+"-"+4}>Tamaño: {data.tamaño}</li>
        </ul>
    </React.Fragment>
    );
  }
}

export default Perro;
