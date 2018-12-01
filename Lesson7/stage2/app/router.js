var express = require('express');
var Blog = require('./models/news.js');
var router = express.Router();
router.get('/', function(req, res){
	res.send('hi');
});
router.get('/bye', function(req, res){
	res.send('bye');
});
router.get('/page', function(req, res){
	res.render('index', {title: 'Hey', message:"Leha"});
});
router.get('/create', function(req, res){
	let newBlog = new Blog({
		title: "tiiitle",
		body: "lehaaaaa"
	});
	newBlog.save(function(err, blog)
	{
		if (err)
		{
			return res.status(422).json(err);
		}
		else
		{
			res.status(200).json(blog);
		}
	});
})
router.get('/news', function(req, res)
{
	Blog.find({}).exec(function(err, blog)
	{
		if (err)
		{
			return res.status(422).json(err);
		}
		else
		{
			res.status(200).json(blog);
		}
	});
})
module.exports = router;