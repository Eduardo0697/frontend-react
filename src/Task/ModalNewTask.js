import React from 'react';
import FormNewTask from './FormNew';

function ModalNewTask(){
    return(
        <div className="ModalNewTask">
            <div className="text-right">
                <button type="button" className="btn btn-success" data-toggle="modal" data-target="#modalNewTask">
                    <span className="fas fa-plus"></span>
                </button>
            </div>
           
            
            <div className="modal fade" id="modalNewTask" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="taskModalTitle">Create New Task</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <FormNewTask/>
                </div>
            
                </div>
            </div>
            </div>
        </div>
    )
}

export default ModalNewTask;