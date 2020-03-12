import React from 'react';

function Saludo(props){
    console.log(props);
    return(
        <div className="Saludo bg-dark text-white">
            <h3>{ props.mensaje }</h3>
        </div>
    )
}

export default Saludo;