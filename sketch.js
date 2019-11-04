var x=0;    //I set the horizontal position of the square.
var y=0;    //I set the vertical position of the square.
var xx=0;   //I set the horizontal velocity of the square.
var yy=0;   //I set the vertical velocity of the square.
var c=0;    //I set the initial color of the square
var s=0;    //I set the initial saturation of the square
var ss=0;   //This variable will work for the 25% of the dark program.
var b=0;    //In this variable I set the initial brightness of the square.

function setup() {
  createCanvas(800, 800);   //I create a canvas with 800 * 800 pixels
  colorMode(HSB);           //I set the color mode in HSB because its easier to stay with the same color range.
  x=random(100,300);        //I set the variable x to be random between the 100 and the 300 horizontal pixels.
  y=random(100,300);        //I set the variable y to be random between the 100 and the 300 vertical pixels.
  xx= random(-10,10);       //I set the initial horizontal movement of the square between -10 and 10 pixels per frame.
  yy= random(-10,10);       //I set the initial vertical movement of the square between -10 and 10 pixels per frame.
  c= random(0,360);         //I set the first color of the color range that will work with the program.
  ss= random(1,5);          // I create a 25% variable to become the dark program of my program.
  if(ss<2){
    background(0,100,0);    //If this 25% is the one that will work the backgrounds becomes black.
  }
}

function draw() {
  x=x+xx;               //This makes the square to move horitzontaly.
  y=y+yy;               //This makes the square to move verticaly.
  if(ss<2){
    s= random(10,20);
    b= random(50,100);  //If the darkmode is on i make the colors be more grayer.
  }
  else{
    s= random(20,100);
    b= random(75,100);  //if not, the colors will be more vivid
    if(s<50){
      b=100
    }
  }
  noStroke();       //the square will not have strokes
  fill(random(c,c+50),s,b);         //This creates a square that will change the color between 50 (the minimum is 0 and the maximum 50)
  rect(x,y,random(-70,70),random(-70,70));      //here the squares will have between -70 and 70 pixels.
  if(x>800){
    xx=xx*-1
  }
  if(x<0){
    xx=xx*-1
  }
  if(y>800){
    yy=yy*-1
  }
  if(y<0){
    yy=yy*-1        //in all this "if" i make the square to bounce in the edges.
  }
}
