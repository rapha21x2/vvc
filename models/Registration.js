const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },

address: {
  type: String,
  trim: false,
},

order: {
  type: String,
  trim: false,
},
number: {
  type: Number,
  trim: true,
},
amount: {
  type: Number,
  trim: false,
},
});


module.exports = mongoose.model('Registration', registrationSchema);