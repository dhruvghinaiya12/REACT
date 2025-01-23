import React from 'react'

const UserDataCard = ({ username, email, age, ondelete, _id }) => {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title mb-2">{username}</h5>
          <p className="mb-1"><strong>Email:</strong> {email}</p>
          <p className="mb-2"><strong>Age:</strong> {age}</p>
          <button 
            className="btn btn-danger btn-sm" 
            onClick={() => ondelete(_id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserDataCard
