const mongoose = require("mongoose")
const formSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  PhoneNumber: {
    type: Number,
    required: true,
  },
  Message: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('userForm' , formSchema)