let mongoose = require('mongoose');
let Survey = mongoose.model("Survey");
let User = mongoose.model("User");

module.exports = {
  createPoll: (req, res)=>{
    User.findOne({_id: req.params.id}, (err, user)=>{
      console.log("found user", user)
      console.log(user._id)
      var survey = new Survey(req.body);
      survey.option1.answer = req.body.option1;
      survey.option2.answer = req.body.option2;
      survey.option3.answer = req.body.option3;
      survey.option4.answer = req.body.option4;
      survey.owner = user._id;
      User.update({_id: req.params.id}, {$push: {surveys: survey}}, (err)=>{
        survey.save((err)=>{
          if(err){
            console.log("errors", err);
          }
          else{
            res.json(true);
          }
        })
      })
    })
  },
  getAll: (req, res)=>{
    Survey.find({}, false, true).populate('owner')
    .exec((err, allInfo)=>{
      if(err){
        console.log("couldn't find 'em'")
      }
      else{
        console.log(allInfo);
        res.json(allInfo);
      }
    })
  },
  getOne: (req, res)=>{
    // console.log("trying to get one", req.params.id)
    Survey.findOne({_id: req.params.id}).populate('owner').exec((err, foundPoll)=>{
      if(err){
        console.log("goofed")
        res.json(false);
      }
      else{
        // console.log("found the question");
        res.json(foundPoll);
      }
    })
  },
  delete: (req, res)=>{
    Survey.remove({_id: req.params.id}, (err)=>{
      res.json(true);
    })
  }
}
