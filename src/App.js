import React, {Component} from 'react';
import Header from './components/Header.js'
import './bootstrap.min.css';
import Form from './components/Form.js'
import AdminiCitas from './components/AdminiCitas.js'




class App extends Component {
  state={
    cita:[]
  }

  componentDidMount(){
    const citasLS = localStorage.getItem('citas')
    if (citasLS){
      this.setState({
        cita:JSON.parse(citasLS)
      })
    }
  }
  componentDidUpdate(){
    localStorage.setItem('citas', JSON.stringify(this.state.cita))
  }
  crearNuevaCita = datos =>{
    this.setState({
      cita:[...this.state.cita, datos]
    })
  }
  eliminarCita = id =>{
    let copiaState = [...this.state.cita]
    const citasNoEliminadas = copiaState.filter(cita => cita.id!==id)
    this.setState({
      cita:[...citasNoEliminadas]
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