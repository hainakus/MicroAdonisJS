'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const mongoose = require('mongoose');



  const product = mongoose.Schema({
  name: String,
  age: Number,
  class: String,
  school_fees: {
               type: String,
               enum: ['Not Paid', 'Full Payment', 'Partial Payment'],
               default: 'Not Paid'
              },
  test_1: String,
  test_2: String
});



module.exports = mongoose.model('Product', product);
