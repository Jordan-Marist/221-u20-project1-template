//importing external items required for code to function
const express = require('express')
var bodyParser = require('body-parser');
const app = express()
app.use(express.static('client/public'));
app.use(bodyParser.json({ type: 'application/json' }));
//routing of startpage
app.get('/', function (req,res) {
    res.sendFile('index.html', {root: './'})
})
//routing to feed page
app.get('/feed', function (req,res) {
    res.sendFile('feed.html', {root: './'})
})
// calling on controller to use vriable
const feeditems = require('./controller/feedController');
//routing from feed items so thunderclient knows where to go
app.route('/api/feeditem')
	.get(feeditems.getfeeditems)
	.post(feeditems.savefeeditem)
//routing from feed items so thunderclient knows where to go (using id to zero out specific feeed items)
app.route('/api/feeditem/:feeditemId')
	.get(feeditems.getfeeditem)
	.delete(feeditems.deletefeeditem)
	.patch(feeditems.updatefeeditem)
    .put(feeditems.updatewholefeed)
//calling on controller to use variable
 const betterfeeditems = require('./controller/secondandbettercontroller');
//routing from feed tiems so thunder client knows where to go
 app.route('/api/secondandbettermodel')
    .get(betterfeeditems.getbetterfeeditems)
    .post(betterfeeditems.savebetterfeeditem)
//routing from feed items so thunderclient knows where to go (using id to zero out specific feed items)
app.route('/api/secondandbettermodel/:betterfeeditemId')
    .get(betterfeeditems.getbetterfeeditems)
    .delete(betterfeeditems.deletebetterfeeditem)
    .patch(betterfeeditems.updatebetterfeeditem)      
    .put(betterfeeditems.updatewholebetterfeed)
//git bash confirming that webpage is active
app.listen(1337, function () {
console.log('Example app listening on port 1337!')
    })
