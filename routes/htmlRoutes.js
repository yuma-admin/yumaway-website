var path = require("path");
var express = require("express");

module.exports = function (app){

  app.use(express.static('public'));

  // Homepage Route
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html", "home.html"));
  });
  
  // Colorado Deals Page Route 
  app.get("/colorado-deals", function(req, res) {
    res.sendFile(path.join(__dirname , "../public/html",  "colorado-deals.html"));
  });
  
  // Michigan Deals Page Route 
  app.get("/michigan-deals", function(req, res) {
    res.sendFile(path.join(__dirname , "../public/html",  "michigan-deals.html"));
  });
  
  // React App Route 

  app.get(['/locations', '/locations/*'], function(req, res, next) {
    res.sendFile(path.resolve(__dirname, '../react-app/build', 'index.html'));
  });

  // res.sendFile('index.html', {root: path.join(__dirname, '../react-app/build')});
}


  