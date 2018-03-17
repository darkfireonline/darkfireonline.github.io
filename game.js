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
if(fso.FileExists("https:\\www.google.com\\"))
{
	alert("It worked2");
}
else
{
  alert("It did not work2")
}
