import React from 'react';
import FormTask from './Form';

function ModalForm(props){
    console.log('ModalForm!')
    console.log(props.infoTask)
    const data = props.infoTask;
    console.log(data._id)
    const idModal = `modal-${data._id}`;
    const referenceIdModal = `#${idModal}`;
    return(
        <div className="modal-form-task">
           
            <button type="button" class="btn btn-outline-info" data-toggle="modal" data-target={ referenceIdModal }>
                Info
            </button>
            <div class="modal fade" id={ idModal } tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="taskModalTitle">About it</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <FormTask info={ data }/>
                </div>
                <div class="modal-footer">
                    <div className="flex-grow-1">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    </div>
                    <div>
                        <button type="button" class="btn btn-outline-warning mr-3" data-toggle="button" aria-pressed="false" autocomplete="off"> <span><i class="fas fa-edit"></i></span></button>
                        <button type="button" class="btn btn-success"><span><i class="fas fa-save"></i></span></button>
                    </div> 
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ModalForm;