import React from 'react';

const UserDataCard = ({ id, username, email, number, password, ondelete }) => {
  const handleDelete = () => {
    ondelete(id);
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{username}</h5>
          <p className="card-text">Email: {email}</p>
          <p className="card-text">Number: {number}</p>
          <p className="card-text">Password: {password}</p>
          <button onClick={handleDelete} className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDataCard;
