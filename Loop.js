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
