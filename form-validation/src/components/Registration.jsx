import React from "react";
import { useFormik } from "formik";
import "bootstrap/dist/css/bootstrap.css";
import { ValidateSchema } from "../Schema";
import ApiLink from "../config/API";

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
      postdata(values); 
      formik.resetForm({ values: formik.initialValues });       
    },
    
    validationSchema:ValidateSchema,

  });


  const postdata=async(data)=>{
    try {
      
      let res=await ApiLink.post("/user",data)
      console.log(res.data)
   
    } catch (error) {
      console.log(error);
      
    }
  }
  

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="card p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Register</h3>
        <form onSubmit={formik.handleSubmit}>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              className={`form-control ${formik.errors.name && formik.touched.name ?"border-danger is-invalid":""}`}
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
             {formik.errors.name && formik.touched.name && (<div className="invalid-feedback">{formik.errors.name}</div>)}
          </div>

          <div className="mb-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input
              type="number"
              className={`form-control ${formik.errors.age && formik.touched.age ?"border-danger is-invalid":""}` }
              id="age"
              name="age"
              value={formik.values.age}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
             {formik.errors.age && formik.touched.age && (<div className="invalid-feedback">{formik.errors.age}</div>)}
          </div>

          <div className="mb-3">
            <label htmlFor="number" className="form-label">Phone Number</label>
            <input
              type="text"
              className={`form-control ${formik.errors.number  && formik.touched.number ?"border-danger is-invalid":""}`}
              id="number"
              name="number"
              value={formik.values.number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
           {formik.errors.number && formik.touched.number && (<div className="invalid-feedback">{formik.errors.number}</div>)}
          </div>

          <div className="mb-3">
            <label className="form-label">Gender</label>
            <div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className={`form-check-input ${formik.errors.gender && formik.touched.gender ?"border-danger is-invalid":""}`}
                  id="male"
                  name="gender"
                  value="male"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}             
                />
                <label htmlFor="male" className="form-check-label">Male</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className={`form-check-input ${formik.errors.gender && formik.touched.gender ?"border-danger is-invalid":""}`}
                  id="female"
                  name="gender"
                  value="female"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label htmlFor="female" className="form-check-label">Female</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className={`form-check-input ${formik.errors.gender && formik.touched.gender ?"border-danger is-invalid":""}`}
                  id="other"
                  name="gender"
                  value="other"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label htmlFor="other" className="form-check-label">Other</label>
              </div>
            </div>
            {/* {formik.errors.gender && formik.touched.gender && ( <div className="invalid-feedback">{formik.errors.gender}</div>)} */}

          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className={`form-control ${formik.errors.email && formik.touched.email ?"border-danger is-invalid":""}`}
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email && (<div className="invalid-feedback">{formik.errors.email}</div>)}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className={`form-control ${formik.errors.password  && formik.touched.password ?"border-danger is-invalid":""}`}
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password && formik.touched.password && (<div className="invalid-feedback">{formik.errors.password}</div>)}
          </div>

          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
