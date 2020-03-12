import React from 'react';

function FormNewGoal(props){
    console.log('Form Objetivo')
    console.log(props);

    
    return(
        <div className="form-task">
            
            <form class="needs-validation" noValidate="">
                <fieldset disabled={ props.activeFields }>
                    <div class="row">
                        <div class="col-md-8 mb-3">
                            <label for="titleObjective">Title</label>
                            <input type="text" class="form-control" id="titleObjective" placeholder="Title"  required={ true } ></input>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="titleObjective">User email</label>
                            <input type="email" class="form-control" id="titleObjective" placeholder="mail@example.com"  required={ true } ></input>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 mb-3">
                            <label for="descriptionObjective">Description</label>
                            <textarea rows="2" class="form-control" id="descriptionObjective" placeholder="Description"  required={ true } ></textarea>
                        </div>
                        <div class="col-12 mb-3">
                            <label for="obstaclesObjective">Obstacles</label>
                            <textarea rows="2" class="form-control" id="obstaclesObjective" placeholder="Obstacles"  required={ true } ></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="typeObjective">Type</label>
                            <select class="custom-select d-block w-100" id="typeObjective" required={ true } >
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
                            <select class="custom-select d-block w-100" id="importanceTask" required={ true } >
                                <option value="">Choose...</option>
                                <option>short</option>
                                <option>medium</option>
                                <option>long</option>
                            </select>
                        </div>
                    </div>
                </fieldset>
            </form>

            <hr></hr>
            <div className="TasksAssociated my-2">
                <p className="h5 mv-3">Now create your first task...</p>
                <div className="formNewTask text-left">
                    <form className="needs-validation" noValidate="">
                        <div className="row">
                            <div className="col-12 mb-3">
                                <label for="titleTask">Title</label>
                                <input type="text" className="form-control" id="titleTask" placeholder="Title"  required={ true }></input>
                                <div className="invalid-feedback">
                                    Valid task title is required.
                                </div>
                            </div>
                            <div className="col-12 mb-3">
                                <label for="descriptionTask">Description</label>
                                <textarea rows="2" className="form-control" id="descriptionTask" placeholder="Description"  required={ true }></textarea>
                                <div className="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label for="frequencyTask">Frequency</label>
                                <select className="custom-select d-block w-100" id="frequencyTask" required={ true } >
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
                                <div className="invalid-feedback">
                                    Please select a valid frequency option.
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label for="importanceTask">Importance</label>
                                <select className="custom-select d-block w-100" id="importanceTask" required={ true }>
                                <option value="">Choose...</option>
                                <option value="1">Low</option>
                                <option value="2">Medium</option>
                                <option value="3">High</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please provide a valid importance value.
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
    
                
            </div>
        </div>
    )
}

export default FormNewGoal;