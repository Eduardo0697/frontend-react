import React, { useState } from 'react';
import ModalFormTask from './ModalForm';
import ModalNewTask from './ModalNewTask';

function ResumeToday(props){

    const [email, setEmail] = useState('');

    const onChangeInputEmail = (event) => {
        setEmail(event.target.value)
    }

    const onClickSearchTasks = () => {
        //console.log(`Busca Tareas del email ${ email }` )
        props.callbackEmail(email)
    }


    //console.log(props);
    return(
        <div className="resume-today">

            <div className="my-3">
                <form>
                    <div className="form-group justify-content-md-end row mb-0">
                        <label htmlFor="inputEmail3" className="col-md-1 col-form-label">Email</label>
                        <div className="col-md-4 mb-3">
                            <input type="email" onChange={ onChangeInputEmail } className="form-control" id="inputEmail3" placeholder="Email"></input>
                        </div>
                        <div className="form-group col-md-1">
                            <button type="button" onClick={ onClickSearchTasks } className="btn btn-primary"><span><i className="fas fa-search"></i></span></button>
                        </div>
                    </div>
                    <div className="form-group justify-content-center justify-content-md-end row mr-md-3">
                        <small id="emailHelp" className="form-text text-muted">Please search your tasks using your email</small>
                    </div> 
                    
                </form>
            </div>

            <div className="text-left mb-3">
              <p className="h3">Today Tasks</p>
            </div>
           
            <div className="card text-left mb-3" >
                <ul className="list-group list-group-flush">
                    { props.tasks }
                </ul>
            </div>
        </div>
    )
}

export default ResumeToday;