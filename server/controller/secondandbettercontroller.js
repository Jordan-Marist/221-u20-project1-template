//Calling model that cotain variables
const betterfeeditem = require('../model/secondandbettermodel')
//creating variable for feed items
var betterfeeditems = [];
//creating each seperate feed item
let betteritem1 =
	betterfeeditem.createbetterfeeditem("Ornn: Age 92, just better", "looking for jg with cc, dont let them move! (Im also better)", "https://www.leagueoflegends.com/en-us/champions/ornn/", "/images/Ornn.jpg");
let betteritem2 =
	betterfeeditem.createbetterfeeditem("Jett: Age 21, just better", "Looking for pocket sage, willing to bark and me- Oops, wrong riot game.(Im also better)", "https://valorant.fandom.com/wiki/Jett", "/images/Jett.jpg");
let betteritem3 =
	betterfeeditem.createbetterfeeditem("Sett: Age 32, just better", "Looking for someone to help me beat up my dad.(Im also better)", "https://leagueoflegends.com/en-us/champions/sett/", "/images/Sett.jpg");
let betteritem4 =
	betterfeeditem.createbetterfeeditem("Yuumi: Age 11, just better", "Looking for someone to give me!(Im also better)", "https://leagueoflegends.com/en-us/champions/yuumi/", "/images/yuumi.jpg");
betterfeeditems.push(betteritem1);
betterfeeditems.push(betteritem2);
betterfeeditems.push(betteritem3);
betterfeeditems.push(betteritem4);
//function to call feed items on webpage
exports.getbetterfeeditems = function (req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(betterfeeditems);
}
//function to post feed items on webpage
exports.savebetterfeeditem = function (req, res) {
	let newbetterfeeditem = betterfeeditem.createbetterfeeditem(req.body.bettertitle, req.body.betterbody, req.body.betterlinkurl, req.body.betterimageurl);
	betterfeeditems.push(newbetterfeeditem);
	res.setHeader('Content-Type', 'application/json');
	res.send(betterfeeditems);
}
//function to call specific feed items
exports.getbetterfeeditem = function (req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(betterfeeditems[req.params.betterfeeditemId]);
}
//function to delete specific feed items
exports.deletebetterfeeditem = function (req, res) {
	betterfeeditems.splice(req.params.betterfeeditemId, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(betterfeeditems);
}
//function to alter and update seperate feed items
exports.updatebetterfeeditem = function (req, res) {
	var updatedbetterfeeditems = betterfeeditems[req.params.betterfeeditemId];

	console.log(req.body.bettertitle);
	if (req.body.bettertitle)

		updatedbetterfeeditems.bettertitle = req.body.bettertitle;
	if (req.body.betterbody)
		updatedbetterfeeditems.betterbody = req.body.betterbody;
	if (req.body.betterlinkurl)
		updatedbetterfeeditems.betterlinkurl = req.body.betterlinkurl;
	if (req.body.betterimageurl)
		updatedbetterfeeditems.betterimageurl = req.body.betterimageurl;

	betterfeeditems[req.params.betterfeeditemId] = updatedbetterfeeditems;
	res.setHeader('Content-Type', 'application/json');
	res.send(betterfeeditems[req.params.betterfeeditemId]);
}
//function to alter and update entire feed
exports.updatewholebetterfeed = function (req, res) {
	betterfeeditems[req.params.betterfeeditemId] = req.body;
	res.setHeader('Content-Type', 'application/json');
	res.send(betterfeeditems);
}


