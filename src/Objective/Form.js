import React from 'react';

function Form(props){
    console.log(props);
    return(
        <div className="form-task">
            <div class="mb-4">
                <p class="h3">Create your objective</p>
            </div>
            <form class="needs-validation" noValidate="">
                <div class="row">
                    <div class="col-md-8 mb-3">
                        <label for="titleObjective">Title</label>
                        <input type="text" class="form-control" id="titleObjective" placeholder="Title"  required=""></input>
                        <div class="invalid-feedback">
                            Valid Objective title is required.
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="titleObjective">User email</label>
                        <input type="email" class="form-control" id="titleObjective" placeholder="mail@example.com"  required=""></input>
                        <div class="invalid-feedback">
                            Valid Objective title is required.
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 mb-3">
                        <label for="descriptionObjective">Description</label>
                        <textarea rows="2" class="form-control" id="descriptionObjective" placeholder="Description"  required=""></textarea>
                        <div class="invalid-feedback">
                            Valid Description is required.
                        </div>
                    </div>
                    <div class="col-12 mb-3">
                        <label for="obstaclesObjective">Obstacles</label>
                        <textarea rows="2" class="form-control" id="obstaclesObjective" placeholder="Obstacles"  required=""></textarea>
                        <div class="invalid-feedback">
                            Valid Description is required.
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="typeObjective">Type</label>
                        <select class="custom-select d-block w-100" id="typeObjective" required="">
                            <option value="">Choose...</option>
                            <option>academic</option>
                            <option>professional</option>
                            <option>fitness</option>
                            <option>mind</option>
                            <option>social</option>
                            <option>cultural</option>
                            <option>relationship</option>
                        </select>
                        <div class="invalid-feedback">
                            Please select a valid objective type option.
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="Length">Length</label>
                        <select class="custom-select d-block w-100" id="importanceTask" required="">
                            <option value="">Choose...</option>
                            <option>short</option>
                            <option>medium</option>
                            <option>long</option>
                        </select>
                        <div class="invalid-feedback">
                            Please provide a valid length value.
                        </div>
                    </div>
                </div>
                <div class="row">
                    <hr class="mb-4"></hr>
                    <div class="col-md-6 mb-3">
                        <button class="btn btn-danger btn-lg " >Cancel</button>
                    </div>
                    <div class="col-md-6 mb-3">
                        <button class="btn btn-success btn-lg " type="submit">Create</button>
                    </div>
                    
                </div>
            </form>
        </div>
    )
}

export default Form;