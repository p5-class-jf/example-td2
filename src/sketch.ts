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
    for (let i = 0; i < params.N; ++i) {
        ellipse(random(width), random(height), 30)
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