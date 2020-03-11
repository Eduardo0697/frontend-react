import React, { useState } from 'react';
import FormTask from './Form';

function ModalForm(props){
    //console.log('ModalForm!')
    //console.log(props.infoTask)
    const data = props.infoTask;
    //console.log(data._id)
    const idModal = `modal-${data._id}`;
    const referenceIdModal = `#${idModal}`;


    const [ isButtonDisabled, setIsButtonDisabled ] = useState(true);

    const onClickEditButton = (event) => {
        //console.log(event.currentTarget)
        //console.log(event.currentTarget.attributes["aria-pressed"].value )
        if(event.currentTarget.attributes["aria-pressed"].value === "true"){
            //console.log('Edit Activo')
            setIsButtonDisabled(false)
        }else{
            //console.log('Edit desactivado')
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
                    <h5 className="modal-title" id="taskModalTitle">About it</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <FormTask info={ data } activeFields={ isButtonDisabled }/>
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