import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  desc: { type: String, required: true },
  rating: { type: Array },
  createdAt: { type: Date, default: Date.now() },
});

const productModel = mongoose.model("product", productSchema);

export default productModel;
