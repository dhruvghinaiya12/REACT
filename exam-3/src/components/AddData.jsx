import React, { useState } from 'react'
import ApiLink from '../config/Api';

const AddData = () => {
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        number: "",
        password: "",
      });
    
      const handleInput = (e) => {
        const { name, value } = e.target;
        setUserData({
          ...userData,
          [name]: value,
        });
      };
      const createPost = async (userData) => {
        try {
          const res = await ApiLink.post("/StudentData", userData);
          console.log(res.data);
        
          setUserData({ username: "", email: "", number: "", password: "",}); 
        } catch (error) {
          console.error("Error creating post:", error);
        }
      };
   
      const onSubmit = (e) => {
        e.preventDefault();
        createPost(userData); 
      
      };
      return (
        <div>
          <form onSubmit={onSubmit}>
            <div>
              <label htmlFor="name">username</label>
              <br />
              <input
                type="text"
                id="name"
                name="username"
                value={userData.username}
                onChange={handleInput}
              />
            </div>
            <div>
              <label htmlFor="email">email</label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                value={userData.email}
                onChange={handleInput}
              />
            </div>
            <div>
              <label htmlFor="number">number</label>
              <br />
              <input
                type="number"
                id="number"
                name="number"
                value={userData.number}
                onChange={handleInput}
              />
            </div>
            
            <div>
              <label htmlFor="password">password</label>
              <br />
              <input
                type="text"
                id="password"
                name="password"
                value={userData.password}
                onChange={handleInput}
              />
            </div>
            <input type="submit" value={"Add Data"} />
          </form>
        </div>
      );
    };
export default AddData
