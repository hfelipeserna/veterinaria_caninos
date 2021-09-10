import React from 'react';
import Perro from './Perro';
import data from '../data/data.json';

class ListaDeClientes extends React.Component {
  render(){
    return(
      <div>
        <h1>Listado de pacientes</h1>
        <ul style={{listStyle:"none"}}>
          {
            data.map((perro, index) =>(
              <React.Fragment>
                <Perro id={index} datos={perro}/>
              </React.Fragment>  
            ))
          }
        </ul>
      </div>
    );
  }
}

export default ListaDeClientes;
