// Created by Rahul Pyne

// Phyllotaxis pattern follows the following formula
// φ = n∗137.5◦, r = c√n

// n being the number of points
// c is the constant
let n = 0;
let c = 6;
let degree = 137.5;
let particles = [];
let noise;
let increment = 0;


function setup(){
  createCanvas(600,600);
  // angleMode default is Radian PI/4
  angleMode(DEGREES);
  // colorMode is default RGB mode
  // HSB is Hue, Saturation, Brightness, [alpha]
  colorMode(HSB);
  noise = new OpenSimplexNoise(Date.now());
  //frameRate(30);
}

function draw(){
  background(0);
  // translate the center of the canvas as 0,0
  translate(width/2,height/2);
  // rotate the canvas, so that circles don't form in the same line
  rotate(n * 0.5);
  for(var i = 0; i <= n; i++){
    // i represents the ith particle created
    updateParticle(i,i==n);
    var p = particles[i];
    // if a small increment is added and only take 10% of it, the value growth is gradual and hence sin wave value of color code is very close to the previous particle value.
    var hu = map(sin((i+increment)* 0.3), -1, 1, 0, 360);
    //var sat = map(sin(increment + i * 105), -1, 1, 0, 360);
    var sat = 255;
    var rad = map(cos((i+increment) * 0.3), -1, 1, 6, 10);
    p.show(hu,sat,rad);
  }
  n++;
  increment += 0.1; //  gradual increment ensures gradual movement across the sin and cos wave.
  // Uncomment to frame capture
  //frameManipulation();
  
}

// Uncomment to frame capture
function frameManipulation(){
  if (frameCount === 1) {
    const capture = P5Capture.getInstance();
    capture.start({
      format: "mp4",
      duration: 1200,
    });
    //translating the canvas to have 0,0 in the center
  translate(width/2,height/2);
  }
}

function updateParticle(i,create = false){
  var ang = i * degree;
  var radius = c * sqrt(i);
  var x = radius * cos(ang);
  var y = radius * sin(ang);
  
  if(create){
    var p = new Particle();
    particles.push(p);
  }
  particles[i].pos.x = x;
  particles[i].pos.y = y;
}