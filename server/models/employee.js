/*
*============================
*Author: Richard Krasso
*Edited by: Gabriel Sanchez
*Date: 3/10/2020
*=============================
*/

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const item = require('./item')

// Employee Scheema


let EmployeeSchema = new Schema({
    empId: {type: String, required: true },
    firstName:{type: String, required:true},//chapter 8 p128
    lastName:{type:String, required:true},
    todo: [item],
    done: [item]

    //createdAt: {type: Date, default: Date.now},

});

// Exporting The Model
module.exports = mongoose.model('Employee', EmployeeSchema)
