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

    fs.writeFile("/subscriptions/33b0c3a2-7b90-4298-8c07-023605a1fb6d/resourceGroups/NodeJs/providers/Microsoft.Storage/storageAccounts/ndatastorage/test", "Hey there!", function(err) {
    if(err) {
        return console.log(err);
    }
    else {
    	return console.log("Hurray!!!!");
    }


    console.log("The file was saved!");
}); 
});
