import React from 'react';

function Navigation(){
    return(
        <div className="Navigation mb-5">
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
                <a className="navbar-brand" href="#">Focus</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Goals
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#resumeGoals">My Goals</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#createGoal">New Goal</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Tasks
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#createNewTask">New Task</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#resumeTodayTasks">Today</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Week</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Month</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navigation;