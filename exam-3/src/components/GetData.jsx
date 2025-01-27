import React, { useState, useEffect } from 'react';
import ApiLink from '../config/Api';
import UserDataCard from './UserCard';

const GetData = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      let res = await ApiLink.get('/StudentData');
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUserData = async (id) => {
    try {
      await ApiLink.delete(`/StudentData/${id}`);
      getData(); 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []); 

  return (
    <div className="container mt-4">
      <h2 className="mb-4">User List</h2>
      <div className="row">
        {data.map((user) => (
          <UserDataCard
            key={user.id}
            {...user}
            ondelete={deleteUserData}
          />
        ))}
      </div>
    </div>
  );
};

export default GetData;
