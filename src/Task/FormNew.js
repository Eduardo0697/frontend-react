import React from 'react';

function FormNew(){
    console.log('FORM NEW TASK')
    return(
        <div className="form-task">
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
                <hr></hr>
                <div className="d-flex">
                    <div className="flex-grow-1">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel<span className="ml-3"><i className="fas fa-times"></i></span></button>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-success"><span><i className="fas fa-save"></i></span></button>
                    </div> 
                </div>
            </form>
        </div>
    )
}

export default FormNew;