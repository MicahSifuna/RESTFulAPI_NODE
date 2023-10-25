const mongoose = require('mongoose')      

const contactSchema = mongoose.Schema({
      name: {
            type: String,
            required: [true, "please add the contact name"]
      },
      age: {
            type: String,
            required: [true, "please add the age"]
      },
      email: {
            type: String,
            required: [true, "please add the contact emil address"]
      },
      phone: {
            type: String,
            required: [true, "please add the contact phone number"]
      }
},{
      timestamps: true
},)

module.exports = mongoose.model("Contact", contactSchema);