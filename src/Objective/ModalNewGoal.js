import React, { useState } from 'react';
import FormNewGoal from './FormNewGoal';

function ModalForm(props){

    
    const idModal = `modal-newGoal`;
    const referenceIdModal = `#${idModal}`;
    
    
    
    return(
        <div className="modal-form-task align-self-center">
           
            <button type="button" className="btn btn-lg btn-primary " data-toggle="modal" data-target={ referenceIdModal }>
                New Goal
            </button>
            <div className="modal fade" id={ idModal } tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="objectiveModalTitle">About your goal</h5>
                        
                    </div>
                    <div className="modal-body">
                        <FormNewGoal callbackNewGoal={ props.callbackNewGoal } succesPost={ props.succesPost } />
                    </div>
                
                </div>
            </div>
            </div>
        </div>
    )
}

export default ModalForm;