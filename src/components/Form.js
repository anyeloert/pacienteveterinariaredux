import React, { Component } from 'react';
import Text from './Text.js'
import FechaHoraElemento from './fechaHoraElemento.js'
import uuid from 'uuid'

//de Redux

import {connect} from 'react-redux'
import {agregarCita} from '../actions/citasActions'

const stateInicial= {        
    cita:{
        Mascota:"",
        Propietario:"",
        FechaCita:"",
        HoraCita:"",
        Síntomas:""
    },
    error:false
}

class Form extends Component {
    state= {
        ...stateInicial
    }
    handleChange = e =>{
        this.setState({
            cita:{
                ...this.state.cita,
                [e.target.name] : e.target.value
            }
        });
    }
    handleSubmit= e=>{
        e.preventDefault()
        for (const attr in this.state.cita){
           if (this.state.cita[attr]===""){
               this.setState({
                   error:true
               })
               return;
           }
        }
        const nuevaCita = {...this.state.cita}
        nuevaCita.id = uuid();
        this.props.agregarCita(nuevaCita)
        this.setState({
            ...stateInicial
        })

    }  
    render() { 
        const {error}= this.state        
        return (
            <div className="card ml-5 py-5">
               <div className= "card-body">
                    <h2 className='card-tittle mb-5 text-center' > 
                        Llene el formulario para crear una nueva cita
                    </h2>
                    {error ? <div className='alert-danger alert text-center mb-5 mt-2'>
                        Todos los campos son obligatorios
                    </div>:null}
                    <form 
                        onSubmit={this.handleSubmit}
                    >
                        <Text 
                            valorLabel='Nombre de la Mascota'
                            claseLabel='col-sm-4 col-lg-2 col-form-label'
                            claseImput='col-sm-8 col-lg-10 form-control'
                            placeholder='Nombre de Mascota'
                            name='Mascota'
                            accion={this.handleChange}
                            value={this.state.cita.Mascota}
                        />
                        <Text
                            valorLabel='Dueño de la mascota' 
                            claseLabel='col-sm-4 col-lg-2 col-form-label'
                            claseImput='col-sm-8 col-lg-10 form-control'
                            placeholder='Nombre Dueño Mascota'
                            name='Propietario'
                            accion={this.handleChange}
                            value={this.state.cita.Propietario}
                        />
                        <div className='form-group row'>
                            <FechaHoraElemento
                                tipo='date'
                                valorLabel='Fecha de Cita' 
                                claseLabel='col-sm-4 col-lg-2 col-form-label d-inline'
                                claseImput='col-sm-8 col-lg-4 form-control d-inline'
                                name='FechaCita'
                                accion={this.handleChange}
                                value={this.state.cita.FechaCita}
                            />                        
                            <FechaHoraElemento
                                tipo='time'
                                valorLabel='Hora de CIta' 
                                claseLabel='col-sm-4 col-lg-2 col-form-label d-inline'
                                claseImput='col-sm-8 col-lg-4 form-control d-inline'
                                name='HoraCita'
                                accion={this.handleChange}
                                value={this.state.cita.HoraCita}
                            />
                        </div>
                        <div className='form-group row'>
                            <label className='col-sm-4 col-lg-2 col-form-label'>
                                Síntomas
                            </label>
                            <textarea
                                className='form-control col-sm-8 col-lg-10'
                                placeholder='Describa los Síntomas'
                                name='Síntomas'
                                onChange={this.handleChange}
                                value={this.state.cita.Síntomas}
                                >
                            </textarea>           
                        </div>    
                        <input 
                            type='submit' 
                            className='py-3 mt-2 btn btn-success btn-block'
                            placeholder='Describa los síntomas'
                            value='Crear Nueva Cita'
                        /> 
                    </form>   
               </div>
            </div>
        );
    }
}



export default connect(null, {agregarCita}) (Form);