var express = require('express');
var router = express.Router();

const User= require('../models/dataSchema')

router.post('/submit', async(req, res, next) => {
const FullName = req.body.fullName
const EmailId = req.body.emailId
const PhoneNumber = req.body.phoneNumber

const formData = new User({
  name: FullName,
  email: EmailId,
  phone: PhoneNumber
})

try {
  await formData.save();
  res.json(formData)
} catch(err) {
  console.log(err)
}
});

module.exports = router;
