import React, { useState } from "react";
import "./AddProduct.css";

import Sidebar from "./components/Sidebar";
import axios from "axios";

// This component allows admins to add new products to the inventory
export default function AddProduct() {
  const [imagePreview, setImagePreview] = useState(null);
  const [productData, setProductData] = useState({ productName: "" });

  const handleProductImage = (e) => {
    console.log("This works");
    setProductData({ ...productData, [e.target.name]: e.target.files[0] });
    const file = e.target.files[0];
    console.log(file);
    console.log(productData);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("This works");
    await axios.post("http://localhost:5000/admin/add-product", productData);
  };
  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <main className="dashboard-content">
        <div className="add-product-wrapper">
          <h1>Add New Product</h1>
          <form className="product-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Product Name</label>
              <input
                type="text"
                name="productName"
                value={productData.productName || ""}
                onChange={(e) => {
                  setProductData({
                    ...productData,
                    [e.target.name]: e.target.value,
                  });
                }}
                placeholder="Enter product name"
              />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input
                type="number"
                placeholder="Enter price"
                name="productPrice"
                onChange={(e) => {
                  setProductData({
                    ...productData,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                placeholder="Enter product description"
                name="productDescription"
                onChange={(e) => {
                  setProductData({
                    ...productData,
                    [e.target.name]: e.target.value,
                  });
                }}
              ></textarea>
            </div>
            <div className="form-group">
              <label>Product Image</label>
              <input
                type="file"
                accept="image/*"
                name="productImage"
                onChange={handleProductImage}
              />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="image-preview"
                />
              )}
            </div>
            <button type="submit" className="submit-btn">
              Add Product
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
