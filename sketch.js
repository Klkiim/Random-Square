var x=0;
var y=0;
var xx=0;
var yy=0;
var c=0;
var s=0;
var ss=0;
var b=0;

function setup() {
  createCanvas(800, 800);
  colorMode(HSB);
  x=random(100,300);
  y=random(100,300);
  xx= random(-10,10);
  yy= random(-10,10);
  c= random(0,360);
  ss= random(1,5);
  if(ss<2){
    background(0,100,0);
  }
}

function draw() {
  x=x+xx;
  y=y+yy;
  if(ss<2){
    s= random(10,20);
    b= random(50,100);
  }
  else{
    s= random(20,100);
    b= random(75,100);
    if(s<50){
      b=100
    }
  }
  noStroke();
  fill(random(c,c+50),s,b);
  rect(x,y,random(-70,70),random(-70,70));
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
    yy=yy*-1
  }
}