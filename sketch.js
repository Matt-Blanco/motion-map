// Set global variables for acceleration, circle position, and orientation
let deviceOrientation = 0;
let pX = 0;
let pY = 0;
let speed = 0.2; // Speed of the circle
let points = []
let yOrientation = 0;
let threshhold = 300;
let scaleFactor = 1;

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
  createCanvas(displayWidth, displayHeight, WebGL); 
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

  let deltaToEdge = min(pX, pY, width - pX, height - pY);

  if (deltaToEdge <= threshhold) {
    scaleFactor = map(scaleFactor, 0, 1, 1, 0.25);
    // scale(scaleFactor);
  }

  stroke(0);
  strokeWeight(1);
  beginShape(POINTS);
  for(let y = 0; y <= displayHeight; y+= 20) {
    for(let x = 0; x <= displayWidth; x+= 20) {
      vertex(x, y);
    }
  }
  endShape();

  // translate(width / 2, height / 2);  

  fill(0);
  text(`Scale: ${scaleFactor}`, 0, -150); 

  
  // Convert orientation to radians
  let rads = radians(deviceOrientation); 

  // Calculate change in orientation from previous frame
  let deltaOrientation = deviceOrientation - previousOrientation;
  previousOrientation = deviceOrientation;

  pX += speed * Math.cos(rads);
  pY += speed * Math.sin(rads);
  
  // Constrain the circle inside the canvas
  pX = constrain(pX, -width / 2, width);
  pY = constrain(pY, -height / 2, height);
  
  // Draw the circle
  noFill();
  stroke(242, 121, 60);
  strokeWeight(3);
  beginShape();
  for(let x = 0; x < points.length; x++) {
    vertex(points[x][0], points[x][1]);
  } 
  vertex(pX, pY);
  endShape(); 

  points.push([pX, pY]);
  
  // Display device orientation and acceleration values
  // fill(0);
  // text(`Device Orientation: ${nfc(deviceOrientation, 1)}`, 0, -150); 
  // text(`Radians: ${nfc(rads, 1)}`, 0, -180); 
  // text(`Speed: ${nfc(circleSpeed, 1)}`, 0, -200);  
  // text("Speed X: " + circleSpeed * Math.cos(rads), 0, -130); 
  // text("Speed Y: " + circleSpeed * Math.sin(rads), 0, -110); 
  // text("Acceleration X: " + nfc(accelerationX, 2), 0, -130); 
  // text("Acceleration Y: " + nfc(accelerationY, 2), 0, -110); 
}