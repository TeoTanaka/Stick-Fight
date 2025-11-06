let point;
let lastTime
let dt
function setup() {
    createCanvas(500, 500);
    frameRate(60);
    point = new Point(250, 250, 1); // assign to the global variable
}

function draw() {
    
    background(0);
    setDt()
    point.update(dt); // works now
}

function setDt(){
    
    let now = millis();
    dt = (float) ((now - lastTime) / 1000.0);  // In seconds
    lastTime = now;
}