import React, { useState } from 'react';

function FormNew(props){
    console.log('FORM NEW TASK')

    const status = props.succesPatch;
    
    const [newTask, setNewTask] = useState({});
    const [idGoal, setIdGoal] = useState('');
    const [email, setEmail] = useState(''); 
    const [taskTitle, setTaskTitle] = useState(''); 
    const [taskDescription, setTaskDescription] = useState('');
    const [taskImportance, setTaskImportance] = useState('');
    const [taskFrequency, setTaskFrequency] = useState('');

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
                    <h4 className="alert-heading"> Well done!</h4>
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <p>Great, you have added a task for your goal!</p>
                    <hr></hr>
                    <p className="mb-0">Now close the window! Ang go for more!</p>
                </div>
            )
        }   
    }
    const onChangeAnyInput = (event) => {
        if(event.target.id === 'idGoalID') setIdGoal(event.target.value)
        if(event.target.id === 'emailIDGoal') setEmail(event.target.value)
        if(event.target.id === 'titleTask') setTaskTitle(event.target.value)
        if(event.target.id === 'descriptionTask') setTaskDescription(event.target.value)
        if(event.target.id === 'importanceTask'){setTaskImportance(event.target.value)} 
        if(event.target.id === 'frequencyTask') { setTaskFrequency(event.target.value)}
        setNewTask( {
            id : idGoal,
            email: email,
            taskTitle: taskTitle,
            description: taskDescription,
            importance: taskImportance,
            frequency: taskFrequency,
            isAcomplished: false
            
        } )
        

    }

    const onSubmitHandler = (event) => {
        console.log('Form Valido')
        setNewTask( {
            id : idGoal,
            email: email,
            taskTitle: taskTitle,
            description: taskDescription,
            importance: taskImportance,
            frequency: taskFrequency,
            isAcomplished: false    
        } )
        console.log(newTask)
        props.callbackNewTask(newTask);
        setDismissAlert(props.status)     
    };

    const onClickClose = () => {
        
        document.getElementById("formNewTaskID").reset();
        setDismissAlert(true);
        props.callbackStatus(false)
        
    }

    return(
        <div className="form-task text-left">
            { alertReturned() }
            <form id="formNewTaskID" className="needs-validation" noValidate="" onSubmit={ onSubmitHandler }>
                <fieldset>
                    <div className="row">
                        <div className="col-12 col-md-6 mb-3">
                                <label htmlFor="emailIDGoal">Email</label>
                                <input onChange={ onChangeAnyInput } type="email" className="form-control" id="emailIDGoal" placeholder="Your email"  required={ true }></input>
                                
                            </div>
                            <div className="col-12 col-md-6 mb-3">
                                <label htmlFor="idGoalID">Goal ID</label>
                                <input  onChange={ onChangeAnyInput } type="text" className="form-control" id="idGoalID" placeholder="The ID of your Goal"  required={ true }></input>
                                
                            </div>
                            <div className="col-12 mb-3">
                                <label htmlFor="titleTask">Title</label>
                                <input onChange={ onChangeAnyInput } type="text" className="form-control" id="titleTask" placeholder="The title for your task"  required={ true }></input>
                                
                            </div>
                            
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="frequencyTask">Frequency</label>
                            <select onChange={ onChangeAnyInput } className="custom-select d-block w-100" id="frequencyTask" required={ true } >
                            <option value="">Choose...</option>
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
                            <label htmlFor="importanceTask">Importance</label>
                            <select onChange={ onChangeAnyInput } className="custom-select d-block w-100" id="importanceTask" required={ true }>
                            <option value="">Choose...</option>
                            <option value="1">Low</option>
                            <option value="2">Medium</option>
                            <option value="3">High</option>
                            </select>
                            
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-12 mb-3">
                                <label htmlFor="descriptionTask">Description</label>
                                <textarea onChange={ onChangeAnyInput } rows="2" className="form-control" id="descriptionTask" placeholder="Description"  required={ true }></textarea>
                                
                        </div>
                    </div>
                    <hr></hr>
                    <div className="d-flex">
                        <div className="flex-grow-1">
                            <button onClick={ onClickClose } type="button" className="btn btn-secondary" data-dismiss="modal">Close<span className="ml-3"><i className="fas fa-times"></i></span></button>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-success"><span><i className="fas fa-save"></i></span></button>
                        </div> 
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default FormNew;