import React from 'react';

function Saludo(props){
    console.log(props);
    return(
        <div className="Saludo">
            <h3>{ props.mensaje }</h3>
        </div>
    )
}