import React from 'react'
import { Route, Routes } from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import AssignTask from '../pages/AssignTask';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import TaskDetails from '../pages/TaskDetails';

const AllRoutes = () => {
  return (
    
       <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/assign-task" element={<AssignTask/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/task-details" element={<TaskDetails />} />
      </Routes>
    
  )
}

export default AllRoutes
