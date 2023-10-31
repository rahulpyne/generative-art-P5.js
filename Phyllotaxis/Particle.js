class Particle{
  constructor(){
    this.pos = createVector(0,0);
  }
  
  show(hu,sat,radius){
    fill(hu,sat,255);
    noStroke();
    circle(this.pos.x, this.pos.y,radius);
  }
}