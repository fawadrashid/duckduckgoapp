var fs = require('fs');

var express = require('express'),
  router = express.Router(),
  Article = require('../models/article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  var articles = [new Article(), new Article()];
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });

    fs.writeFile("public/tmp/test", "Hey there!", function(err) {
    if(err) {
        return console.log(err);
    }
    else {
    	return console.log("Hurray!!!!");
    }


    console.log("The file was saved!");
}); 
});
