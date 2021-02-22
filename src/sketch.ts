// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    N: 2712,
    Dispersion: 0.17,
    Opacity: 17,
    Download_Image: () => save(),
}
gui.add(params, "N", 0, 5000, 1)
gui.add(params, "Dispersion", 0, 0.5, 0.0001)
gui.add(params, "Opacity", 0, 255, 1)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------

function draw() {
    background('#03cffc')
    randomSeed(0)
    noStroke()
    fill(194, 244, 255, params.Opacity)
    translate(width/2, height/2)
    for (let i = 0; i < params.N; ++i) {
        const angle = random(TWO_PI)
        let radius = randomGaussian(0, params.Dispersion * width)
        while(abs(radius) > params.Dispersion * width) {
            radius = randomGaussian(0, params.Dispersion * width)
        }
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