const router = require("express").Router();
const Admin = require("../model/admin.model");

const express = require("express");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

// Under construction
passport.use(
  new LocalStrategy((username, password, done) => {
    Admin.findOne({ username: username }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { msg: "Incorrect username" });
      }
      bcrypt.compare(password, user.password, (err, res) => {
        if (res) {
          // passwords match! log user in
          return done(null, user);
        } else {
          // passwords do not match!
          return done(null, false, { msg: "Incorrect password" });
        }
      });
    });
  })
);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  Admin.findById(id, function(err, user) {
    done(err, user);
  });
});
// Under construction

router.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
router.use(passport.initialize());
router.use(passport.session());
router.use(express.urlencoded({ extended: false }));

router.route("/create").post((req, res, next) => {
  console.log(req.body);
  bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
    if (err) {
      console.log("An error occurred, couldn't sign you up");
    } else {
      const admin = new Admin({
        username: req.body.username,
        password: hashedPassword
      }).save(err => {
        if (err) {
          return next(err);
        }
        res.redirect("/");
      });
    }
  });
});

module.exports = router;
