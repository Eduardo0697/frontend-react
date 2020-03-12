import React,{ useState } from 'react';
//import ModalFormTask from './ModalForm';
//import ModalNewTask from './ModalNewTask';

function ResumeGoals(props){

    const [email, setEmail] = useState('');

    const onChangeInputEmail = (event) => {
        setEmail(event.target.value)
    }

    const onClickSearchTasks = () => {
        props.callbackEmaiGoals(email)
    }

    return(
        <div className="resume-today">

            <div className="my-3">
                <form>
                    <div class="form-group justify-content-md-end row mb-0">
                        <label for="inputEmail3" class="col-md-1 col-form-label">Email</label>
                        <div class="col-md-4 mb-3">
                            <input onChange={ onChangeInputEmail } type="email" class="form-control" id="inputEmail3" placeholder="Email"></input>
                        </div>
                        <div className="form-group col-md-1">
                            <button onClick={ onClickSearchTasks } type="button" class="btn btn-primary"><span><i class="fas fa-search"></i></span></button>
                        </div>
                    </div>
                    <div className="form-group justify-content-center justify-content-md-end row mr-md-3">
                        <small id="emailHelp" class="form-text text-muted">Please search your goals using your email</small>
                    </div> 
                    
                </form>
            </div>

            <div className="text-left mb-3">
              <p className="h3">Your Goals</p>
            </div>
           
            <div className="card text-left mb-3" >
                <ul className="list-group list-group-flush">
                    { props.goals }
                </ul>
            </div>
        </div>
    )
}

export default ResumeGoals;