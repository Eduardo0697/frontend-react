import React, { useState } from 'react';
import FormGoals from './Form';

function ModalForm(props){

    const data = props.infoGoal;
    const idModal = `modal-${data._id}`;
    const referenceIdModal = `#${idModal}`;
    const [ isButtonDisabled, setIsButtonDisabled ] = useState(true);

    const onClickEditButton = (event) => {
        if(event.currentTarget.attributes["aria-pressed"].value === "true"){
            setIsButtonDisabled(false)
        }else{
            setIsButtonDisabled(true)
        }
    };
    
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
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <FormGoals info={ data } activeFields={ isButtonDisabled } callback={ props.callback }/>
                 </div>
                <div className="modal-footer">
                    <div className="flex-grow-1">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    </div>
                    <div>
                        <button type="button" onClick={ onClickEditButton } className="btn btn-outline-warning mr-3" data-toggle="button" aria-pressed="false" autoComplete="off"> 
                            <span><i className="fas fa-edit"></i></span>
                        </button>
                        <button type="submit" className="btn btn-success" disabled={ isButtonDisabled }><span><i className="fas fa-save"></i></span></button>
                    </div> 
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ModalForm;