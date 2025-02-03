import React from "react";
import { useFormik } from "formik";
import { orderValidationSchema } from "./Schema";
import ApiLink from "./config/API";

const OrderForm = () => {
  const formik = useFormik({
    initialValues: {
      productName: "",
      quantity: "",
      price: "",
      deliveryDate: "",
      email: "",
    },

    onSubmit: (values) => {
      console.log(values);
      postData(values);
      formik.resetForm({ values: formik.initialValues });
    },

    validationSchema: orderValidationSchema,
  });

  const postData = async (data) => {
    try {
      let res = await ApiLink.post("/order", data);
      console.log(res.data);
      alert("Order successfully placed")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-lg w-full p-6 bg-white rounded-lg shadow-lg">
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Product Name</label>
            <input
              type="text"
              name="productName"
              value={formik.values.productName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            />
            {formik.errors.productName && formik.touched.productName && (
              <p className="text-red-500 text-sm">{formik.errors.productName}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={formik.values.quantity}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            />
            {formik.errors.quantity && formik.touched.quantity && (
              <p className="text-red-500 text-sm">{formik.errors.quantity}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            />
            {formik.errors.price && formik.touched.price && (
              <p className="text-red-500 text-sm">{formik.errors.price}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Delivery Date</label>
            <input
              type="date"
              name="deliveryDate"
              value={formik.values.deliveryDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            />
            {formik.errors.deliveryDate && formik.touched.deliveryDate && (
              <p className="text-red-500 text-sm">{formik.errors.deliveryDate}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            />
            {formik.errors.email && formik.touched.email && (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            )}
          </div>

          <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
