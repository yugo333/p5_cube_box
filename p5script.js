let angle = 0;
let w = 25;
let maxD;

function setup(){
  // var canvas = createCanvas(400,400,WEBGL);
  // canvas.parent( 'canvas' );
  createCanvas(400,400,WEBGL);
  maxD =dist(0,0,200,200);
}

function draw(){
  // background(0);
  translate(0,0,-700);
  // translate(width / 2,height / 2);
  rectMode(CENTER);
  rotateX(-QUARTER_PI);
  rotateY(atan(1/sqrt(2)));
  // rotateX(PI/2);
  rotateX(angle *0.1);


  // let offset = 0;
  for(let z = 0; z < height; z +=w) { 
    for(let x = 0; x < width; x +=w) { 
      push();
      let d =dist(x,z,width/2,height/2);
      let offset = map(d,0,maxD,-2,2);
      let a = angle + offset;
      let h = floor(map(sin(a),-1,1,50,300));
      // fill(255);
      translate(x -width/2,0,z- height/2);
      normalMaterial();
      box(w-2,h,w-2);
      // rect(x -width / 2 + w-2,0,w -2,h);
      pop();
    }
    // offset += 0.1;
  }
  angle += 0.08;

}
