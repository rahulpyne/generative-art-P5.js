// created by Rahul Pyne

let noise;
let inc = 0.01;
let xoff = 50;
let yoff = 100;

function setup() {
  createCanvas(400, 400, WEBGL);
  // Uncomment to frame capture
  //frameRate(60);
  background(0);
  noise = new OpenSimplexNoise(Date.now());
}

function draw() {
    
  // initializing unit 2d vector.
  v = p5.Vector.random2D();
  //scaling the unit vector to simplex noise ranging from 50 to 100
  // this will alter the raidus of the circle based on noise map
  v.mult(map(noise.noise2D(xoff,yoff),0,1,50,300));
  // changing the r, g, b and a values based on noise and offset
  increment();
  r = noise.noise2D(xoff,yoff);
  increment();
  g = noise.noise2D(xoff,yoff);
  increment();
  b = noise.noise2D(xoff,yoff);
  increment();
  a = noise.noise2D(xoff,yoff);
  increment();
  
  sw = noise.noise2D(xoff,yoff);
  // 
  stroke(map(r,0,1,0,255), map(g,0,1,0,255), map(b,0,1,0,255), map(a,0,1,0,255));
  // altering the stroke weight
  strokeWeight(map(sw,0,1,1,10));
  noFill()
  circle(0,0,v.y);
  
  
  translate(width/2,height/2);
  // Uncomment to frame capture
  //frameManipulation();
  
}

// Uncomment to frame capture
/*function frameManipulation(){
  if (frameCount === 1) {
    const capture = P5Capture.getInstance();
    capture.start({
      format: "mp4",
      duration: 300,
    });
    //translating the canvas to have 0,0 in the center
  translate(width/2,height/2);
  }
}*/

function increment(){
  xoff+=inc;
  yoff= xoff*100;
  yoff+=inc;
}