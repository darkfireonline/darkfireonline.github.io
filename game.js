import System.IO;
console.log("Enter your username");
var userName = prompt();
var path = Path.Combine(Directory.GetCurrentDirectory(), saves());
path = Path.Combine(path, userName);
if (File.Exists(path))
{
  alert("It worked");
}
else{
  alert("nope");
}
