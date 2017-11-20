let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let path = require('path');
let app = express();
let sessConfig = {secret: "Secretcode", saveUninitialized: true}

app.use(bodyParser.json({ extendded: true }));
app.use(express.static(path.join(__dirname, 'public','dist')));
app.use(session(sessConfig));

require('./server/config/mongoose');

var routes_setter = require('./server/config/routes');
routes_setter(app);

app.listen(8000, ()=>{
  console.log("listening on port 8000")
})
