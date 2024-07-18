// // // let theta1 = 0
// // // let theta2 = 0
// // // let theta3 = 0

// // // let dthetaXdt = 0;
// // // let dthetaYdt = 0;
// // // let dthetaZdt = 0;

// // // let dtheta1dt = 0;
// // // let dtheta2dt = 0;
// // // let dtheta3dt = 0;

// // // let thetaX = 0;
// // // let thetaY = 0;
// // // let thetaZ = 0;

// // // let det = false

// // // let t= 0
// // // let dt = 1;

// // // function cb(event){
// // //   dthetaXdt= event.rotationRate.alpha * PI / 180;
// // //   dthetaYdt= event.rotationRate.beta * PI / 180;
// // //   dthetaZdt= event.rotationRate.gamma * PI / 180;

// // //   let ct = millis()/1000;
// // //   dt= ct - t;
// // //   t= ct;

// // //   det = true;
// // // }

// // const width = 400;
// // const height = 400;

// // let x = width / 2;
// // let y = height / 2;

// // let aclX = 0;
// // let aclY = 0;

// // function handleMotionEvent(event) {
// //   aclX += event.acceleration.x;
// //   aclY += event.acceleration.y;

// //   if (x <= 0) {
// //     x = 0;
// //   } else if (x >= width) {
// //     x = width;
// //   } 

// //   if (y <= 0) {
// //     y= 0;
// //   } else if (y >= height) {
// //     y = height;
// //   } 

// //   // const z = event.accelerationIncludingGravity.z;
// // }

// // function setup() {
// //   createCanvas(width, height);
// //   ellipseMode(CENTER);
// // }

// // function draw() {
// //   background(255);

// //   x += aclX;
// //   y += aclY;

// //   fill(211, 174, 42);
// //   ellipse(x,  y, 20, 20);

// //   textSize(24);
// //   text(`x: ${Math.floor(x)}, y: ${Math.floor(y)}`, width / 2, height / 2 + 30);

// // }

// // // function setup() {
// // //   createCanvas(800, 800, WEBGL);
// // // }

// // // function draw(){

// // //   background(0);

// // //   directionalLight(255,255,255,-1,-1,-1);
// // //   ambientLight(80);

// // //   dtheta1dt = dthetaXdt;
// // //   dtheta2dt = dthetaYdt * sin(thetaX) + dthetaZdt * cos(thetaX);
// // //   dtheta3dt =- dthetaYdt * cos(thetaX) * cos(theta2) + dthetaZdt * sin(thetaX) * cos(theta2)

// // //   stroke(0);


// // //   let r1 = 100;
// // //   let r2 = 80;
// // //   let r3 = 60;

// // //   noStroke()
// // //   let detailX = 48 * 2;
// // //   let detailY = 32;

// // //   //outer ring
// // //   torus(r1, 5, detailX, detailY)

// // //   push()
// // //   translate((r1 + r2) / 2, 0, 0)
// // //   rotateZ(PI / 2)
// // //   cylinder(5, 20)
// // //   pop()
// // //   push()
// // //   translate(-(r1 + r2) / 2, 0, 0)
// // //   rotateZ(PI / 2)
// // //   cylinder(5, 20)
// // //   pop()

// // //   //middle ring
// // //   rotateX(theta1)
// // //   rotateX(PI/2)
// // //   torus(80,5,detailX,detailY)

// // //   push()
// // //   translate(0,(r2+r3)/2,0)
// // //   rotateY(PI/2)
// // //   cylinder(5,20)
// // //   pop()

// // //   push()
// // //   translate(0,-(r2+r3)/2,0)
// // //   rotateY(PI/2)
// // //   cylinder(5,20)
// // //   pop()


// // //   //inner ring
// // //   rotateY(theta2);
// // //   rotateY(PI/2)
// // //   torus(r3 ,5 , detailX, detailY)

// // //   //box
// // //   rotateX(theta3);
// // //   box(50)
// // //   rotateZ(PI/2)
// // //   cylinder(5, 2 * r3)

// // //   if(det && dtheta1dt == dtheta1dt){
// // //     theta1 += dtheta1dt * dt;
// // //     theta2 += dtheta2dt * dt;
// // //     theta3 += dtheta3dt * dt;

// // //     thetaX += dthetaXdt * dt;
// // //     thetaY += dthetaYdt * dt;
// // //     thetaZ += dthetaZdt * dt;
// // //   }
// // // }

// let location;


// function setup() {
//   createCanvas(displayWidth, displayHeight);
//   background(0);
// }

// function deviceMoved() {
//   // When the device is moved, draw a circle with its position and size
//   // based on the direction in which the device is moved.

//   // Map acceleration along x axis to position along canvas width
//   let x = map(accelerationX, -10, 10, 0, width);

//   // Map acceleration along y axis to position along canvas height
//   let y = map(accelerationY, -10, 10, 0, height);

//   // Map acceleration along z axis to size between 10-100
//   let diameter = map(accelerationZ, -10, 10, 10, 100);

//   // Use alpha value to fade out previously drawn circles
//   background(0, 64);
//   noStroke();
//   circle(x, y, diameter);
// }

// function onClick() {
//   if (typeof DeviceMotionEvent.requestPermission === 'function') {
//     DeviceMotionEvent.requestPermission()
//       .then(permissionState => {
//         if (permissionState === 'granted') {
//           // window.addEventListener('devicemotion', handleMotionEvent);
//           window.addEventListener('deviceorientation', handleDeviceOrientation);
//         }
//       })
//       .catch(console.error);
//   } else {
//     // window.addEventListener('devicemotion', handleMotionEvent);
//     window.addEventListener('deviceorientation', handleDeviceOrientation);
//     // handle regular non iOS 13+ devices
//   }

//   document.getElementById("motion-button").style.display = "none";
// }

// // Declare the global variable to store the device orientation
// let deviceOrientation = 0;
// document.getElementById('motion-button').onclick = onClick;


// // The setup function runs once when the program starts
// function setup() {
//   createCanvas(displayWidth, displayHeight); // Create a canvas for the compass

//   // Attach an event listener to DeviceMotionEvent
//   // document.addEventListener('deviceorientation', handleDeviceOrientation);

//   // Set the text alignment and size
//   textAlign(CENTER, CENTER);
//   textSize(16);
// }

// // This function will be called whenever the device orientation changes
// function handleDeviceOrientation(event) {
//   // 'event.alpha' represents the degree of rotation around the Z-axis (vertical axis)
//   deviceOrientation = event.alpha;
// }

// // The draw function continuously executes after setup()
// function draw() {
//   background(255); // Set the canvas background to white

//   translate(width / 2, height / 2); // Move the origin to the center of the canvas

//   // Draw a circle to represent the compass
//   fill(127);
//   noStroke();
//   circle(0, 0, 200);

//   // Convert the orientation to radians
//   let rads = radians(deviceOrientation);
//   console.log(deviceOrientation);
//   // Calculate the arrow's position based on the orientation
//   let arrowX = 150 * cos(rads);
//   let arrowY = 150 * sin(rads);

//   console.log(arrowX, arrowY, width, height)
//   // Draw the arrow pointing towards the device orientation
//   stroke(0, 255, 0); // Set the arrow color to green
//   line(0, 0, arrowX, arrowY); // Draw the arrow line
//   fill(0, 255, 0); // Fill the arrow tip with green
//   triangle(arrowX, arrowY, -8, arrowY + 5, -8, arrowY - 5);

//   console.log(arrowX, arrowY, -8, arrowY + 5, -8, arrowY - 5)

//   // Display the device orientation as text under the arrow
//   fill(0); // Set text color to black
//   text(nfc(deviceOrientation, 1), 0, 220); // Display the orientation with one decimal place
// }

// // Set global variables for acceleration, circle position, and orientation
// let deviceOrientation = 0;
// let accelerationX = 0;
// let accelerationY = 0;
// let circleX = 0;
// let circleY = 0;
// let circleSpeed = 0; // Speed of the circle
// let maxSpeed = 10; // Maximum speed of the circle

// // We will use this variable to store the previous 
// // orientation value for calculating rotation
// let previousOrientation = 0;

// document.getElementById('motion-button').onclick = onClick;

// function onClick() { 
//     // Request permission for device motion access
//     if (typeof DeviceMotionEvent.requestPermission === 'function') {
//       DeviceMotionEvent.requestPermission()
//         .then(permissionState => { 
//           if (permissionState === 'granted') { 
//             window.addEventListener('devicemotion', handleMotionEvent); 
//             window.addEventListener('deviceorientation', handleDeviceOrientation);
//           } 
//         }) 
//         .catch(console.error); 
//     } else { 
//      // Non-iOS 13+ devices
//       window.addEventListener('devicemotion', handleMotionEvent); 
//       window.addEventListener('deviceorientation', handleDeviceOrientation); 
//     } 
//     document.getElementById("motion-button").style.display = "none"; 
// }  

// function setup() { 
//   createCanvas(displayWidth, displayHeight); 
//   textAlign(CENTER, CENTER); 
//   textSize(16);  
// }  

// function handleDeviceOrientation(event) { 
//   // Update the device orientation value
//   deviceOrientation = event.alpha; 
// } 

// function handleMotionEvent(event) {  
//   // Update the acceleration values
//   accelerationX = event.accelerationIncludingGravity.x; 
//   accelerationY = event.accelerationIncludingGravity.y; 
// } 

// function draw() {  
//   background(255); 
//   translate(width / 2, height / 2);  
  
//   // Draw the background for acceleration and orientation values
//   fill(200);
//   noStroke();
//   rect(-width/2, -180, width, 100);
  
//   // Convert orientation to radians
//   let rads = radians(deviceOrientation); 

//   // Calculate change in orientation from previous frame
//   let deltaOrientation = deviceOrientation - previousOrientation;
//   previousOrientation = deviceOrientation;

//   // Adjust the circle's speed based on device tilt (deltaOrientation)
//   circleSpeed = map(abs(deltaOrientation), 0, 30, 0, maxSpeed);

//   // Limit the maximum speed of the circle
//   if (circleSpeed > maxSpeed) circleSpeed = maxSpeed;

//   // Update the position of the circle using acceleration and speed
//   circleX += accelerationX * circleSpeed;
//   circleY -= accelerationY * circleSpeed;
  
//   // Constrain the circle inside the canvas
//   circleX = constrain(circleX, -width/2, width/2);
//   circleY = constrain(circleY, -height/2, height/2);
  
//   // Draw the circle
//   fill(127);  
//   noStroke();  
//   circle(circleX, circleY, 20); 

//   // Draw the arrow to indicate orientation
//   stroke(0, 255, 0);   
//   line(0, 0, 150 * cos(rads), 150 * sin(rads));
//   fill(0, 255, 0);  
//   triangle(
//     150 * cos(rads),  
//     150 * sin(rads),
//     -8, 
//    150 * sin(rads) + 5,  
//     -8, 
//     150 * sin(rads) - 5
//   );
  
//   // Display device orientation and acceleration values
//   fill(0);
//   text(nfc(deviceOrientation, 1), 0, -150);  
//   text("Acceleration X: " + nfc(accelerationX, 2), 0, -130); 
//   text("Acceleration Y: " + nfc(accelerationY, 2), 0, -110); 
// }

function onClick() {
  if (typeof DeviceMotionEvent.requestPermission === 'function') {
    DeviceMotionEvent.requestPermission()
      .then(permissionState => {
        if (permissionState === 'granted') {
          // window.addEventListener('devicemotion', handleMotionEvent);
          window.addEventListener('deviceorientation', handleDeviceOrientation);
          window.addEventListener('devicemotion', handleDeviceMotion);
        }
      })
      .catch(console.error);
  } else {
    // window.addEventListener('devicemotion', handleMotionEvent);
    window.addEventListener('deviceorientation', handleDeviceOrientation);
    window.addEventListener('devicemotion', handleDeviceMotion);
    // handle regular non iOS 13+ devices
  }

  document.getElementById("motion-button").style.display = "none";
}

// Declare the global variables to store the device orientation and acceleration
let deviceOrientation = 0;
let accelerationX = 0;
let accelerationY = 0;
let accelerationZ = 0;

document.getElementById('motion-button').onclick = onClick;

// The setup function runs once when the program starts
function setup() {
  createCanvas(displayWidth, displayHeight); // Create a canvas for the compass

  // Attach event listeners to DeviceMotionEvent and DeviceOrientationEvent
  // document.addEventListener('deviceorientation', handleDeviceOrientation);
  // document.addEventListener('devicemotion', handleDeviceMotion);

  // Set the text alignment and size
  textAlign(CENTER, CENTER);
  textSize(16);
}

// This function will be called whenever the device orientation changes
function handleDeviceOrientation(event) {
  // 'event.alpha' represents the degree of rotation around the Z-axis (vertical axis)
  deviceOrientation = event.alpha;
}

// This function will be called whenever the device acceleration changes
function handleDeviceMotion(event) {
  // 'event.acceleration.x', 'event.acceleration.y', and 'event.acceleration.z' represent the acceleration in the x, y, and z axes respectively
  accelerationX = event.acceleration.x;
  accelerationY = event.acceleration.y;
  accelerationZ = event.acceleration.z;
}

// The draw function continuously executes after setup()
function draw() {
  background(255); // Set the canvas background to white

  translate(width / 2, height / 2); // Move the origin to the center of the canvas

  // Draw a circle to represent the compass
  fill(127);
  noStroke();
  circle(0, 0, 200);

  // Convert the orientation to radians
  let rads = radians(deviceOrientation);

  // Calculate the arrow's position based on the orientation
  let arrowX = 150 * cos(rads);
  let arrowY = 150 * sin(rads);

  // Draw the arrow pointing towards the device orientation
  stroke(0, 255, 0); // Set the arrow color to green
  line(0, 0, arrowX, arrowY); // Draw the arrow line
  fill(0, 255, 0); // Fill the arrow tip with green
  triangle(arrowX, arrowY, -8, arrowY + 5, -8, arrowY - 5);

  // Display the device orientation as text under the arrow
  fill(0); // Set text color to black
  text(nfc(deviceOrientation, 1), 0, 220); // Display the orientation with one decimal place

  // Calculate the circle's position based on the acceleration
  let circleX = accelerationX * 10; // Multiplying by 10 to scale the movement
  let circleY = accelerationY * 10;

  // Constrain the circle's position to the canvas size
  circleX = constrain(circleX, -width / 2, width / 2);
  circleY = constrain(circleY, -height / 2, height / 2);

  // Draw the circle
  fill(255, 0, 0); // Set the circle color to red
  ellipse(circleX, circleY, 20);

  // Display the acceleration as text
  text(`Acceleration X: ${nfc(accelerationX, 2)}`, 0, -150);
  text(`Acceleration Y: ${nfc(accelerationY, 2)}`, 0, -130);
  text(`Acceleration Z: ${nfc(accelerationZ, 2)}`, 0, -110);

  // Draw the z-axis degree and vector
  stroke(0, 0, 255); // Set the stroke color to blue
  line(0, 0, 0, -200); // Draw the z-axis line
  let vectorX = 100 * cos(radians(deviceOrientation));
  let vectorY = 100 * sin(radians(deviceOrientation));
  line(0, 0, vectorX, vectorY); // Draw the vector
  triangle(vectorX, vectorY, -8, vectorY + 5, -8, vectorY - 5); // Draw the vector tip
}
