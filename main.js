function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

song = "";
song2 = "";

function preload() {
    song = loadSound("Dynamite.mp3");
    song2 = loadSound("Butter.mp3");
}

function draw() {
    image(video, 0, 0, 600, 500);
}