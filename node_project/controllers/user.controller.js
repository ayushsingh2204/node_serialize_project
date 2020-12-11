const db = require("../models");
const Users = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.createUser = (req, res) => {
   // Validate request
   if (!req.body.Uname) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a User
  const user = {
    Uname: req.body.Uname,
    EmailId: req.body.EmailId,
    AadharId: req.body.AadharId,
    Locality: req.body.Locality,
    MobNo: req.body.MobNo,
    Password: req.body.Password,
    ConfirmPassword: req.body.ConfirmPassword,
    Role: req.body.Role
  };

  // Save User in the database
  Users.create(user)
    .then(data => {
        console.log(data);
        
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
};

exports.findAllUsers = (req, res) => {
    Users.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Users."
        });
      });
  };