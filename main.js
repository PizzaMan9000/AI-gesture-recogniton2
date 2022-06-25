function preload() {

}

function setup() {
    video = createCapture(VIDEO);
    video.size(550,550);
    video.position(300,110);

    canvas = createCanvas(550,550);
    canvas.position(1000,110);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Model has loaded!")
}

function gotPoses(results) {
    if (results.length > 0 ) {
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;

        console.log("Nose X - " + noseX + " Nose Y - " + noseY);
        console.log("leftWrist - " + leftWrist + "rightWrist - " + rightWrist);

        difference = Math.floor(leftWrist - rightWrist);
    }
}

function draw() {
    background('#4281f5');
    stroke("#f05959");
    fill("#f05959");
    document.getElementById("squareSize").innerHTML = "The width and the height is " + difference + "px";
    square(noseX, noseY, difference);
}