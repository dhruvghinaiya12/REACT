import React from "react";

const StudentDetailsCard = ({ name, email, age, course, phone, address, gender, enrollmentDate, onEdit, onDelete }) => {
  return (
    <div className="relative bg-gray-900 text-white p-8 rounded-2xl shadow-2xl border border-gray-800 overflow-hidden transform transition-all hover:scale-[1.02]">
      
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700/30 to-gray-700/20 blur-2xl opacity-50 rounded-2xl"></div>
      
      <div className="relative z-10 backdrop-blur-xl bg-gray-800/60 p-6 rounded-2xl shadow-lg">
        <h3 className="text-4xl font-extrabold text-blue-400 mb-4 tracking-wide">{name}</h3>

        <div className="space-y-3 text-lg text-gray-300">
          <p><span className="text-blue-400 font-semibold">Email:</span> {email}</p>
          <p><span className="text-blue-400 font-semibold">Age:</span> {age}</p>
          <p><span className="text-blue-400 font-semibold">Course:</span> {course}</p>
          <p><span className="text-blue-400 font-semibold">Phone:</span> {phone}</p>
          <p><span className="text-blue-400 font-semibold">Address:</span> {address}</p>
          <p><span className="text-blue-400 font-semibold">Gender:</span> {gender}</p>
          <p><span className="text-blue-400 font-semibold">Enrollment Date:</span> {enrollmentDate}</p>
        </div>

        <div className="mt-6 flex gap-6">
          <button
            onClick={onEdit}
            className="relative bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition-all hover:shadow-blue-500/50"
          >
            Edit
          </button>

          <button
            onClick={onDelete}
            className="relative bg-red-600 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:bg-red-700 transition-all hover:shadow-red-500/50"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentDetailsCard;
