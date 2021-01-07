const { Router } = require('express')
const express = require('express')
const router = express.Router()
const userForm = require('../models/model')

router.get('/', (req, res) => {
  res.render("Home")
})

router.post("/userform", async (req, res) => {
  const formData = {
    Name: req.body.Name,
    Email: req.body.Email,
    PhoneNumber: req.body.PhoneNumber,
    Message: req.body.Message
  }
  let form = await new userForm(formData)
  form = await form.save()
  res.redirect("/")
});
module.exports = router

/*

let form = await new userForm({
    Name: req.body.Name,
    Email: req.body.Email,
    PhoneNumber: req.body.PhoneNumber,
    Message: req.body.Message
  });
  form = await form.save() */