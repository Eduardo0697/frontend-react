import React, { useState } from 'react';

function FormNewGoal(props){
    const [newGoal, setNewGoal] = useState({
        title: ''
    });
    const [ isButtonDisabled, setIsButtonDisabled ] = useState(true);

    const [title, setTitle] = useState('');
    const onChangeInputTitle = (event) => {
        setTitle(event.target.value)
    }

    const [email, setEmail] = useState('');
    const onChangeInputEmail = (event) => {
        setEmail(event.target.value)
    }

    const [description, setDescription] = useState('');
    const onChangeInputDescription = (event) => {
        setDescription(event.target.value)
    }

    const [obstacles, setObstacles] = useState('');
    const onChangeInputObstacles = (event) => {
        setObstacles(event.target.value)
    }

    const [typeObjective, setTypeObjective] = useState('');
    const onChangeInputTypeObjective = (event) => {
        setTypeObjective(event.target.value)
    }

    const [length, setLength] = useState('');
    const onChangeInputLength = (event) => {
        setLength(event.target.value)
    }

    const [taskTitle, setTaskTitle] = useState('');
    const onChangeInputTaskTitle = (event) => {
        setTaskTitle(event.target.value)
    }

    const [taskDescription, setTaskDescription] = useState('');
    const onChangeInputTaskDescription = (event) => {
        setTaskDescription(event.target.value)
    }

    const [taskImportance, setTaskImportance] = useState('');
    const onChangeInputTaskImportance = (event) => {
        setTaskImportance(event.target.value)
    }

    const [taskFrequency, setTaskFrequency] = useState('');
    const onChangeInputTaskFrequency = (event) => {
        setTaskFrequency(event.target.value)
    }

    const onClickSaveButton = (event) => {
        
        console.log('Pressed')
        // console.log(event)
       
    };

    const onSubmitHandler = (event) => {
        console.log('Form Valido')
        
        //const goalCreated = ;
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
        console.log('GoalCreated')
        console.log(newGoal)
        //props.callbackNewGoal(newGoal);
            
            
    };

    
    return(
        <div className="form-task text-left">
            
            <form class="needs-validation" noValidate="" onSubmit={ onSubmitHandler } >
                <fieldset disabled={ props.activeFields }>
                    <div class="row">
                        <div class="col-md-8 mb-3">
                            <label for="titleObjective">Title</label>
                            <input onChange={ onChangeInputTitle } type="text" class="form-control" id="titleObjective" placeholder="Title"  required={ true } ></input>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="titleObjective">User email</label>
                            <input onChange={ onChangeInputEmail } type="email" class="form-control" id="titleObjective" placeholder="mail@example.com"  required={ true } ></input>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 mb-3">
                            <label for="descriptionObjective">Description</label>
                            <textarea onChange={ onChangeInputDescription } rows="2" class="form-control" id="descriptionObjective" placeholder="Description"  required={ true } ></textarea>
                        </div>
                        <div class="col-12 mb-3">
                            <label for="obstaclesObjective">Obstacles</label>
                            <textarea onChange= { onChangeInputObstacles } rows="2" class="form-control" id="obstaclesObjective" placeholder="Obstacles"  required={ true } ></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="typeObjective">Type</label>
                            <select onChange= { onChangeInputTypeObjective } class="custom-select d-block w-100" id="typeObjective" required={ true } >
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
                        <div class="col-md-6 mb-3">
                            <label for="Length">Length</label>
                            <select onChange= { onChangeInputLength } class="custom-select d-block w-100" id="importanceTask" required={ true } >
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
                            <label for="titleTask">Title</label>
                            <input onChange={ onChangeInputTaskTitle } type="text" className="form-control" id="titleTask" placeholder="Title"  required={ true }></input>
                        </div>
                        <div className="col-12 mb-3">
                            <label for="descriptionTask">Description</label>
                            <textarea onChange={ onChangeInputTaskDescription } rows="2" className="form-control" id="descriptionTask" placeholder="Description"  required={ true }></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label for="frequencyTask">Frequency</label>
                            <select onChange= { onChangeInputTaskFrequency } className="custom-select d-block w-100" id="frequencyTask" required={ true } >
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
                            <label for="importanceTask">Importance</label>
                            <select onChange={ onChangeInputTaskImportance } className="custom-select d-block w-100" id="importanceTask" required={ true }>
                            <option value="">Choose...</option>
                            <option value="1">Low</option>
                            <option value="2">Medium</option>
                            <option value="3">High</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mx-2 mt-3">
                        <div className="flex-grow-1">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        </div>
                        <div>
                            <button type="submit"  onClick={ onClickSaveButton }className="btn btn-success" value="submit" ><span><i className="fas fa-save"></i></span></button>
                        </div> 
                    </div>
                    
                </fieldset>
            </form>  
        </div>
    )
}

export default FormNewGoal;