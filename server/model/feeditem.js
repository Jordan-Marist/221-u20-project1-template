//function to declare object params
    function feeditem(title, body, linkurl, imageurl) {
        this.title = title;
        this.body = body;
        this.linkurl = linkurl;
        this.imageurl = imageurl;
    }
    //function tells controller params for feed items
    exports.createfeeditem = function(title, body, linkurl, imageurl) {
      return new feeditem(title, body, linkurl, imageurl);
    };