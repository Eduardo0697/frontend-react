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



function App() {

  const [isLoading, setLoading] = useState(true);
  const [goalTasks, setGoalTasks] = useState([]);
  const [messageError, setMessageError] = useState(false);

  const [isLoadingGoals, setLoadingGoals] = useState(true);
  const [goals, setGoals] = useState([]);
  const [messageErrorGoals, setMessageErrorGoals] = useState(false);
  

  const recoverTasksByEmail = (email) => {
    //console.log('Este es el email desde App.js');
    //console.log(email);
    setLoading(true);
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
              <div className="text-center">
                <p className="h4">No task founded</p>
              </div>
            )
          }else{
            return(
              <div className="text-center">
                <p className="h4">Waiting for search</p>
              </div>
            )
          }
    }else{

      if(messageError){
        return(
          <div className="text-center">
            <p className="h4">No task founded</p>
          </div>
        )
      }else{
        return goalTasks.map( (task) => {
          return (
                      <li className="list-group-item">
                          <div className="d-flex">
                              <div className="flex-grow-1">{ task.taskTitle }</div>
                              <button className="btn btn-outline-success mr-3" type="button" data-toggle="button" aria-pressed="false" autoComplete="off">Done</button>
                              <ModalFormTask infoTask={ task }/>                 
                          </div>    
                      </li>
                  )
        });
      }
    }
  }

  const recoverGoalsByEmail = (email) => {
    setLoading(true);
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

  const goalsReturned = () =>{

    if(isLoadingGoals){
      if(messageErrorGoals){
        return(
          <div className="text-center"><p className="h4">No goals founded</p></div>
        )
      }else{
        return(
          <div className="text-center"><p className="h4">Waiting for search</p></div>
        )
      }
    }else{
      if(messageErrorGoals){
        return(
          <div className="text-center"><p className="h4">No goals founded</p></div>
        )
      }else{
        return goals.map( (goal) => {
            return (
                      <li className="list-group-item">
                          <div className="d-flex">
                              <div className="flex-grow-1">{ goal.title }</div>
                              <button className="btn btn-outline-success mr-3" type="button" data-toggle="button" aria-pressed="false" autoComplete="off">Done</button>
                              <ModalFormGoal infoGoal={ goal } />                 
                          </div>    
                      </li>
                    )
        });
      }
    }
  }

  //New Goal

  const recoverNewGoal = (goal) => {
    console.log('POST')
    console.log(goal)
    const email = goal.emailAssociated;
    
    axios
      .post(`https://infinite-river-96726.herokuapp.com/objetivos/${email}`, goal)
      .then((res)=> {
        console.log('Objetivo Subido')
        console.log(res)
      })
      .catch( (err) => {
        console.log(err)
      })
  }


  return (
    <div className="App">
      <header>
        <Navigation/>
      </header>
      
      
      <div className="container container-max">

      <HeroSlider/>

        <div id="resumeTodayTasks" className="min-height-30 mb-5">
          <h4>Your tasks for today</h4>
          <ResumeToday tasks={ tasksReturned() } callbackEmail = { recoverTasksByEmail } />
        </div>

        <div id="resumeGoals" className="min-height-30 mb-5">
          <h4>Your Goals</h4>
          

          <ResumeGoals goals = { goalsReturned() } callbackEmaiGoals = { recoverGoalsByEmail }/>
        </div>
        

        <div id="createGoal" className="min-height-30 mb-5">
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
                  
                    <ModalNewGoal callbackNewGoal = { recoverNewGoal }/>
                 
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="createTask" className="min-height-30 mb-5">
          <h4>Create a new Task</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
