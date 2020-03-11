import React from 'react';
import FormNewTask from './FormNew';

function ModalNewTask(){
    return(
        <div className="ModalNewTask">
            <div className="text-right">
                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#modalNewTask">
                    <span class="fas fa-plus"></span>
                </button>
            </div>
           
            
            <div class="modal fade" id="modalNewTask" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="taskModalTitle">Create New Task</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <FormNewTask/>
                </div>
                <div class="modal-footer">
                    <div className="flex-grow-1">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel<span className="ml-3"><i class="fas fa-times"></i></span></button>
                    </div>
                    <div>
                        <button type="button" class="btn btn-success"><span><i class="fas fa-save"></i></span></button>
                    </div> 
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ModalNewTask;