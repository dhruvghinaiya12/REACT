import * as Yup from "yup";

export const orderValidationSchema = Yup.object().shape({
  productName: Yup.string()
    .min(3, "Product Name must be at least 3 characters long")
    .required("Product Name is required"),

  quantity: Yup.number()
    .positive("Quantity must be greater than 0")
    .integer("Quantity must be a whole number")
    .required("Quantity is required"),

  price: Yup.number()
    .positive("Price must be a positive number")
    .required("Price is required"),

  deliveryDate: Yup.date()
    .min(new Date(), "Delivery Date must be a future date")
    .required("Delivery Date is required"),

  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
});
