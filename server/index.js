// Dependencies
var express = require("express");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing and middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Build React App
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static('public'));
// app.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, "../react-app/", "build", "index.html"));
// });

// app.use(express.static(path.join(__dirname, '../react-app/build//static')));
app.use(express.static(path.join(__dirname, '../react-app/build//static')));


// if (process.env.NODE_ENV === 'development') {
//   var cors = require('cors');
//   app.use(cors());
// }

//Routes
require("../routes/htmlRoutes.js")(app);
require("../routes/reactRoute.js")(app);

// =============================================================
// Starts the server to begin listening on specified PORT 
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
