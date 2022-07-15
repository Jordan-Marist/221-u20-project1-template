//Creating Portal Button Varible
var website = document.getElementById('portal_button');
//Redirection in response to user imput
function clickit() {
    goToLocation('https://www.epal.gg/epals/league-of-legends-lfg')
}

//Add response to user imput
website.addEventListener('click', clickit)
//Feed Objects
function feedit(title,body,linkurl,imageurl) {
    this.title=title;
    this.body=body;
    this.linkUrl=linkurl;
    this.imageUrl=imageurl;
    }          
    //Creating feed objects
    let num1 = new feedit ('Senna: Age 23','Best rooter around, Looking for engage ADC.','https://www.leagueoflegends.com/en-us/champions/senna/','/images/Senna.jpg')
    let num2 = new feedit ('Kled: Age 43','Looking for a Jungler to retake my land!','https://www.leagueoflegends.com/en-us/champions/kled/', '/images/Kled.jpg')
    let num3 = new feedit ('Bel-Veth Age 431','Looking for a Bot Lane to help me reclaim my throne on the void','https://www.leagueoflegends.com/en-us/champions/bel-veth/','/images/Belveth.jpeg')
    //array to hold feed 
    let allofthem = [num1, num2, num3];

//displaying feed on webpage
   function showItem(stories) {
        for (var i =0; i < stories.length; i++){
            let item = stories[i];
            document.getElementById("newsfeed").innerHTML += "<div><h1>" + item.title +"</h1></div>" + "<div>" + item.body +"</div>" + "<div><a href ='" +item.linkUrl +"'>Description</a></div>" +"<div><img class = 'feedImage' src =" + item.imageUrl + ">"+"</img></div>";
        }
    }

    window.addEventListener('load', showItem(allofthem));

