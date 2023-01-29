Peter_pan_song="";
Harry_potter_theme_song="";
leftWristX=0;
leftWristY=0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist="";
scoreRightWrist="";
song_Peter_pan="";
 function preload() {
    Peter_pan_song=loadSound("music.mp3");
    Harry_potter_theme_song=loadSound("music2.mp3");

 }
function setup() {
    canvas = createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded() {
     console.log('PoseNet Is Initialized');
}
function draw() {
    image(video,0,0,600,500);
    fill("FF0000");
    stroke("#ffd700");
    song_Peter_pan = Peter_pan_song.isPlaying();
    console.log('song_Peter_pan');
    if(scoreLeftWrist > 0.2) {
        circle(leftWrist_x,leftWrist_y,20);
    Harry_potter_theme_song.stop();
    if(song_Peter_pan == false) {
        Peter_pan.song.play();
    }
    else{
        document.getElementById("name").innerHTML ="Song Name : Peter Pan Song";
    }
    }
}
function gotPoses(results) {
    if(results.length>0) {
    
        console.log(results);
        scoreLeftWrist= results[0].pose.keypoints[9].score;
        console.log('scoreleftWrist');
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +"leftWristY ="+ leftWristY);
    rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
    console.log("rightWristX = " + rightWristX + "rightWristY =" + rightWristY);
    }
}
   
    
    
