import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "./config/firebase";

const Product = () => {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    quantity: "",
    category: "",
  });
  const [productList, setProductList] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const createProduct = async (data) => {
    try {
      let productCollection = collection(db, "products");
      await addDoc(productCollection, data);
      alert("Product added successfully");
      getProduct();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const getProduct = async () => {
    try {
      let productCollection = collection(db, "products");
      let productData = await getDocs(productCollection);
      let products = [];

      productData.forEach((doc) => {
        let data = doc.data();
        products.push({ ...data, id: doc.id });
      });

      setProductList(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await deleteDoc(doc(db, "products", id));
      alert("Product deleted successfully");
      getProduct();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const updateProduct = async () => {
    try {
      if (editId) {
        const productRef = doc(db, "products", editId);
        await updateDoc(productRef, product);
        alert("Product updated successfully");
        setEditId(null);
        setProduct({ title: "", price: "", quantity: "", category: "" });
        getProduct();
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      updateProduct();
    } else {
      createProduct(product);
    }
    setProduct({ title: "", price: "", quantity: "", category: "" });
  };

  const handleEdit = (product) => {
    setProduct(product);
    setEditId(product.id);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-gray-900 text-white rounded-lg shadow-lg">
      <div className="bg-gray-800 p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-bold mb-4">
          {editId ? "Edit Product" : "Add Product"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={product.title}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none"
          />
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none"
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={product.quantity}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none"
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={product.category}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none"
          />
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded transition"
          >
            {editId ? "Update" : "Submit"}
          </button>
        </form>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-3">Product List</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {productList.length > 0 ? (
            productList.map((item) => (
              <div
                key={item.id}
                className="bg-gray-700 p-4 rounded-lg shadow-lg"
              >
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-sm">Price: ${item.price}</p>
                <p className="text-sm">Quantity: {item.quantity} pcs</p>
                <p className="text-sm">Category: {item.category}</p>
                <div className="mt-3">
                  <button
                    onClick={() => handleEdit(item)}
                    className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded transition mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteProduct(item.id)}
                    className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No products available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
