/*

Blank P5 template
 */

let currentPosition;
let prevPosition;

function setup()
{
createCanvas(windowWidth,windowHeight);


}


function draw() 
{
background(255);
fill(0)
line(width/2,0,width/2,height);

if(mouseX>=width/2)
{
currentPosition = "RIGHT";
}
else
{
currentPosition = "LEFT";
}


if(currentPosition!=prevPosition)
{

	console.log(currentPosition);
}




prevPosition=currentPosition;
}
