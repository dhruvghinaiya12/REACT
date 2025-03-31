import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Students from '../pages/Students'
import AddStudent from '../pages/AddStudent'
import StudentDetails from '../pages/StudentDetails'
import PrivateRoute from './PrivateRoute'


const AllRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/students" element={<PrivateRoute><Students/></PrivateRoute>} />
        <Route path="/add-student" element={<PrivateRoute><AddStudent/></PrivateRoute>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/students/:id" element={<PrivateRoute><StudentDetails/></PrivateRoute>} />
        </Routes>
    
    </div>
  )
}

export default AllRoutes
