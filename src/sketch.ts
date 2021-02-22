// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    N: 3145,
    Download_Image: () => save(),
}
gui.add(params, "N", 0, 5000, 1)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------

function draw() {
    background('#03cffc')
    randomSeed(0)
    noStroke()
    fill(194, 244, 255, 100)
    translate(width/2, height/2)
    for (let i = 0; i < params.N; ++i) {
        const angle = random(TWO_PI)
        const radius = random(0.4 * width)
        // ellipse(radius * cos(angle), radius * sin(angle), 30)
        const p = p5.Vector.fromAngle(angle).mult(radius)
        ellipse(p.x, p.y, 30)
    }
}

// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}