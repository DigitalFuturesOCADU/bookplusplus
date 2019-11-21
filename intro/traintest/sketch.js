/*

Blank P5 template
 */

let trainImage;

function preload()
{
trainImage = loadImage("img/train.jpg");

}


function setup()
{
createCanvas(windowWidth,windowHeight);
image(trainImage,0,0);

}


function draw() 
{
fill(0);
textSize(30);
text(rotationZ,0,height/2);



}
