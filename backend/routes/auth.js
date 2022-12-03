const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

// const JWT_SECRET = ""

// create a User using POST "/api/auth/createuser". doesn't require Auth
router.post(
  "/createuser",
  [
    body("name").isLength({ min: 3 }),
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // If there are errors, return that req and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // check whether the user with this email exists already
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "sorry a user with this email already exists" });
      }
      // using bcrypt
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt)
      // Create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      //   .then(user => res.json(user))
      // .catch(err=> console.log(err));
      // res.json({error: 'please enter a unique value for email', message: err.message})

      const data = {
        user: {
          id: user.id
        }
      }
      const JWT_SECRET = "helloiamsecret"
      const authToken = jwt.sign(data, JWT_SECRET);
      // console.log(jwtData);
      res.json({authToken});

    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured")
    }
  }
);

module.exports = router;