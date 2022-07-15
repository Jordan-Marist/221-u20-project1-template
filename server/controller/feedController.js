//Calling model that cotain variables
const feeditem = require('../model/feeditem')
//creating variable for feed items
var feeditems = [];
//creating each seperate feed item
let item1 = 
feeditem.createfeeditem("Ornn: Age 92", "looking for jg with cc, dont let them move!", "https://www.leagueoflegends.com/en-us/champions/ornn/", "/images/Ornn.jpg");
let item2 = 
feeditem.createfeeditem("Jett: Age 21", "Looking for pocket sage, willing to bark and me- Oops, wrong riot game.", "https://valorant.fandom.com/wiki/Jett", "/images/Jett.jpg");
let item3 = 
feeditem.createfeeditem("Sett: Age 32", "Looking for someone to help me beat up my dad.", "https://leagueoflegends.com/en-us/champions/sett/", "/images/Sett.jpg");
let item4 = 
feeditem.createfeeditem("Yuumi: Age 11", "Looking for someone to give me!", "https://leagueoflegends.com/en-us/champions/yuumi/", "/images/yuumi.jpg");
feeditems.push(item1);
feeditems.push(item2);
feeditems.push(item3);
feeditems.push(item4);
//function to call feed items on webpage
exports.getfeeditems = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(feeditems);
}
//function to post feed items on webpage
exports.savefeeditem = function(req, res) {
	let newfeeditem = feeditem.createfeeditem(req.body.title, req.body.body, req.body.linkurl, req.body.imageurl);
	feeditems.push(newfeeditem);
	res.setHeader('Content-Type', 'application/json');
	res.send(feeditems);
}
//function to call specific feed items
exports.getfeeditem = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
  res.send(feeditems[req.params.feeditemId]);
}
//function to delete specific feed items
exports.deletefeeditem = function(req, res) {+

	feeditems.splice(req.params.feeditemId, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(feeditems);
}
//function to alter and update seperate feed items
exports.updatefeeditem = function(req, res) {
	var updatedfeeditems = feeditems[req.params.feeditemId];

	console.log(req.body.title);
	if(req.body.title)

		updatedfeeditems.title = req.body.title;
	if(req.body.body)
		updatedfeeditems.body = req.body.body;
	if(req.body.linkurl)
		updatedfeeditems.linkurl = req.body.linkurl;
	if(req.body.imageurl)
		updatedfeeditems.imageurl = req.body.imageurl;

	feeditems[req.params.feeditemId] = updatedfeeditems;
    res.setHeader('Content-Type', 'application/json');
	res.send(feeditems[req.params.feeditemId]);
}
//function to alter and update entire feed
exports.updatewholefeed = function(req,res) {
    feeditems[req.params.feeditemId] = feeditem.createfeeditem(req.body.title, req.body.body, req.body.linkurl, req.body.imageurl);
    res.setHeader('Content-Type', 'application/json');
    res.send(feeditems);
}


