import React from 'react'
import { Route, Routes } from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import AssignTask from '../pages/AssignTask';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import TaskDetails from '../pages/TaskDetails';
import Private from './Private';
import { Role } from '../role/CheckRole';
import PageNotFound from '../pages/PageNotFound';

const AllRoutes = () => {
  return (
    
       <Routes>
        <Route path="/" element={<Private><Dashboard/></Private>} />
        {Role(["admin"])?(<Route path="/assign-task" element={<Private><AssignTask/></Private>} />):null}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/task-details/:id" element={<TaskDetails />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    
  )
}

export default AllRoutes
