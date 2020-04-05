import React, {Component} from 'react';
import Header from './components/Header.js'
import './bootstrap.min.css';
import Form from './components/Form.js'
import AdminiCitas from './components/AdminiCitas.js'

//redux

import {Provider} from 'react-redux'
import store from './store'



class App extends Component {
 

  
  
  
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <Header 
            titulo="Administrador Pacientes Veterinaria"
          />
          <Form/>        
          <AdminiCitas/>
        </div>
      </Provider>
      
    );
  }
}

export default App;
 
// class "container": establece los margenes del contenido en su 
// interior