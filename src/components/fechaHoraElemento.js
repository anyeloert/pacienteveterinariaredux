import React, {Fragment} from 'react';

const FechaHoraElemento = ({tipo, valorLabel, claseLabel, claseImput, name, accion, value}) => (    
    <Fragment>
        <label className={claseLabel}>
            {valorLabel}
        </label>
        <input 
            type={tipo}
            className={claseImput}
            name={name}
            onChange={accion}
            value={value}
            />           
    </Fragment>
);

export default FechaHoraElemento;