//Gets the url which contains the data
var url = window.location.toString();

//vars for the beginning and end of the substr
var start = 0, end = 0;



//function that cuts the url down when needed
function cutter(str, temp){
   var cut = 0;
   cut = str.indexOf("&") + 1;
   return(str.substring(cut, url.length));
}

//Team data
start = url.indexOf("=") + 1;
end = url.indexOf("&");
var team = url.substring(start, end);
console.log(team);
url = cutter(url, team);

//Match data
start = url.indexOf("=") + 1;
end = url.indexOf("&");
var match = url.substring(start, end);
console.log(match);
url = cutter(url, match);

//Alliance Data
start = url.indexOf("=") + 1;
var alli = url.substring(start, url.length);
console.log(alli)

//log for test
//console.log(team + ", " + match + ", " + alli);
