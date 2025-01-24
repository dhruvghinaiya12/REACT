import * as Yup from "yup";


let NameRegex=/^[a-zA-Z]+[a-zA-Z\s]*$/;
let NumberRegex=/^\d{10}$/;
let PasswordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const ValidateSchema = Yup.object().shape({
    name:Yup.string().matches(NameRegex,"Name should be at least 2 characters long and contain only letters and spaces").required("Required"),
    email:Yup.string().email("please enter valid email address").required("required"),
    age:Yup.number().positive("Age must be a positive number").integer("Age must be an integer").required("Required"),
    number:Yup.string().matches(NumberRegex, "Please enter valid 10-digit phone number").required("Required"),
    gender:Yup.string().oneOf(["male", "female", "other"], "Please select gender").required("Required"),
    password: Yup.string().min(8, "Password should be at least 8 characters long")
    .matches(PasswordRegex,"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character")
    .required("Required"),
});
