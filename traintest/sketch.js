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
createCanvas(imageWidth,imageHeight);
image(trainImage,0,0);

}


function draw() 
{
ellipse(20,20,100,100);

}
