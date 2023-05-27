const User = require("../models/userModel");
const bcryptjs = require("bcryptjs");

// const securePassword = async (req,res) => {
//   try {
//     const HashedPassword = await bcryptjs.hash(req.body.password, 10);
//     return HashedPassword;
//   } catch (err) {
//     // res.status(400).send(err.message);
//     console.log(err)
//   }
// };

const registerUser = async (req, res) => {
  try {
    // const spassword = await securePassword(req.body.password);
    const hashedPassword = await bcryptjs.hashSync(req.body.password);
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    const userData = await User.findOne({ email: req.body.email });
    if (userData) {
      res
        .status(500)
        .send({ success: false, message: "Your email already exist" });
    } else {
      const user_data = await user.save();
      res.status(200).send({ success: true, data: user_data });
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
};
//login method
const user_login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const userData = await User.findOne({ email: email });
    if (userData) {
      const passwordMatch = await bcryptjs.compareSync(
        password,
        userData.password
      );
      if (passwordMatch) {
        const userResult = {
          _id: userData._id,
          name: userData.name,
          email: userData.email,
          password: userData.password,
        };
        const response = {
          success: true,
          msg: "User Details",
          data: userResult,
        };
        res.status(200).send(response);
      } else {
        res
          .status(200)
          .send({ success: false, msg: "Login credentials are incorrect" });
      }
    } else {
      res
        .status(200)
        .send({ success: false, msg: "Login credentials are incorrect" });
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
};
module.exports = {
  registerUser,
  user_login,
};
