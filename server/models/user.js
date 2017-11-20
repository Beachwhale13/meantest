let mongoose = require("mongoose");
var Schema = mongoose.Schema;

UserSchema = mongoose.Schema({
  name: {type: String, required: [true, "Please enter a name"], minlength: 5},
  surveys: [{type: Schema.Types.ObjectId, ref:'Survey'}]
},{timestamps: true}
);
mongoose.model("User", UserSchema)
