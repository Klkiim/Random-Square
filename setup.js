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
