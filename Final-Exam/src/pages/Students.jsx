import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudents } from "../redux/students/studentsApi";
import { useNavigate } from "react-router-dom";

const Students = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { students, loading, error } = useSelector((state) => state.students);

  const [searchName, setSearchName] = useState("");
  const [sortOrder, setSortOrder] = useState("course-asc");
  const [filteredStudents, setFilteredStudents] = useState([]);

  useEffect(() => {
    dispatch(getStudents());
  }, [dispatch]);

  useEffect(() => {
    setFilteredStudents(students);
  }, [students]);

  const sortOptions = [
    { value: "course-asc", label: "Course (A-Z)" },
    { value: "course-desc", label: "Course (Z-A)" },
  ];

  const handleFilter = () => {
    const updatedStudents = students.filter((student) =>
      student.name.toLowerCase().includes(searchName.toLowerCase())
    );
    setFilteredStudents(updatedStudents);
  };

  const handleSort = () => {
    const sortedStudents = [...filteredStudents].sort((a, b) =>
      sortOrder === "course-asc"
        ? a.course.localeCompare(b.course)
        : b.course.localeCompare(a.course)
    );
    setFilteredStudents(sortedStudents);
  };

  if (loading) return <div className="text-center text-gray-600">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Students List</h2>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by Name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="px-4 py-2 border rounded-md bg-gray-800 text-white"
        />
        <button
          onClick={handleFilter}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Search
        </button>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="px-4 py-2 border rounded-md bg-gray-800 text-white"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <button
          onClick={handleSort}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        >
          Apply Sorting
        </button>
      </div>

      {/* Students List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <div
              key={student.id}
              className="bg-gradient-to-r from-gray-700 to-gray-900 p-6 rounded-xl shadow-xl hover:scale-105 transform transition"
            >
              <div className="flex flex-col items-center justify-center text-white">
                <h3 className="text-2xl font-semibold mb-2">{student.name}</h3>
                <p className="text-lg mb-1">{student.email}</p>
                <p className="text-md mb-4 text-blue-300">{student.course}</p>
                <button
                  onClick={() => navigate(`/students/${student.id}`)}
                  className="bg-white text-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center text-gray-500">No students found.</div>
        )}
      </div>
    </div>
  );
};

export default Students;
