import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Students from '../pages/Students'
import AddStudent from '../pages/AddStudent'
import StudentDetails from '../pages/StudentDetails'


const AllRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/students" element={<Students/>} />
        <Route path="/add-student" element={<AddStudent/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/student-details/:id" element={<StudentDetails/>} />
        </Routes>
    
    </div>
  )
}

export default AllRoutes
