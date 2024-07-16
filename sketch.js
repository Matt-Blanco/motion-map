// let theta1 = 0
// let theta2 = 0
// let theta3 = 0

// let dthetaXdt = 0;
// let dthetaYdt = 0;
// let dthetaZdt = 0;

// let dtheta1dt = 0;
// let dtheta2dt = 0;
// let dtheta3dt = 0;

// let thetaX = 0;
// let thetaY = 0;
// let thetaZ = 0;

// let det = false

// let t= 0
// let dt = 1;

// function cb(event){
//   dthetaXdt= event.rotationRate.alpha * PI / 180;
//   dthetaYdt= event.rotationRate.beta * PI / 180;
//   dthetaZdt= event.rotationRate.gamma * PI / 180;
  
//   let ct = millis()/1000;
//   dt= ct - t;
//   t= ct;

//   det = true;
// }

const width = 400;
const height = 400;

let x = width / 2;
let y = height / 2;

function handleMotionEvent(event) {
  x += event.acceleration.x;
  y += event.acceleration.y;

  if (x <= 0) {
    x = 0;
  } else if (x >= width) {
    x = width;
  } 

  if (y <= 0) {
    xy= 0;
  } else if (y >= height) {
    y = height;
  } 

  // const z = event.accelerationIncludingGravity.z;
}

function onClick(){
  if (typeof DeviceMotionEvent.requestPermission === 'function') {
    DeviceMotionEvent.requestPermission()
      .then(permissionState => {
        if (permissionState === 'granted') {
          window.addEventListener('devicemotion', handleMotionEvent);
        }
      })
      .catch(console.error);
  } else {
    window.addEventListener('devicemotion', handleMotionEvent);
    // handle regular non iOS 13+ devices
  }

  document.getElementById("motion-button").style.display = "none";
}

function setup() {
  createCanvas(width, height);
}

function draw() {
  background(255);

  fill(211, 174, 42);
  ellipse(x, y, 20, 20);

  textSize(24);
  text(`x: ${x}, y: ${y}`, width / 2, height / 2 + 30);
  text(`x2: ${x2}, y2: ${y2}`, width / 2, height / 2 + 60);

}

// function setup() {
//   createCanvas(800, 800, WEBGL);
// }

// function draw(){
 
//   background(0);
  
//   directionalLight(255,255,255,-1,-1,-1);
//   ambientLight(80);

//   dtheta1dt = dthetaXdt;
//   dtheta2dt = dthetaYdt * sin(thetaX) + dthetaZdt * cos(thetaX);
//   dtheta3dt =- dthetaYdt * cos(thetaX) * cos(theta2) + dthetaZdt * sin(thetaX) * cos(theta2)
  
//   stroke(0);


//   let r1 = 100;
//   let r2 = 80;
//   let r3 = 60;

//   noStroke()
//   let detailX = 48 * 2;
//   let detailY = 32;

//   //outer ring
//   torus(r1, 5, detailX, detailY)

//   push()
//   translate((r1 + r2) / 2, 0, 0)
//   rotateZ(PI / 2)
//   cylinder(5, 20)
//   pop()
//   push()
//   translate(-(r1 + r2) / 2, 0, 0)
//   rotateZ(PI / 2)
//   cylinder(5, 20)
//   pop()

//   //middle ring
//   rotateX(theta1)
//   rotateX(PI/2)
//   torus(80,5,detailX,detailY)

//   push()
//   translate(0,(r2+r3)/2,0)
//   rotateY(PI/2)
//   cylinder(5,20)
//   pop()

//   push()
//   translate(0,-(r2+r3)/2,0)
//   rotateY(PI/2)
//   cylinder(5,20)
//   pop()


//   //inner ring
//   rotateY(theta2);
//   rotateY(PI/2)
//   torus(r3 ,5 , detailX, detailY)

//   //box
//   rotateX(theta3);
//   box(50)
//   rotateZ(PI/2)
//   cylinder(5, 2 * r3)

//   if(det && dtheta1dt == dtheta1dt){
//     theta1 += dtheta1dt * dt;
//     theta2 += dtheta2dt * dt;
//     theta3 += dtheta3dt * dt;
    
//     thetaX += dthetaXdt * dt;
//     thetaY += dthetaYdt * dt;
//     thetaZ += dthetaZdt * dt;
//   }
// }
