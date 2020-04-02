/*
*============================
*Author: Richard Krasso
*Edited by: Gabriel Sanchez
*Date: 3/10/2020
*=============================
*/


//requires mongoose
const mongoose = require('mongoose');

// create employee schema
let itemSchema = mongoose.Schema({
  text: {type: String}
});
// export model for for employee
module.exports = itemSchema;

