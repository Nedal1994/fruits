var name = prompt("What's your name?")
alert("Welcome to fruit website " + name)

var favfruit = prompt("What is your favorite fruit ?(apple, pomegranate, orange)?")		

while(favfruit != "apple" && favfruit != "pomegranate" && favfruit != "orange")
{
  favfruit = prompt("You inserted invalid fruit. Please try again")
}

if(favfruit == "apple")
{document.write("<p>"+ "It is available" +"</p>")}	

else if(favfruit == "pomegranate"){document.write("<p>"+ "It is available"+"</p>")} 

else if(favfruit == "orange"){document.write("<p>"+ "It is available" +"</p>")}		  

else 
{ alert("Not available") }

var fruit = prompt("How much do you want ?")
for(i=1;i<=10;i++)
{
  if(fruit <=10)
  {
    document.write("Its available")
    document.write("<br>")
    document.write("\n");
  }
  else
  {
    document.write("Invalid number")
    document.write("<br>")
    document.write("\n");
  }
}