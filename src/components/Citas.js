import React from 'react';

// de Redux
import {connect} from 'react-redux'
import {borrarCita} from '../actions/citasActions'

const Citas = ({cita, borrarCita}) => (
        <div className='media mt-3'>
            <div className='media-body'>
                <h3 className = 'mt-0'>{cita.Mascota}</h3>
                <p className='card-text'><span>Dueño:</span> {cita.Propietario} </p>
                <p className='card-text'><span>Fecha:</span> {cita.FechaCita} </p>
                <p className='card-text'><span>Hora:</span> {cita.HoraCita} </p>
                <p className='card-text'><span>Síntomas:</span></p>
                <p className='card-text'>{cita.Síntomas}</p>
                <button 
                className='btn btn-danger'
                onClick={()=> borrarCita(cita.id)}
                > Eliminar Cita                   
                </button>
            </div>
        </div>
    );

export default connect(null, {borrarCita}) (Citas);