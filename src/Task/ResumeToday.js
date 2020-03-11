import React from 'react';
import ModalFormTask from './ModalForm';
import ModalNewTask from './ModalNewTask';

function ResumeToday(props){
    console.log(props);
    return(
        <div className="resume-today">
            <div className="text-left mb-3">
              <p className="h3">Today Tasks</p>
            </div>
           
            <div class="card text-left mb-3" >
                <ul class="list-group list-group-flush">
                    { props.tasks }
                </ul>
            </div>

            <div className="text-left">
                <ModalNewTask/>
            </div>
        </div>
    )
}

export default ResumeToday;