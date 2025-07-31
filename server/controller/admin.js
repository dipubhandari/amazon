class AdminController {
  // Test route to check if the user route is working
  static addProduct = (req, res) => {
    console.log("this works");
    console.log(req.body);
    res.send("User route is working!");
  };
}
export default AdminController;
