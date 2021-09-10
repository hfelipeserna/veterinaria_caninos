import React from 'react';
import Perro from './Perro';
import data from '../data/data.json';

class ListaDeClientes extends React.Component {
  render(){
    return(
      <div>
        <h1>Listado de pacientes</h1>
        <React.Fragment>
          {
            data.map((perro) =>(
                <Perro datos={perro}/> 
            ))
          }
        </React.Fragment>
      </div>
    );
  }
}

export default ListaDeClientes;
