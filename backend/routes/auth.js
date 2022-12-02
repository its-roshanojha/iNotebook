const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

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
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      //   .then(user => res.json(user))
      // .catch(err=> console.log(err));
      // res.json({error: 'please enter a unique value for email', message: err.message})
      res.json(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured")
    }
  }
);

module.exports = router;