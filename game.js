var fso = new ActiveXObject("Scripting.FileSystemObject");
//alert("Enter your username");
//var userName = prompt();
if(fso.FileExists("https://www.google.com/"))
{
	alert("It worked");
}
else
{
  alert("It did not work")
}
