import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateStudent } from "../redux/students/studentsApi";

const StudentEditForm = ({ student, onClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ ...student });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateStudent({ id: formData.id, updatedData: formData }));
    alert("Student has been updated");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-80 backdrop-blur-md">
      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-xl w-[450px]">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Edit Student</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 font-semibold">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-100 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-gray-600 font-semibold">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-100 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 font-semibold">Age:</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-100 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-semibold">Course:</label>
              <input
                type="text"
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-100 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-600 font-semibold">Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-100 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-gray-600 font-semibold">Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-100 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 font-semibold">Gender:</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-100 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-600 font-semibold">Enrollment Date:</label>
              <input
                type="date"
                name="enrollmentDate"
                value={formData.enrollmentDate}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-100 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <button
              type="submit"
              className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600 transition-all"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600 transition-all"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentEditForm;
