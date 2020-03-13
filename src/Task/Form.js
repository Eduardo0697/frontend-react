import React, { useState } from 'react';

function Form(props){
    console.log('FORM Edit TASK')

    const [ isButtonDisabled, setIsButtonDisabled ] = useState(true);
    const [ isEditButtonDisabled, setIsEditButtonDisabled ] = useState(false);

    const onClickEditButton = (event) => {
        if(event.currentTarget.attributes["aria-pressed"].value === "true"){
            setIsButtonDisabled(false)
        }else{
            setIsButtonDisabled(true)
        }
    };

    
    const [taskUpdated, setTaskUpdated] = useState(props.info);

    const [idGoal, setIdGoal] = useState(props.info.idGoal)
    const [emailAssociated, setEmail] = useState(props.info.emailAssociated); 
    const [_id, set_id] = useState(props.info._id)
    const [taskTitle, setTaskTitle] = useState(props.info.taskTitle);
    const [description, setDescription] = useState(props.info.description);
    const [importance, setImportance] = useState(props.info.importance); 
    const [frequency, setFrequency] = useState(props.info.frequency);
    const [isAcomplished, setIsAcomplished] = useState(props.info.isAcomplished);

    const [dismissAlert, setDismissAlert] = useState(true);

    const alertReturned= () => {
        //console.log(dismissAlert)
        if(dismissAlert){
            return(
                <div></div>
            )
        }else{
            return(
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <h4 className="alert-heading"> Excellent!</h4>
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <p>Great, you have updated your task!</p>
                    <hr></hr>
                    <p className="mb-0">Now close the window! Ang go for more!</p>
                </div>
            )
        }   
    }

    const onChangeAnyInput = (event) => {
        
        if(event.target.id === 'titleTaskId') setTaskTitle(event.target.value)
        if(event.target.id === 'desTaskId') setDescription(event.target.value)
        if(event.target.id === 'importanceTaskId') setImportance(event.target.value)
        if(event.target.id === 'frequencyTaskId') setFrequency(event.target.value)
        if(event.target.id === 'taskCompletedId') setIsAcomplished(event.target.value)
        
        
        setTaskUpdated( {
            idGoal: props.info.idGoal,
            emailAssociated: props.info.emailAssociated,
            _id: props.info._id,
            taskTitle : taskTitle,
            description: description,
            importance: importance,
            frequency: frequency,
            isAcomplished: isAcomplished
        } )
    }

    const onSubmitHandler = (event) => {
        console.log('Form Update Task Valido')
        setTaskUpdated( {
            idGoal: props.info.idGoal,
            emailAssociated: props.info.emailAssociated,
            _id: props.info._id,
            taskTitle : taskTitle,
            description: description,
            importance: importance,
            frequency: frequency,
            isAcomplished: isAcomplished
        } )
        //console.log(taskUpdated)
        props.callbackUpdateTask(taskUpdated)
        setDismissAlert(props.status) 
        //props.callbackNewGoal(newGoal);
        
        
             
    };

    const onClickClose = () => {
        
        document.getElementById("formUpdateTask").reset();
        setDismissAlert(true);
        props.callbackStatus(false)
        setIsButtonDisabled(true)
        
    }
    

    return(
        <div className="form-task">
            { alertReturned() }
            <form id="formUpdateTask" className="needs-validation" noValidate="" onSubmit={ onSubmitHandler }>
                <fieldset disabled={ isButtonDisabled }>
                    <div className="row justify-content-center">
                        <div className="col-auto mb-3">
                        
                            <label htmlFor="taskCompletedId">Task Status</label>
                            <select onChange={ onChangeAnyInput }  className="custom-select d-block w-100" id="taskCompletedId" required="" defaultValue={ props.info.isAcomplished }>
                                <option value="">Choose...</option>
                                <option value="true">Done</option>
                                <option value="false">In progress</option>
                            </select>
                        
                        </div>
                    </div>
                    <div className="row">
                        
                        <div className="col-12 mb-3">
                            <label htmlFor="titleTaskId">Title</label>
                            <input onChange={ onChangeAnyInput } type="text" className="form-control" id="titleTaskId" placeholder="Title"  required="" defaultValue={ props.info.taskTitle }></input>
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="desTaskId">Description</label>
                            <textarea onChange={ onChangeAnyInput } rows="2" className="form-control" id="desTaskId" placeholder="Description"  required="" defaultValue={ props.info.description }></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="frequencyTaskId">Frequency</label>
                            <select onChange={ onChangeAnyInput } className="custom-select d-block w-100" id="frequencyTaskId" required="" defaultValue={ props.info.frequency }>
                                <option value="once">Once</option>
                                <option value="everyday">Everyday</option>
                                <option value="everyweek">Every Week</option>
                                <option value="monday">Monday</option>
                                <option value="tuesday">Tuesday</option>
                                <option value="wednesday">Wednesday</option>
                                <option value="thursday">Thursday</option>
                                <option value="saturday">Saturday</option>
                                <option value="sunday">Sunday</option>
                            </select>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="importanceTaskId">Importance</label>
                            <select onChange={ onChangeAnyInput }  className="custom-select d-block w-100" id="importanceTaskId" required="" defaultValue={ props.info.importance }>
                                <option value="">Choose...</option>
                                <option value="1">Low</option>
                                <option value="2">Medium</option>
                                <option value="3">High</option>
                            </select>
                        </div>
                    </div>        
                </fieldset>
                <hr></hr>

                <div className="row mx-2 mt-3">
                    
                        <div className="flex-grow-1">
                                <button onClick={ onClickClose } type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        <div>
                            <button type="button"  onClick={ onClickEditButton } disabled={ isEditButtonDisabled }  className="btn btn-outline-warning mr-3" data-toggle="button" aria-pressed={ false } autoComplete="off"> 
                                <span><i className="fas fa-edit"></i></span>
                            </button>
                            <button type="submit" disabled={ isButtonDisabled } className="btn btn-success" ><span><i className="fas fa-save"></i></span></button>
                        </div> 
                    
                </div>

            </form>
        </div>
    )
}

export default Form;