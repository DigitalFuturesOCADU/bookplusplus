let capture;
let cameraOptions = ["user","environment"];
let camChoice = 0;   //0 = front facing, 1 = rear facing


function setup() {
  createCanvas(640, 480);
  var constraints = {
    audio: false,
    video: {
      facingMode: cameraOptions[camChoice]
    }
  };
  capture = createCapture(constraints);
  capture.hide();
}
function draw() {
  image(capture, 0, 0, 640, 480);

}