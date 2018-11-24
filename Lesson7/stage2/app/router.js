var express = require('express');
var router = express.Router();
router.get('/', function(req, res){
	res.send('hi');
});
router.get('/bye', function(req, res){
	res.send('bye');
});
router.get('/page', function(req, res){
	res.render('index', {title: 'Hey', message:"Leha"})
})
module.exports = router;