import React from 'react';

function FormNew(){
    console.log('FORM NEW TASK')
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
                        <select class="custom-select d-block w-100" id="frequencyTask" required="" >
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
                        <div class="invalid-feedback">
                            Please select a valid frequency option.
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="importanceTask">Importance</label>
                        <select class="custom-select d-block w-100" id="importanceTask" required="">
                        <option value="">Choose...</option>
                        <option value="1">Low</option>
                        <option value="2">Medium</option>
                        <option value="3">High</option>
                        </select>
                        <div class="invalid-feedback">
                            Please provide a valid importance value.
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormNew;