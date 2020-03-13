import React from 'react';
import FormNew from './FormNew';

function ModaCreateTask(props){
    return(
        <div className="ModalNewTask align-self-center">
            
            <button type="button" className="btn btn-lg btn-success" data-toggle="modal" data-target="#modalNewTask">
                Add Task
            </button>
            
           
            
            <div className="modal fade" id="modalNewTask" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="taskModalTitle">Create New Task</h5>
                </div>
                <div className="modal-body">
                    <FormNew  callbackNewTask={ props.callbackNewTask } succesPatch={ props.succesPatch } callbackStatus={ props.callbackStatus }/>
                </div>
            
                </div>
            </div>
            </div>
        </div>
    )
}

export default ModaCreateTask;