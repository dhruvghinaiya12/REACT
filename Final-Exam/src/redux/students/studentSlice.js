import { createSlice } from "@reduxjs/toolkit";
import { addStudent, deleteStudent, getStudentById, getStudents, updateStudent } from "./studentsApi";

const initialState = {
  students: [],
  student: null,
  loading: false,
  error: null,
};

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStudents.pending, (state) => {
        state.loading = true;
      })
      .addCase(getStudents.fulfilled, (state, action) => {
        state.students = action.payload;
        state.loading = false;
      })
      .addCase(getStudents.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      .addCase(getStudentById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getStudentById.fulfilled, (state, action) => {
        state.student = action.payload;
        state.loading = false;
      })
      .addCase(getStudentById.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      .addCase(addStudent.pending, (state) => {
        state.loading = true;
      })
      .addCase(addStudent.fulfilled, (state, action) => {
        state.students.push(action.payload);
        state.loading = false;
      })
      .addCase(addStudent.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      .addCase(updateStudent.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateStudent.fulfilled, (state, action) => {
        const index = state.students.findIndex((s) => s.id === action.payload.id);
        if (index !== -1) {
          state.students[index] = action.payload;
        }
        state.loading = false;
      })
      .addCase(updateStudent.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      .addCase(deleteStudent.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.students = state.students.filter((s) => s.id !== action.payload);
        state.loading = false;
      })
      .addCase(deleteStudent.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default studentsSlice.reducer;