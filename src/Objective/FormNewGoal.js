import React, { useState } from 'react';

function FormNewGoal(props){

    const status = props.succesPost;
    console.log(`Status de peticion ${ status }`)

    const [statusAlert , setStatusAlert] = useState('');  
    const [newGoal, setNewGoal] = useState({});
    const [title, setTitle] = useState('');
    const [email, setEmail] = useState(''); 
    const [description, setDescription] = useState('');
    const [obstacles, setObstacles] = useState(''); 
    const [typeObjective, setTypeObjective] = useState('');
    const [length, setLength] = useState(''); 
    const [taskTitle, setTaskTitle] = useState(''); 
    const [taskDescription, setTaskDescription] = useState('');
    const [taskImportance, setTaskImportance] = useState('');
    const [taskFrequency, setTaskFrequency] = useState('');
    const [dismissAlert, setDismissAlert] = useState(false);

    const alertReturned= () => {
        if(!status || dismissAlert){
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
                    <p>Great, you have already created your goal!</p>
                    <hr></hr>
                    <p className="mb-0">Now close the window! Ang go for more!</p>
                </div>
            )
        }
        
    }

    const onChangeAnyInput = (event) => {
        
        if(event.target.id === 'idTitleNew') setTitle(event.target.value)
        if(event.target.id === 'idEmailNew') setEmail(event.target.value)
        if(event.target.id === 'idDescriptionNew') setDescription(event.target.value)
        if(event.target.id === 'idObstaclesNew') setObstacles(event.target.value)
        if(event.target.id === 'idTypeNew') setTypeObjective(event.target.value)
        if(event.target.id === 'idLengthNew') setLength(event.target.value)
        if(event.target.id === 'idTaskTitleNew') setTaskTitle(event.target.value)
        if(event.target.id === 'idTaskDescriptionNew') setTaskDescription(event.target.value)
        if(event.target.id === 'idTaskImportanceNew'){setTaskImportance(event.target.value)} 
        if(event.target.id === 'idTaskFrequencyNew') { setTaskFrequency(event.target.value)}
        setNewGoal( {
            title : title,
            emailAssociated: email,
            description: description,
            obstacles: obstacles,
            typeObjective: typeObjective,
            length: length,
            tasks: [
                {
                    taskTitle: taskTitle,
                    description: taskDescription,
                    importance: taskImportance,
                    frequency: taskFrequency,
                    isAcomplished: false
                }
            ]
        } )
        

    }

    const onSubmitHandler = (event) => {
        console.log('Form Valido')
        setNewGoal( {
            title : title,
            emailAssociated: email,
            description: description,
            obstacles: obstacles,
            typeObjective: typeObjective,
            length: length,
            tasks: [
                {
                    taskTitle: taskTitle,
                    description: taskDescription,
                    importance: taskImportance,
                    frequency: taskFrequency,
                    isAcomplished: false
                }
            ]
        } )
        console.log(newGoal)
        props.callbackNewGoal(newGoal);
        
             
    };

    const onClickClose = () => {
        
        document.getElementById("formNewGoalId").reset();
        setDismissAlert(true);
        
    }

    
    return(
        <div className="form-task text-left">
            { alertReturned() }
            
            <form id="formNewGoalId" className="needs-validation" noValidate="" onSubmit={ onSubmitHandler } >
                <fieldset disabled={ props.activeFields }>
                    <div className="row">
                        <div className="col-md-8 mb-3">
                            <label htmlFor="idTitleNew">Title</label>
                            <input onChange={ onChangeAnyInput }  type="text" className="form-control" id="idTitleNew" placeholder="Title"  required={ true } ></input>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="idEmailNew">User email</label>
                            <input onChange={ onChangeAnyInput }  type="email" className="form-control" id="idEmailNew" placeholder="mail@example.com"  required={ true } ></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mb-3">
                            <label htmlFor="idDescriptionNew">Description</label>
                            <textarea onChange={ onChangeAnyInput }  rows="2" className="form-control" id="idDescriptionNew" placeholder="Description"  required={ true } ></textarea>
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="idObstaclesNew">Obstacles</label>
                            <textarea onChange= { onChangeAnyInput }  rows="2" className="form-control" id="idObstaclesNew" placeholder="Obstacles"  required={ true } ></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="idTypeNew">Type</label>
                            <select onChange= { onChangeAnyInput }  className="custom-select d-block w-100" id="idTypeNew" required={ true } >
                                <option value="">Choose...</option>
                                <option value="academic">Academic</option>
                                <option value="professional">Professional</option>
                                <option value="fitness">Fitness</option>
                                <option value="mind">Mind</option>
                                <option value="social">Social</option>
                                <option value="cultural">Cultural</option>
                                <option value="relationship">Relationship</option>
                            </select>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="idLengthNew">Length</label>
                            <select onChange= { onChangeAnyInput }  className="custom-select d-block w-100" id="idLengthNew" required={ true } >
                                <option value="">Choose...</option>
                                <option>short</option>
                                <option>medium</option>
                                <option>long</option>
                            </select>
                        </div>
                    </div>
                    <div className="TasksAssociated my-2 text-center">
                        <p className="h5 mv-3">Lets create your first task...</p>
                    </div>
                    <div className="row">
                        <div className="col-12 mb-3">
                            <label htmlFor="idTaskTitleNew">Title</label>
                            <input onChange={ onChangeAnyInput }  type="text" className="form-control" id="idTaskTitleNew" placeholder="Title"  required={ true }></input>
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="idTaskDescriptionNew">Description</label>
                            <textarea onChange={ onChangeAnyInput }  rows="2" className="form-control" id="idTaskDescriptionNew" placeholder="Description"  required={ true }></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="idTaskFrequencyNew">Frequency</label>
                            <select onChange= { onChangeAnyInput }  className="custom-select d-block w-100" id="idTaskFrequencyNew" required={ true } >
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
                            <label htmlFor="idTaskImportanceNew">Importance</label>
                            <select onChange={ onChangeAnyInput }  className="custom-select d-block w-100" id="idTaskImportanceNew" required={ true }>
                            <option value="">Choose...</option>
                            <option value="1">Low</option>
                            <option value="2">Medium</option>
                            <option value="3">High</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mx-2 mt-3">
                        <div className="flex-grow-1">
                                <button type="button" onClick={ onClickClose } className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        <div>
                            <button type="submit"  className="btn btn-success" value="submit" ><span><i className="fas fa-save"></i></span></button>
                        </div> 
                    </div>
                    
                </fieldset>
            </form>  
        </div>
    )
}

export default FormNewGoal;