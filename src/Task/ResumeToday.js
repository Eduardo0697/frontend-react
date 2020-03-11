import React from 'react';
import ModalFormTask from './ModalForm';

function ResumeToday(props){
    console.log(props);
    return(
        <div className="resume-today">
            <div class="card text-left" >
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <div class="d-flex">
                            <div class="flex-grow-1">Task 1</div>
                            <div class="d-flex flex-row">   
                                <button type="button" class="btn btn-outline-primary mr-3">Info</button>
                                <ModalFormTask/>
                            </div>
                        </div>    
                    </li>
                    <li class="list-group-item">Task 2</li>
                    <li class="list-group-item">Task 3</li>
                    <li class="list-group-item">Task 4</li>
                    <li class="list-group-item">Task 5</li>
                </ul>
            </div>
            <hr></hr>
            <div class="accordion" id="accordionExample">
                <div class="card text-left">
                    <div class="card-header" id="headingOne">
                        <div class="d-flex">
                            <div class="flex-grow-1">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    Task 1
                                </button>
                            </div>
                            <div class="">
                                
                                <button type="button" class="btn btn-outline-warning">Edit</button>
                                
                            </div>
                        </div> 
                    </div>

                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-2">
                                <p class="font-weight-bold">Title:</p>
                            </div>
                            <div class="col-md">
                                 <p>Titulo de la tarea</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                                <p class="font-weight-bold">Description:</p>
                            </div>
                            <div class="col-md">
                                 <p>Descripcion de la tarea</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="card text-left">
                    <div class="card-header" id="headingTwo">
                    <h2 class="mb-0">
                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Collapsible Group Item #2
                        </button>
                    </h2>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div class="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                    </div>
                </div>
                <div class="card text-left">
                    <div class="card-header" id="headingThree">
                    <h2 class="mb-0">
                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Collapsible Group Item #3
                        </button>
                    </h2>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div class="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumeToday;