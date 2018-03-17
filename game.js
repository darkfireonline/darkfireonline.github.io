var fso = new ActiveXObject("Scripting.FileSystemObject");
//alert("Enter your username");
//var userName = prompt();
function doesFileExist(urlToFile) {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', urlToFile, false);
    xhr.send();

    if (xhr.status == "404") {
        return false;
    } else {
        return true;
    }
}
//if(fso.FileExists("has to be file not URL"))
//{
//	alert("It worked2");
//}
//else
//{
//  alert("It did not work2")
//}
var result = doesFileExist("https://github.com/darkfireonline/darkfireonline.github.io/tree/master/saves/"+userName);

if (result == true) {
    alert("This works");
} else {
    alert("This does not works");
	}
