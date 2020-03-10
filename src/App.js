import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './App.css';
import Saludo from './Saludo';
import TaskForm from './Task/Form';
import ObjectiveForm from './Objective/Form';
import ResumeToday from './Task/ResumeToday';
function App() {
  return (
    <div className="App">
      
      <Saludo mensaje="Hola desde React"/>
      <Saludo mensaje="componente TaskFrom"/>
      <TaskForm mensaje="Soy el TaskForm"/>
      <Saludo mensaje="componente ObjectiveForm"/>
      <ObjectiveForm />
      <Saludo mensaje="componente TaskResumeToday"/>
      <ResumeToday/>
    
    </div>
  );
}

export default App;
