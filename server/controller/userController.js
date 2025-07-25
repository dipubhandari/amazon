class UserController {
  // Test route to check if the user route is working
  static userTest(req, res) {
    console.log("this works");
    res.send("User route is working!");
  }
}
export default UserController;
