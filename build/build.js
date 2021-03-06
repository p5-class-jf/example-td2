var gui = new dat.GUI();
var params = {
    N: 2712,
    Dispersion: 0.17,
    Opacity: 17,
    Download_Image: function () { return save(); },
};
gui.add(params, "N", 0, 5000, 1);
gui.add(params, "Dispersion", 0, 0.5, 0.0001);
gui.add(params, "Opacity", 0, 255, 1);
gui.add(params, "Download_Image");
function draw() {
    background('#03cffc');
    randomSeed(0);
    noStroke();
    fill(194, 244, 255, params.Opacity);
    translate(width / 2, height / 2);
    for (var i = 0; i < params.N; ++i) {
        var angle = random(TWO_PI);
        var radius = randomGaussian(0, params.Dispersion * width);
        while (abs(radius) > params.Dispersion * width) {
            radius = randomGaussian(0, params.Dispersion * width);
        }
        var p = p5.Vector.fromAngle(angle).mult(radius);
        ellipse(p.x, p.y, 30);
    }
}
function setup() {
    p6_CreateCanvas();
}
function windowResized() {
    p6_ResizeCanvas();
}
var __ASPECT_RATIO = 1;
var __MARGIN_SIZE = 25;
function __desiredCanvasWidth() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return windowWidth - __MARGIN_SIZE * 2;
    }
    else {
        return __desiredCanvasHeight() * __ASPECT_RATIO;
    }
}
function __desiredCanvasHeight() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return __desiredCanvasWidth() / __ASPECT_RATIO;
    }
    else {
        return windowHeight - __MARGIN_SIZE * 2;
    }
}
var __canvas;
function __centerCanvas() {
    __canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
}
function p6_CreateCanvas() {
    __canvas = createCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
function p6_ResizeCanvas() {
    resizeCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
var p6_SaveImageSequence = function (durationInFrames, fileExtension) {
    if (frameCount <= durationInFrames) {
        noLoop();
        var filename_1 = nf(frameCount - 1, ceil(log(durationInFrames) / log(10)));
        var mimeType = (function () {
            switch (fileExtension) {
                case 'png':
                    return 'image/png';
                case 'jpeg':
                case 'jpg':
                    return 'image/jpeg';
            }
        })();
        __canvas.elt.toBlob(function (blob) {
            p5.prototype.downloadFile(blob, filename_1, fileExtension);
            setTimeout(function () { return loop(); }, 100);
        }, mimeType);
    }
};
//# sourceMappingURL=../src/src/build.js.map