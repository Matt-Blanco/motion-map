// Set global variables for acceleration, circle position, and orientation
let deviceOrientation = 0;
let accelerationX = 0;
let accelerationY = 0;
let circleX = 0;
let circleY = 0;
let circleSpeed = 0; // Speed of the circle
let maxSpeed = 10; // Maximum speed of the circle

// We will use this variable to store the previous 
// orientation value for calculating rotation
let previousOrientation = 0;

document.getElementById('motion-button').onclick = onClick;

function onClick() { 
    // Request permission for device motion access
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
      DeviceMotionEvent.requestPermission()
        .then(permissionState => { 
          if (permissionState === 'granted') { 
            window.addEventListener('devicemotion', handleMotionEvent); 
            window.addEventListener('deviceorientation', handleDeviceOrientation);
          } 
        }) 
        .catch(console.error); 
    } else { 
     // Non-iOS 13+ devices
      window.addEventListener('devicemotion', handleMotionEvent); 
      window.addEventListener('deviceorientation', handleDeviceOrientation); 
    } 
    document.getElementById("motion-button").style.display = "none"; 
}  

function setup() { 
  createCanvas(displayWidth, displayHeight); 
  ellipseMode(CENTER);
  textAlign(CENTER, CENTER); 
  textSize(16);  
}  

function handleDeviceOrientation(event) { 
  // Update the device orientation value
  deviceOrientation = event.alpha; 
} 

function handleMotionEvent(event) {  
  // Update the acceleration values
  accelerationX = event.acceleration.x; 
  accelerationY = event.acceleration.y; 
} 

function draw() {  
  background(255); 
  translate(width / 2, height / 2);  
  
  // Convert orientation to radians
  let rads = radians(deviceOrientation); 

  // Calculate change in orientation from previous frame
  let deltaOrientation = deviceOrientation - previousOrientation;
  previousOrientation = deviceOrientation;

  // Adjust the circle's speed based on device tilt (deltaOrientation)
  circleSpeed = map(abs(deltaOrientation), 0, 20, 0, maxSpeed);
  console.log(circleSpeed)

  // Limit the maximum speed of the circle
  if (circleSpeed > maxSpeed) circleSpeed = maxSpeed;

  // Update the position of the circle using acceleration and speed
  circleX += accelerationX * circleSpeed;
  circleY -= accelerationY * circleSpeed;
  
  // Constrain the circle inside the canvas
  circleX = constrain(circleX, -width / 2, width);
  circleY = constrain(circleY, -height / 2, height);
  
  // Draw the circle
  fill(127);  
  noStroke();  
  circle(circleX, circleY, 20); 

  // Draw the arrow to indicate orientation
  stroke(0, 255, 0);   
  line(0, 0, 150 * cos(rads), 150 * sin(rads));
  fill(0, 255, 0);  
  triangle(
    150 * cos(rads),  
    150 * sin(rads),
    -8, 
   150 * sin(rads) + 5,  
    -8, 
    150 * sin(rads) - 5
  );
  
  // Display device orientation and acceleration values
  fill(0);
  text(nfc(deviceOrientation, 1), 0, -150);  
  text("Acceleration X: " + nfc(accelerationX, 2), 0, -130); 
  text("Acceleration Y: " + nfc(accelerationY, 2), 0, -110); 
}