import React from 'react';

function Form(props){
    console.log(props);
    return(
        <div className="form-task">
            <form class="needs-validation" noValidate="">
                <div class="row">
                    <div class="col-12 mb-3">
                        <label for="titleTask">Title</label>
                        <input type="text" class="form-control" id="titleTask" placeholder="Title"  required=""></input>
                        <div class="invalid-feedback">
                            Valid task title is required.
                        </div>
                    </div>
                    <div class="col-12 mb-3">
                        <label for="descriptionTask">Description</label>
                        <textarea rows="2" class="form-control" id="descriptionTask" placeholder="Description"  required=""></textarea>
                        <div class="invalid-feedback">
                            Valid last name is required.
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="frequencyTask">Frequency</label>
                        <select class="custom-select d-block w-100" id="frequencyTask" required="">
                        <option value="">Choose...</option>
                        <option>Once</option>
                        <option>Everyday</option>
                        <option>Every Week</option>
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Saturday</option>
                        <option>Sunday</option>
                        </select>
                        <div class="invalid-feedback">
                            Please select a valid frequency option.
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="importanceTask">Importance</label>
                        <select class="custom-select d-block w-100" id="importanceTask" required="">
                        <option value="">Choose...</option>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                        </select>
                        <div class="invalid-feedback">
                            Please provide a valid importance value.
                        </div>
                    </div>
                </div>
                <div class="row">
                    <hr class="mb-4"></hr>
                    <div class="col-md-6 mb-3">
                        <button class="btn btn-danger btn-lg btn-block" type="submit">Cancel</button>
                    </div>
                    <div class="col-md-6 mb-3">
                        <button class="btn btn-success btn-lg btn-block" type="submit">Add Task</button>
                    </div>
                    
                </div>
            </form>
        </div>
    )
}

export default Form;