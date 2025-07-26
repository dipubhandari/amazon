import React, { useState } from "react";
import "./AddProduct.css";

import Sidebar from "./components/Sidebar";

// This component allows admins to add new products to the inventory
export default function AddProduct() {
  const [imagePreview, setImagePreview] = useState(null);
  const [productData, setProductData] = useState({ productName: "" });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <main className="dashboard-content">
        <div className="add-product-wrapper">
          <h1>Add New Product</h1>
          <form className="product-form">
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
                onChange={handleImageChange}
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
