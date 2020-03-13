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
import ModalFormGoal from './Objective/ModalForm';
import ModalFormTask from './Task/ModalForm';
import Navigation from './Home/Navigation';
import axios from 'axios';
import ResumeGoals from './Objective/ResumeGoals';
import HeroSlider from './Home/HeroSlider'
import ModalNewGoal from './Objective/ModalNewGoal';
import ModalCreateTask from './Task/ModalCreateTask';
import HeroFooter from './Home/HeroFooter';
import Footer from './Home/Footer';



function App() {

  const [isLoading, setLoading] = useState(true);
  const [goalTasks, setGoalTasks] = useState([]);
  const [messageError, setMessageError] = useState(false);

  const [isLoadingGoals, setLoadingGoals] = useState(true);
  const [goals, setGoals] = useState([]);
  const [messageErrorGoals, setMessageErrorGoals] = useState(false);
  

  ////
  //Actualizar un task

  const [ statusUpdateTask, setStatusUpdateTask] = useState(false);
  const changeStatusUpdateTask = (formClosed) => {
    if(formClosed){
      setStatusUpdateTask(false)   
    }
  }

  const updateTask = (taskUpdated) =>{
    console.log('Actualizare el Task!')
    console.log(taskUpdated)

    const email = taskUpdated.emailAssociated;
    const idObj = taskUpdated.idGoal;
    const _id = taskUpdated._id;

    const task ={
      taskTitle : taskUpdated.taskTitle,
      description : taskUpdated.description,
      importance: taskUpdated.importance,
      frequency: taskUpdated.frequency,
      isAcomplished: taskUpdated.isAcomplished
    }

    axios.patch(`https://infinite-river-96726.herokuapp.com/objetivos/usuario/tasks/${_id}?email=${email}&idObj=${idObj}`,task)
      .then((res) => {
        console.log('Task actualizado')
        console.log(res.request.status)
        if(res.request.status === 200) setStatusUpdateTask(true)
        else setStatusUpdateTask(false)

      })
      .catch((err) => {
        console.log(err);
        setStatusUpdateTask(false)
      })
    
    
  }


  ///


  const recoverTasksByEmail = (email) => {
    //console.log('Este es el email desde App.js');
    //console.log(email);
    //setLoading(true);
    axios
      .get(`https://infinite-river-96726.herokuapp.com/objetivos/tasks/${ email }`)
      .then( (res) => {

        if(res.data.length === 0){
          setMessageError(false);
          setGoalTasks([]);
          setLoading(true);
          setMessageError(true)
        }
        else{
          setMessageError(false)
          setLoading(false);
          setGoalTasks(res.data);
        }
       
        console.log(res)
      })
      .catch( (err) =>  {
        console.log(err);
        setLoading(true);
        setMessageError(true)
      })
  }

  const tasksReturned = () => {
    if(isLoading){
          if(messageError){
            return(
              <div className="d-flex justify-content-center min-h-300">
                <p className="h4 align-self-center">No task founded</p>
              </div>
            )
          }else{
            return(
              <div className="d-flex justify-content-center min-h-300">
                <p className="h4 align-self-center">Waiting for search</p>
              </div>
            )
          }
    }else{

      if(messageError){
        return(
          <div className="d-flex justify-content-center min-h-300">
            <p className="h4 align-self-center">No task founded</p>
          </div>
        )
      }else{
        return goalTasks.map( (task) => {
          return (
                      <li className="list-group-item">
                          <div className="d-flex">
                              <div className="flex-grow-1">{ task.taskTitle }</div>
                              <button className="btn btn-outline-success mr-3" type="button" data-toggle="button" aria-pressed="false" autoComplete="off">Done</button>
                              <ModalFormTask infoTask={ task } callbackUpdateTask = { updateTask } succesUpdate= { statusUpdateTask } callbackStatus= { changeStatusUpdateTask } />                 
                          </div>    
                      </li>
                  )
        });
      }
    }
  }

  const recoverGoalsByEmail = (email) => {
    //setLoading(true);
    axios
      .get(`https://infinite-river-96726.herokuapp.com/objetivos/usuario?email=${ email }`)
      .then( (res) => {
        console.log(res.data)
        setGoals(res.data)
        if(res.data.length === 0){
          setGoals([]);
          setLoadingGoals(true);
          setMessageErrorGoals(true)
        }
        else{
          setMessageErrorGoals(false)
          setLoadingGoals(false);
          setGoals(res.data)
        }
      })
      .catch( (err) =>  {
        console.log(err);
      })
  }

  //Actualizar un goal

  const [ statusUpdateGoal, setStatusUpdateGoal] = useState(false);
  const changeStatusUpdateGoal = (formClosed) => {
    if(formClosed){
      setStatusUpdateGoal(false)
      
    }
  }

  const updateGoal = (goalUpdated) =>{
    console.log('Actualizare el goal!')
    //console.log(goalUpdated)

    const email = goalUpdated.emailAssociated;
    const idObj = goalUpdated.id;

    const goal ={
      title : goalUpdated.title,
      description : goalUpdated.description,
      typeObjective: goalUpdated.typeObjective,
      length: goalUpdated.length,
      obstacles: goalUpdated.obstacles
    }
    axios.patch(`https://infinite-river-96726.herokuapp.com/objetivos/usuario/objetivo?idObj=${idObj}&email=${email}`, goal)
      .then((res) => {
        console.log('Goal actualizado')
        console.log(res.request.status)
        if(res.request.status === 200) setStatusUpdateGoal(true)
        else setStatusUpdateGoal(false)

      })
      .catch((err) => {
        console.log(err);
        setStatusUpdateGoal(false)
      })
    
  }

  const goalsReturned = () =>{

    if(isLoadingGoals){
      if(messageErrorGoals){
        return(
          <div className="d-flex justify-content-center min-h-300"><p className="h4 align-self-center">No goals founded</p></div>
        )
      }else{
        return(
          <div className="d-flex justify-content-center min-h-300"><p className="h4 align-self-center">Waiting for search</p></div>
        )
      }
    }else{
      if(messageErrorGoals){
        return(
          <div className="d-flex justify-content-center min-h-300"><p className="h4 align-self-center">No goals founded</p></div>
        )
      }else{
        return goals.map( (goal) => {
            return (
                      <li className="list-group-item">
                          <div className="d-flex">
                              <div className="flex-grow-1">{ goal.title }</div>
                              <button className="btn btn-outline-success mr-3" type="button" data-toggle="button" aria-pressed="false" autoComplete="off">Done</button>
                              <ModalFormGoal infoGoal={ goal } callbackUpdateGoal = { updateGoal } succesUpdate= { statusUpdateGoal } callbackStatus= { changeStatusUpdateGoal } />                 
                          </div>    
                      </li>
                    )
        });
      }
    }
  }

  //New Goal
  const [statusCrearObjetivo, setStatusCrearObjetivo] = useState(false);
  
  const recoverNewGoal = (goal) => {
    console.log('POST')
    console.log(goal)
    const email = goal.emailAssociated;
    
    axios.post(`https://infinite-river-96726.herokuapp.com/objetivos/${email}`, goal)
      .then((res)=> {
        console.log('Objetivo Subido')
        console.log(res.request.status)
        if(res.request.status === 200) setStatusCrearObjetivo(true)
        else setStatusCrearObjetivo(false)
        
      })
      .catch( (err) => {
        console.log(err)
      })
  }

  //Add Task To Goal
  const [statusAddTaks, setStatusAddTask] = useState(false);

  const addTaskToGoal = (object) => {
    console.log('Add Task');
    const email = object.email;
    const idObj = object.id;
    const task ={
      taskTitle : object.taskTitle,
      description : object.description,
      frequency: object.frequency,
      isAccomplished: false
    }
    axios.patch(`https://infinite-river-96726.herokuapp.com/objetivos/usuario/tasks?idObj=${ idObj }&email=${ email }`, task)
      .then((res) => {
        console.log('Task añadida')
        console.log(res.request.status)
        if(res.request.status === 200) setStatusAddTask(true)
        else setStatusAddTask(false)

      })
      .catch((err) => {
        console.log(err);
        setStatusAddTask(false)
      })
    //setStatusAddTask(true)
  }

  const changeStatusTask = (formClosed) => {
    if(formClosed){
      setStatusAddTask(false)
      
    }
  }

  return (
    <div className="App">
      <header>
        <Navigation/>
      </header>
      
      
      <div className="container container-max">

      <HeroSlider/>

      <div id="createGoal" className="min-height-30 mb-5 m-xl-big">
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">Hey! Create a new <span className="text-muted">Goal !</span></h2>
              <p className="lead text-justify">
              First consider what you want to achieve, and then commit to it. Set SMART (specific, measureable, attainable, relevant and time-bound) goals that motivate you and write them down to make them feel tangible. Then plan the tasks you must take to realize your goal, and cross off each one as you work through them.
              </p>
            </div>
            <div className="col-md-5">
               <div className="card  text-dark text-center">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" className="card-img" alt="..."></img>
                <div className="card-img-overlay d-flex justify-content-center">
                  
                    <ModalNewGoal callbackNewGoal = { recoverNewGoal }  succesPost= { statusCrearObjetivo }/>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="resumeGoals" className="min-height-30 mb-5">
          <ResumeGoals goals = { goalsReturned() } callbackEmaiGoals = { recoverGoalsByEmail }/>
        </div>

        <div id="createNewTask" className="min-height-30 my-3 my-md-5">
          <div className="row featurette">
            
            <div className="col-md-5 order-2 order-md-1">
               <div className="card  text-dark text-center">
                <img src="https://images.unsplash.com/photo-1581007871115-f14bc016e0a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=615&q=80" className="card-img img-max-fit" alt="..."></img>
                <div className="card-img-overlay d-flex justify-content-center">
                  
                    <ModalCreateTask callbackNewTask= { addTaskToGoal }  succesPatch= { statusAddTaks } callbackStatus= { changeStatusTask }/>
                 
                </div>
              </div>
            </div>
            <div className="col-md-7 order-1 order-md-2">
              <h2 className="featurette-heading">Now add <span className="text-muted">tasks </span> to a current goal</h2>
              <p className="lead text-justify">
              It is the work to be done.  Tasks keep us moving, and organizing them into a to-do list can be quite useful in helping us manage our time.  Tasks inform us of what, when and sometimes the how in our daily lives, but they can be ambiguous as to the why. 
              </p>
            </div>
          </div>
        </div>

        <div id="resumeTodayTasks" className="min-height-30 mb-5">
          <ResumeToday tasks={ tasksReturned() } callbackEmail = { recoverTasksByEmail } />
        </div>

        <div>
          <HeroFooter/>
        </div>

        
        

        
      </div>

      <Footer/>
    </div>
  );
}

export default App;
