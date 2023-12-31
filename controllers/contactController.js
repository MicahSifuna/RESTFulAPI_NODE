const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel')

//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler( async (req, res) =>{
      const contacts = await Contact.find();
      res.status(200).json(contacts)
});

//@desc Create  contact
//@route POST /api/contact
//@access public

const createContact = asyncHandler( async(req, res) =>{
      console.log("The request body is", req.body);
      const {name, age, email, phone} = req.body;
      if(!name || !age || !email || !phone){
            res.status(400);
            throw new Error("All fields are required");
      }
      const contact = await Contact.create({
            name,
            age,
            email,
            phone
      })
      res.status(201).json(contact);
});
//@desc Update all contacts
//@route PUT /api/contact/:id
//@access public

//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContact = asyncHandler( async(req, res) =>{
      const contact = await Contact.findById(req.params.id)

      if(!contact){
            res.status(404)
            throw new Error("Contact not Found");
      }
      res.status(200).json(contact);
});

const updateContact = asyncHandler (async(req, res) =>{
      const contact = await Contact.findById(req.params.id)

      if(!contact){
            res.status(404)
            throw new Error("Contact not Found");
      }

      const updatedContact = await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
      )
      res.status(200).json(updatedContact);
});
//@desc Delete all contacts
//@route DELETE /api/contact/:id
//@access public

const deleteContact = asyncHandler (async(req, res) =>{
      const contact = await Contact.findById(req.params.id)

      if(!contact){
            res.status(404)
            throw new Error("Contact not Found");
      }

      await Contact.remove();

      res.status(200).json(contact);
});

module.exports = {getContacts, createContact, getContact, updateContact, deleteContact};