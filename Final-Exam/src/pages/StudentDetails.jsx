import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudentById, deleteStudent } from "../redux/students/studentsApi";
import { useNavigate, useParams } from "react-router-dom";
import StudentDetailsCard from "../components/StudentDetailsCard";
import StudentEditForm from "../components/StudentEditForm";

const StudentDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { student, loading, error } = useSelector((state) => state.students);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getStudentById(id));
  }, [id, dispatch]);

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  const handleDelete = () => {
      dispatch(deleteStudent(id));
      navigate("/students");
      alert("Student deleted");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (loading)
    return <div className="text-center text-gray-600">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Student Details
      </h2>

      {student ? (
        <>
          <StudentDetailsCard
            {...student}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />

          <div className="mt-6 text-center">
            <button
              onClick={() => navigate(-1)}
              className="bg-gray-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition-transform transform hover:scale-105 shadow-md"
            >
              Go Back
            </button>
          </div>

          {isModalOpen && (
            <StudentEditForm student={student} onClose={closeModal} />
          )}
        </>
      ) : (
        <div className="text-center text-gray-500">
          No student found with the given ID.
        </div>
      )}
    </div>
  );
};

export default StudentDetails;
