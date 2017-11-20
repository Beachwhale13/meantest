let mongoose = require('mongoose');
let User = mongoose.model('User');

module.exports = {
  login: (req, res) =>{
    User.findOne({name: req.body.name}).exec((err, foundUser)=>{
      if(err){
        console.log(err);

      }
      else if (foundUser){
        req.session.user = foundUser._id;
        console.log("current user", req.session.user)
        res.json(true);
      }
      else{
        if (!foundUser){
          let newUser = new User(req.body);
          newUser.save((err)=>{
            if(err){
              console.log(err);
              res.json(err);
            }
            else{
              req.session.user = newUser._id;
              console.log("created current user", req.session.user)
              res.json(true);
            }
          })
        }
      }
    })
  },
  getCurrent: (req, res)=>{
    if(req.session.user == undefined){
      res.json({errors:
      {
        getCurrent: {message: "Please log in"}
      }
    });
  }
    else{
      User.findOne({_id: req.session.user}).exec((err,foundUser)=>{
        if(err){
          console.log(err);
        }
        else{
          console.log("found the current user", foundUser)
          res.json(foundUser);
        }
      })
    }
  },
  logout: (req, res)=>{
    req.session.destroy();
  },
}
