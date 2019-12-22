import React from 'react';
import Citas from './Citas.js'

const AdminiCitas = ({citas, eliminarCita}) =>{ 
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
                        eliminarCita={eliminarCita}
                        />
                    ))}
                </div>   
            </div>
        </div>
    );
}


export default AdminiCitas;