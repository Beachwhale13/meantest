let Users = require('./../controllers/users')
let Surveys = require('./../controllers/surveys')
let path = require('path');

module.exports = (app) =>{
  console.log("in routes")
  app.post('/api/login', Users.login);
  app.get('/api/current', Users.getCurrent);
  app.post('/api/user/:id', Surveys.createPoll);
  app.get('/api/surveys', Surveys.getAll);
  app.get('/api/logout', Users.logout);
  app.get('/api/poll/:id', Surveys.getOne);
  app.delete('/api/poll/:id', Surveys.delete);

  app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
}
