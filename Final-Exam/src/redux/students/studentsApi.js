import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiLink from "../../services/apiClient";

export const getStudents = createAsyncThunk(
  "students/getStudents",
  async (_, { rejectWithValue }) => {
    try {
      const response = await ApiLink.get("/students");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch students");
    }
  }
);

export const getStudentById = createAsyncThunk(
  "students/getStudentById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await ApiLink.get(`/students/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Student not found");
    }
  }
);

export const addStudent = createAsyncThunk(
  "students/addStudent",
  async (studentData, { rejectWithValue }) => {
    try {
      const response = await ApiLink.post("/students", studentData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to add student");
    }
  }
);

export const updateStudent = createAsyncThunk(
  "students/updateStudent",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await ApiLink.patch(`/students/${id}`, updatedData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to update student");
    }
  }
);


export const deleteStudent = createAsyncThunk(
  "students/deleteStudent",
  async (id, { rejectWithValue }) => {
    try {
      await ApiLink.delete(`/students/${id}`);
      return id; 
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to delete student");
    }
  }
);
