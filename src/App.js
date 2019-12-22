import React, {Component} from 'react';
import Header from './components/Header.js'
import './bootstrap.min.css';
import Form from './components/Form.js'
import AdminiCitas from './components/AdminiCitas.js'




class App extends Component {
  state={
    cita:[]//arreglo que almacena todas las citas creadas
  }

  componentDidMount(){ //ciclo de vida que ejecuta el codigo despues del renderizado
    const citasLS = localStorage.getItem('citas')//obtiene de local storage lo que esta almacenado con el nombre "citas"
    if (citasLS){ //pregunta si la variable "citasLS" tiene almacenado algo, si lo tiene lo agrega al state
      this.setState({
        cita:JSON.parse(citasLS) //local storage solo almacena datos de tipo string, por lo que se debe cambiar para poder ser usado
      })
    }
  }
  componentDidUpdate(){// ciclo de vida que ejecuta el codigo cuando ocurre algun cambio en el componente
    localStorage.setItem('citas', JSON.stringify(this.state.cita))// toma lo que esta en el state, lo convierte en string y lo guarda en el local storage
  }
  crearNuevaCita = datos =>{//funcion que añade las nuevas citas al state de app.js
    this.setState({
      cita:[...this.state.cita, datos] //al state agrega lo que ya estaba en state y la nueva cita creada
    })
  }
  eliminarCita = id =>{// funcion que permite eliminar una cita del state con el id suministrado
    let copiaState = [...this.state.cita]// una copia del actual state
    const citasNoEliminadas = copiaState.filter(cita => cita.id!==id)// en esta variable se almacenan todas las citas cuyo id sea distinto al de entrada, 
    this.setState({
      cita:[...citasNoEliminadas]// se almacena el array creado por la funcion filter en el state
    })
  }
  render() {
    return (
      <div className="container">
        <Header 
          titulo="Administrador Pacientes Veterinaria"
        />
        <Form 
          crearNuevaCita={this.crearNuevaCita}
        />        
        <AdminiCitas
        citas={this.state.cita}
        eliminarCita={this.eliminarCita}
        />
      </div>
    );
  }
}

export default App;
 
// class "container": establece los margenes del contenido en su 
// interior