import React, { useState } from 'react';
import FormNewGoal from './FormNewGoal';

function ModalForm(props){

    
    const idModal = `modal-newGoal`;
    const referenceIdModal = `#${idModal}`;
    
    
    return(
        <div className="modal-form-task align-self-center">
           
            <button type="button" class="btn btn-lg btn-primary " data-toggle="modal" data-target={ referenceIdModal }>
                New Goal
            </button>
            <div class="modal fade" id={ idModal } tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="objectiveModalTitle">About your goal</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <FormNewGoal />
                 </div>
                <div class="modal-footer">
                    <div className="flex-grow-1">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-success" ><span><i className="fas fa-save"></i></span></button>
                    </div> 
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ModalForm;