import React from 'react';
import Citas from './Citas.js'

// from Redux

import {connect} from 'react-redux'

 //pasar a localStorage
 import store from '../store'
 store.subscribe(() => {
    localStorage.setItem('citas', JSON.stringify(store.getState()))
})   
 
const AdminiCitas = ({citas}) =>{ 

    
   
   

    const mensaje = Object.keys(citas).length===0 ? 'No hay citas' : 'Administrador de Citas'
    return (
        <div className="card ml-5 py-3 my-5" >
            <div className='card-body'>
                <h2 className='card-tittle mb-5 text-center' > 
                    {mensaje}
                </h2>  
                <div className='lista-citas'> 
                    {citas.map(cita =>(                        
                        <Citas 
                            key={cita.id}
                            cita={cita}
                            
                        />
                    ))}
                </div>   
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    citas : state.citas.citas
})


export default connect(mapStateToProps) (AdminiCitas);