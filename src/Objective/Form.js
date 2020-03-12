import React from 'react';

function Form(props){
    console.log('Form Objetivo')
    console.log(props);

    const tasksAssociated = () =>{
        const arrayTasksAssociated = [];
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
    return(
        <div className="form-task">
            <p className="h6">ID: { props.info._id }</p>
            <form class="needs-validation" noValidate="">
                <fieldset disabled={ props.activeFields }>
                    <div class="row">
                        <div class="col-md-8 mb-3">
                            <label for="titleObjective">Title</label>
                            <input type="text" class="form-control" id="titleObjective" placeholder="Title"  required={ true } defaultValue={ props.info.title }></input>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="titleObjective">User email</label>
                            <input type="email" class="form-control" id="titleObjective" placeholder="mail@example.com"  required={ true } defaultValue={ props.info.emailAssociated }></input>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 mb-3">
                            <label for="descriptionObjective">Description</label>
                            <textarea rows="2" class="form-control" id="descriptionObjective" placeholder="Description"  required={ true } defaultValue={ props.info.description }></textarea>
                        </div>
                        <div class="col-12 mb-3">
                            <label for="obstaclesObjective">Obstacles</label>
                            <textarea rows="2" class="form-control" id="obstaclesObjective" placeholder="Obstacles"  required={ true } defaultValue={ props.info.obstacles }></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="typeObjective">Type</label>
                            <select class="custom-select d-block w-100" id="typeObjective" required={ true } defaultValue={ props.info.typeObjective }>
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
                            <select class="custom-select d-block w-100" id="importanceTask" required={ true } defaultValue={ props.info.length }>
                                <option value="">Choose...</option>
                                <option>short</option>
                                <option>medium</option>
                                <option>long</option>
                            </select>
                        </div>
                    </div>
                </fieldset>
            </form>

            <div className="TasksAssociated">
                <p className="h5">Your Tasks Assoociated</p>
                <div className="card text-left mb-3" >
                    <ul className="list-group list-group-flush">
                        { tasksAssociated() }
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Form;