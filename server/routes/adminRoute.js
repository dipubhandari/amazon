import express from "express";
import AdminController from "../controller/admin.js";
// import multer from "multer";

const adminRouter = express.Router();

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads/productImage");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, file.fieldname + "-" + uniqueSuffix);
//   },
// });

// const upload = multer({ storage: storage });

adminRouter.post("/add-product", AdminController.addProduct);

export default adminRouter;
