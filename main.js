noseX = 0;
noseY = 0;
leftElbowX = 0;
rightElbowX = 0;
fontSize = 20;

function setup() {
    video = createCapture(VIDEO);
    video.size(500 , 500);
    video.position(150 , 100);

    canvas = createCanvas(500 , 430);
    canvas.position(650 , 120);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function draw() {
    background("pink");

    document.getElementById("font_size").innerHTML = "The Font Size is "+fontSize+"px";

    fill(255 , 0, 0);
    text("Komal" , noseX , noseY);
    textSize(fontSize);
}

function modelLoaded() {
   console.log("poseNet is initialized");
}

function gotPoses(results) {
 if ( results.length > 0 ) {
    console.log(results);

    noseX = results[0].pose.nose.x ; 
    noseY = results[0].pose.nose.y ; 
    leftElbowX = results[0].pose.leftWrist.x ;
    rightElbowX = results[0].pose.rightWrist.x ;
    fontSize = floor(rightElbowX - leftElbowX);

    console.log("noseX="+noseX+"noseY="+noseY+"leftWristX="+leftElbowX+"rightWristX="+rightElbowX+"fontSize="+fontSize);
 } 
}                                   