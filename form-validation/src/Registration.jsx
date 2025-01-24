import React from "react";
import { useFormik } from "formik";
import "bootstrap/dist/css/bootstrap.css";

const Registration = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      number: "",
      gender: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);      
      formik.resetForm();       
    },
  });

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="card p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Register</h3>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input
              type="number"
              className="form-control"
              id="age"
              name="age"
              value={formik.values.age}
              onChange={formik.handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="number" className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="number"
              name="number"
              value={formik.values.number}
              onChange={formik.handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Gender</label>
            <div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  id="male"
                  name="gender"
                  value="male"
                  onChange={formik.handleChange}             
                />
                <label htmlFor="male" className="form-check-label">Male</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  id="female"
                  name="gender"
                  value="female"
                  onChange={formik.handleChange}
                />
                <label htmlFor="female" className="form-check-label">Female</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  id="other"
                  name="gender"
                  value="other"
                  onChange={formik.handleChange}
                />
                <label htmlFor="other" className="form-check-label">Other</label>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
