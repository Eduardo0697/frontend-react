import React, {useState } from 'react';

function Form(props){
    console.log('Form Objetivo')
    //console.log(props);

    const tasksAssociated = () =>{
        return props.info.tasks.map( (task) => {
            return (
                        <li className="list-group-item">
                            <div className="d-flex">
                                <div className="flex-grow-1">{ task.taskTitle }</div>               
                            </div>    
                        </li>
                    )
          });
    }

    const [ isButtonDisabled, setIsButtonDisabled ] = useState(true);
    const [ isEditButtonDisabled, setIsEditButtonDisabled ] = useState(false);
    const [ ariaPressed, setAriaPressed] = useState(false);
    const onClickEditButton = (event) => {
        if(event.currentTarget.attributes["aria-pressed"].value === "true"){
            setIsButtonDisabled(false)
        }else{
            setIsButtonDisabled(true)
        }
    };

    


    const [goalUpdated, setGoalUpdated] = useState({
        title: props.info.title,
        emailAssociated: props.info.emailAssociated,
        description: props.info.description,
        obstacles: props.info.obstacles,
        typeObjective: props.info.typeObjective,
        length : props.info.length

    });

    const [id, setId] = useState(props.info._id)
    const [title, setTitle] = useState(props.info.title);
    const [email, setEmail] = useState(props.info.emailAssociated); 
    const [description, setDescription] = useState(props.info.description);
    const [obstacles, setObstacles] = useState(props.info.obstacles); 
    const [typeObjective, setTypeObjective] = useState(props.info.typeObjective);
    const [length, setLength] = useState(props.info.length); 

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
                    <p>Great, you have updated your goal!</p>
                    <hr></hr>
                    <p className="mb-0">Now close the window! Ang go for more!</p>
                </div>
            )
        }   
    }

    const onChangeAnyInput = (event) => {
        
        if(event.target.id === 'titleGoalId') setTitle(event.target.value)
        if(event.target.id === 'desGoalId') setDescription(event.target.value)
        if(event.target.id === 'obstGoalId') setObstacles(event.target.value)
        if(event.target.id === 'typeGoalId') setTypeObjective(event.target.value)
        if(event.target.id === 'lengthGoalId') setLength(event.target.value)
        
        setGoalUpdated( {
            id: props.info._id,
            title : title,
            emailAssociated: email,
            description: description,
            obstacles: obstacles,
            typeObjective: typeObjective,
            length: length,
        } )
        //console.log('Goal Actualizaddo')
        //console.log(goalUpdated)

    }

    //console.log('Goal Actual')
    //console.log(goalUpdated)

    const onSubmitHandler = (event) => {
        console.log('Form Update Goal Valido')
        setGoalUpdated( {
            id: props.info._id,
            title : title,
            emailAssociated: email,
            description: description,
            obstacles: obstacles,
            typeObjective: typeObjective,
            length: length,
        } )
        console.log(goalUpdated)
        props.callbackUpdateGoal(goalUpdated)
        setDismissAlert(props.status) 
        //props.callbackNewGoal(newGoal);
        
        
             
    };

    const onClickClose = () => {
        
        document.getElementById("formUpdateGoal").reset();
        setDismissAlert(true);
        props.callbackStatus(false)
        setIsButtonDisabled(true)
        
    }

    return(
        <div className="form-task">
            { alertReturned() }
            <p className="h6">ID: { props.info._id }</p>
            <form id="formUpdateGoal" className="needs-validation" noValidate="" onSubmit={ onSubmitHandler }>
                <fieldset disabled={ isButtonDisabled }>
                    <div className="row">
                        <div className="col-md-8 mb-3">
                            <label htmlFor="titleGoalId">Title</label>
                            <input onChange={ onChangeAnyInput } type="text" className="form-control" id="titleGoalId" placeholder="Title"  required={ true } defaultValue={ props.info.title }></input>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="emailGoalId">User email</label>
                            <input disabled={ true }onChange={ onChangeAnyInput } type="email" className="form-control" id="emailGoalId" placeholder="mail@example.com"  required={ true } defaultValue={ props.info.emailAssociated }></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mb-3">
                            <label htmlFor="desGoalId">Description</label>
                            <textarea onChange={ onChangeAnyInput } rows="2" className="form-control" id="desGoalId" placeholder="Description"  required={ true } defaultValue={ props.info.description }></textarea>
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="obstGoalId">Obstacles</label>
                            <textarea onChange={ onChangeAnyInput } rows="2" className="form-control" id="obstGoalId" placeholder="Obstacles"  required={ true } defaultValue={ props.info.obstacles }></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="typeGoalId">Type</label>
                            <select onChange={ onChangeAnyInput } className="custom-select d-block w-100" id="typeGoalId" required={ true } defaultValue={ props.info.typeObjective }>
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
                            <label htmlFor="lengthGoalId">Length</label>
                            <select onChange={ onChangeAnyInput } className="custom-select d-block w-100" id="lengthGoalId" required={ true } defaultValue={ props.info.length }>
                                <option value="">Choose...</option>
                                <option value="1">short</option>
                                <option value="2">medium</option>
                                <option value="3">long</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p className="h5">Your Tasks Assoociated</p>
                        </div>
                        <div className="col-12 my-3">
                            <div className="card text-left mb-3" >
                                <ul className="list-group list-group-flush">
                                    { tasksAssociated() }
                                </ul>
                            </div>
                        </div>
                        

                    </div>
                    </fieldset>
                    <hr></hr>

                    <div className="row mx-2 mt-3">
                       
                            <div className="flex-grow-1">
                                    <button onClick={ onClickClose } type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                            <div>
                                <button type="button" onClick={ onClickEditButton } disabled={ isEditButtonDisabled } className="btn btn-outline-warning mr-3" data-toggle="button" aria-pressed={ false } autoComplete="off"> 
                                    <span><i className="fas fa-edit"></i></span>
                                </button>
                                <button type="submit"  className="btn btn-success" disabled={ isButtonDisabled }><span><i className="fas fa-save"></i></span></button>
                            </div> 
                       
                    </div>
                
            </form>
        </div>
    )
}

export default Form;