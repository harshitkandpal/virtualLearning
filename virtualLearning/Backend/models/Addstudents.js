const mongoose = require("mongoose")

const AddstudentsSchema = mongoose.Schema({
   name: String,
   email: String,
   password: String,
   grade: String,
   areaOfStudy: String,
   skills: Array,
   language: String,
   qualification: String,
   specialization: String,
   teachingExp: String,
   type: String,
   addData: String,
   timing: Array,
   videoLink: String,
   resource: String,
   profilePhoto: String,
   doc: String,

})

module.exports = mongoose.model("Addstudents", AddstudentsSchema);