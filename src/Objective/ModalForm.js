import React from 'react';
import ModalFormObjective from './Form';

function ModalForm(){
    return(
        <div className="modal-form-task">
           
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#objectiveModal">
                Edit objective
            </button>
            <div class="modal fade" id="objectiveModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="objectiveModalTitle">Create your objective</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <ModalFormObjective/>
                 </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-success">Create</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ModalForm;