let mongoose = require('mongoose');
var Schema = mongoose.Schema;

SurveySchema = mongoose.Schema({
  question : {type:String, required: [true, "Please enter a question"]},
  owner: [{type: Schema.Types.ObjectId, ref: 'User'}],

  option1 : {
    answer: {type: String},
    votes: {type: Number, default : 0}
  },
  option2 : {
    answer: {type: String},
    votes: {type: Number, default :0}
  },
  option3 : {
    answer: {type: String},
    votes: {type: Number, default:0}
  },
  option4 : {
    answer: {type: String},
    votes: {type: Number, default:0}
  }
},{timestamps: true},
);

mongoose.model("Survey", SurveySchema)
