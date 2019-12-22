import React from 'react';

const formElement = ({valorLabel, claseLabel, claseImput, placeholder, name, accion, value}) => (    
       
       <div className='form-group row'>
            <label className={claseLabel}>
                {valorLabel}
            </label>
            <input 
                type='text' 
                className={claseImput}
                placeholder={placeholder}
                name={name}
                onChange={accion}
                value={value}
                />           
        </div>    
);

export default formElement;