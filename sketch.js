// Set global variables for acceleration, circle position, and orientation
let deviceOrientation = 0;
let pX = 0;
let pY = 0;
let speed = 0.3; // Speed of the circle
let points = []
let threshhold = 100;
let scl = 1;
// const scaleFactor = 0.05;
let scaleFactor = 1;
let growthFactor = 1;
let initialWidth, initialHeight
let zoomLevel = 1;

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
  createCanvas(displayWidth, displayHeight, WEBGL); 
  ellipseMode(CENTER);
  textAlign(CENTER, CENTER); 
  textSize(16);  

  initialWidth = width;
  initialHeight = height;
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

  // let distanceToEdge = min(pX, width - pX, height / 2, height - height / 2);

  // if (distanceToEdge < threshhold) {
  //   // Calculate scale factor based on the distance to the edge
  //   scaleFactor = map(distanceToEdge, 0, threshhold, 0.1, 1);
  //   resizeCanvas(initialWidth * scaleFactor, initialHeight * scaleFactor);
  // } else if (scaleFactor != 1) {
  //   // Reset scaleFactor if the line is not near the edge
  //   scaleFactor = 1;
  //   resizeCanvas(initialWidth, initialHeight);
  // }

  // Push transformation matrix to handle scaling
  // push();
  // scale(scaleFactor);

  // let distanceToEdge = min(pX, width - pX);

  // // adjust the zoom level based on the distance
  // print(distanceToEdge, threshhold)
  // if (distanceToEdge >= threshhold) {
  //   // zoomLevel = map(distanceToEdge, 0, width / 2, 1, 0.5);
  //   scaleFactor = map(distanceToEdge, 0, threshhold, 0.1, 1);
  //   print(scaleFactor)
  //   // scale the canvas
  //   push();
  //   scale(scaleFactor);
  // }

  // calculate the distance from the line to the edge of the canvas
  let distanceToEdge = min(pX, width - pX);

  // adjust the zoom level based on the distance
  zoomLevel = map(distanceToEdge, 0, width / 2, 0.5, 1);

  // calculate the translation amount based on the zoom level and line position
  let translateAmount = (pX - width / 2) * (1 - zoomLevel);

  // apply the translation and scale
  translate(width / 2 + translateAmount, height / 2);
  scale(zoomLevel);

  stroke(0);
  strokeWeight(1);
  beginShape(POINTS);
  for(let y = -(displayHeight / 2); y <= displayHeight; y+= 20) {
    for(let x = -(displayWidth / 2); x <= displayWidth; x+= 20) {
      vertex(x, y);
    }
  }
  endShape();

  // translate(width / 2, height / 2);  
  
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
  strokeWeight(4);
  beginShape();
  for(let x = 0; x < points.length; x++) {
    vertex(points[x][0], points[x][1]);
  } 
  vertex(pX, pY);
  endShape(); 

  points.push([pX, pY]);
  // if (pX <=  -(width / 2) + margin || pX >= (width / 2) - margin) {
  //   scl -= scaleFactor;
  //   console.log("change scale ", scl, pX, width - margin);
  //   margin -= 50;
  // }

  // if (pX <= margin || pX >= width - margin) {
  //   scale -= scaleFactor;
  // }

  // Display device orientation and acceleration values
  // fill(0);
  // text(`Device Orientation: ${nfc(deviceOrientation, 1)}`, 0, -150); 
  // text(`Radians: ${nfc(rads, 1)}`, 0, -180); 
  // text(`Speed: ${nfc(circleSpeed, 1)}`, 0, -200);  
  // text("Speed X: " + circleSpeed * Math.cos(rads), 0, -130); 
  // text("Speed Y: " + circleSpeed * Math.sin(rads), 0, -110); 
  // text("Acceleration X: " + nfc(accelerationX, 2), 0, -130); 
  // text("Acceleration Y: " + nfc(accelerationY, 2), 0, -110); 
  scale(scl, scl);
}