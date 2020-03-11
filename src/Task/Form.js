import React, { useState } from 'react';

function Form(props){
    console.log('FORM TASK')
    console.log(props.activeFields)



    return(
        <div className="form-task">
            <form className="needs-validation" noValidate="">
                <fieldset disabled={ props.activeFields }>
                    <div className="row">
                        <div className="col-12 mb-3">
                            <label for="titleTask">Title</label>
                            <input type="text" className="form-control" id="titleTask" placeholder="Title"  required="" defaultValue={ props.info.taskTitle }></input>
                            <div className="invalid-feedback">
                                Valid task title is required.
                            </div>
                        </div>
                        <div className="col-12 mb-3">
                            <label for="descriptionTask">Description</label>
                            <textarea rows="2" className="form-control" id="descriptionTask" placeholder="Description"  required="" defaultValue={ props.info.description }></textarea>
                            <div className="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label for="frequencyTask">Frequency</label>
                            <select className="custom-select d-block w-100" id="frequencyTask" required="" defaultValue={ props.info.frequency }>
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
                            <select className="custom-select d-block w-100" id="importanceTask" required="" defaultValue={ props.info.importance }>
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
                </fieldset>
            </form>
        </div>
    )
}

export default Form;