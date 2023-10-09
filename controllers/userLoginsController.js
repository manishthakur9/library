const { model } = require("mongoose");
const userLoginsModel = require("../models/userLoginsModel1");
const userLoginsController = require("express").Router();

const userLoginsModel = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];


userLoginsController.post('/auth', (req, res) => {
  const { username, password } = req.body;

  
  const userLoginsController = userLogins.find((u) => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.json({ message: 'Login successful', user });


});





module.exports = userLoginsController;