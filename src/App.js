import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './App.css';
import Saludo from './Saludo';
import TaskForm from './Task/Form';
import ObjectiveForm from './Objective/Form';
import ResumeToday from './Task/ResumeToday';
import ModalFormObjective from './Objective/ModalForm';
import ModalFormTask from './Task/ModalForm';
import Navigation from './Home/Navigation';
import axios from 'axios';




function App() {

  const arrayTareas = [      
      {
          _id: "5e668fe0f7703553bb3838d7",
          taskTitle: "Task1Updated",
          description: "DescriptionTask1Updated",
          importance: 3,
          frequency: "once",
          isAcomplished: false
      },
      {
          _id: "5e668febf7703553bb3838d8",
          taskTitle: "Task2",
          description: "Tarea añadida via patch",
          importance: 1,
          frequency: "once",
          isAcomplished: false
      }
  ];

  const [isLoading, setLoading] = useState(true);

  const validation = () => {
    if(isLoading){
      return <h3>Loading</h3>
    }else{
      return arrayTareas.map( (task) => {
        return (
                        <li className="list-group-item">
                            <div className="d-flex">
                                <div className="flex-grow-1">{ task.taskTitle }</div>
                                <button className="btn btn-outline-success mr-3" type="button" data-toggle="button" aria-pressed="false" autocomplete="off">Done</button>
                                <ModalFormTask infoTask={ task } />                 
                            </div>    
                        </li>
                )
      });
    }
  }

  useEffect( () => {
    setTimeout( () => {
      setLoading(false);
    },500);
  });


  return (
    <div className="App">
      <Navigation/>
      <div className="container container-max">

        <ResumeToday tasks={ validation() }/>
        
        
      </div>
    </div>
  );
}

export default App;
