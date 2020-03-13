import React, { useState } from 'react';
import FormGoals from './Form';

function ModalForm(props){

    const data = props.infoGoal;
    const idModal = `modal-${data._id}`;
    const referenceIdModal = `#${idModal}`;
    

    
    
    return(
        <div className="modal-form-task">
           
            <button type="button" className="btn btn-outline-info" data-toggle="modal" data-target={ referenceIdModal }>
                Info
            </button>
            <div className="modal fade" id={ idModal } tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="objectiveModalTitle">About your goal</h5>
                    
                </div>
                <div className="modal-body">
                    <FormGoals info={ data }  callbackUpdateGoal={ props.callbackUpdateGoal }  succesUpdate= { props.statusUpdateGoal } callbackStatus= { props.callbackStatus }/>
                 </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ModalForm;