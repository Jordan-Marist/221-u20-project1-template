//function to declare object params
    function betterfeeditem(bettertitle, betterbody, betterlinkurl, betterimageurl) {
        this.title = bettertitle;
        this.body = betterbody;
        this.linkurl = betterlinkurl;
        this.imageurl = betterimageurl;
    }
       //function tells controller params for feed items 
    exports.createbetterfeeditem = function(bettertitle, betterbody, betterlinkurl, betterimageurl) {
      return new betterfeeditem(bettertitle, betterbody, betterlinkurl, betterimageurl);
    };