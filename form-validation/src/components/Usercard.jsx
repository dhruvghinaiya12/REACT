import React from 'react'

const Usercard = ({name,age,number,gender,_id,ondelete}) => {
  return (
    <div>
      <div>
        <h2>{name}</h2>
        <h2>{age}</h2>
        <h2>{number}</h2>
        <h2>{gender}</h2>
        <button onClick={() => ondelete(_id)}>Delete</button>
      </div>
    </div>
  )
}

export default Usercard
