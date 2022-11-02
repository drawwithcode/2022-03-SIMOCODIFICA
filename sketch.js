let texturegrunge;
let pakyImage;
let rondoImage;
let rhoveImage;
let lazzaImage;
let PAKY;
let RONDO;
let RHOVE;
let LAZZA;
let analyzer1;
let analyzer2;
let analyzer3;
let analyzer4;
let text1;
let text2;
let myFont;
let mic;
let spray;
let pointer;

function preload() {
  //Here I upload all the images and sounds that I need
  texturegrunge = loadImage("./assets/images/texturegrunge.png");
  pakyImage = loadImage("./assets/images/paky.png");
  rondoImage = loadImage("./assets/images/rondo1.png");
  rhoveImage = loadImage("./assets/images/rhove.png");
  lazzaImage = loadImage("./assets/images/lazza.png");
  spray = loadImage("./assets/images/spray.png");
  pointer = loadImage("./assets/images/pointer.png");
  PAKY = loadSound("./assets/audio/PAKY.mp3");
  RHOVE = loadSound("./assets/audio/RHOVE.mp3");
  RONDO = loadSound("./assets/audio/RONDO.mp3");
  LAZZA = loadSound("./assets/audio/ZZALA.mp3");
  myFont = loadFont("./assets/Jabin-Medium.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //here I create one amplitude analyzer for each sound source
  analyzer1 = new p5.Amplitude();
  analyzer1.setInput(PAKY);
  analyzer2 = new p5.Amplitude();
  analyzer2.setInput(RHOVE);
  analyzer3 = new p5.Amplitude();
  analyzer3.setInput(RONDO);
  analyzer4 = new p5.Amplitude();
  analyzer4.setInput(LAZZA);
}

function draw() {
  //I wanted to scale the images when the audio is playing
  // these are the variables I need to scale the images according to the amplitude of the audio signal
  let volume1 = 0;
  let volume2 = 0;
  let volume3 = 0;
  let volume4 = 0;

  //I will multilpy the actual dimensions of the images by the volume value
  //so I map the variables so that with amplitude zero they assume a value of 1, so that this parameter doesn't affect the dimensions in the multiplication
  volume1 = analyzer1.getLevel();
  volume1 = map(volume1, 0, 1, 1, 2);

  volume2 = analyzer2.getLevel();
  volume2 = map(volume2, 0, 1, 1, 2);

  volume3 = analyzer3.getLevel();
  volume3 = map(volume3, 0, 1, 1, 2);

  volume4 = analyzer4.getLevel();
  volume4 = map(volume4, 0, 1, 1, 2);

  background(10);
  imageMode(CENTER);
  //texture as background image
  image(
    texturegrunge,
    width / 2,
    height / 2,
    texturegrunge.width,
    texturegrunge.height
  );

  noFill();
  stroke(255);
  image(spray, 300, 700, spray.width / 1.5, spray.height / 1.5);
  image(spray, 1650, 700, spray.width / 1.5, spray.height / 1.5);
  image(spray, 1450, 300, spray.width / 1.5, spray.height / 1.5);
  image(spray, 450, 300, spray.width / 1.5, spray.height / 1.5);

  noFill();
  stroke(255);
  strokeWeight(1);
  rectMode(CENTER);
  rect(
    windowWidth / 2,
    windowHeight / 2,
    windowWidth - 200,
    windowHeight - 150,
    20
  );
  fill(0);
  rect(windowWidth / 2, 75, 800, 100, 20);
  noFill();
  ellipse(windowWidth / 2, windowHeight / 2, 600);
  line(
    windowWidth / 2 - 200,
    windowHeight / 2 + 150,
    windowWidth / 2 + 200,
    windowHeight / 2 + 150
  );
  line(
    windowWidth / 2 - 200,
    windowHeight / 2 - 150,
    windowWidth / 2 + 200,
    windowHeight / 2 - 150
  );
  image(
    pointer,
    windowWidth / 2,
    windowHeight / 2 - 200,
    pointer.width / 8,
    pointer.height / 8
  );

  fill(255);
  noStroke();
  textFont(myFont);
  textStyle(BOLD);
  textAlign(CENTER);
  textSize(250);
  //these are the number assigned to each trapper
  text("1", 300, 200);
  text("2", 1600, 200);
  text("3", 450, 600);
  text("4", 1450, 700);

  const message =
    "CLICK ON \nYOUR FAVOURITE\n TRAPPER TO HEAR\n HIM SHOUTING\n HIS NAME";

  fill(255);
  noStroke();
  textFont(myFont);
  textStyle(BOLD);
  textAlign(CENTER);
  textSize(60);
  text("WHO'S THAT TRAPPER?", width / 2, 65);
  textSize(30);
  fill("#366794");
  text("CREATIVE CODING", width / 2 - 250, height - 130);
  text("ASSIGNMENT III", width / 2 + 250, height - 130);
  textFont("Syne");
  textStyle(BOLD);
  textSize(20);
  text("YOU CAN ALSO PRESS\n THE RELATIVE NUMBER", width / 2, height / 2 + 200);
  noStroke();
  fill(255);
  textFont("Syne");
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  textSize(40);
  text(message, width / 2, height / 2);

  noStroke();
  fill(255);

  textSize(25);
  text(text1, windowWidth / 2, height - 40);
  textSize(40);
  text(text2, windowWidth / 2, height - 40);

  //here I change the bottom text from default to the name of the trapper that have been chosen until the relative audio stops
  if (PAKY.isPlaying() == true) {
    text1 = "";
    text2 =
      "PAKY!   PAKY!   PAKY!   PAKY!   PAKY!   PAKY!   PAKY!   PAKY!   PAKY!   PAKY!   PAKY! ";
  } else if (RHOVE.isPlaying() == true) {
    text1 = "";
    text2 =
      "RHOVE!   RHOVE!   RHOVE!   RHOVE!   RHOVE!   RHOVE!   RHOVE!   RHOVE!   RHOVE!";
  } else if (RONDO.isPlaying() == true) {
    text1 = "";
    text2 =
      "RONDO!   RONDO!   RONDO!   RONDO!   RONDO!   RONDO!   RONDO!   RONDO!";
  } else if (LAZZA.isPlaying() == true) {
    text1 = "";
    text2 =
      "ZZALA!   ZZALA!   ZZALA!   ZZALA!   ZZALA!   ZZALA!   ZZALA!   ZZALA!   ZZALA!";
  } else {
    text1 =
      "YOU CAN JOIN THEM TOO: PRESS 'R' TO ACTIVATE THE MIC AND SHOUT YOUR NAME TO SCARE THE OTHER TRAPPERS";
    text2 = "";
  }

  //here i reset the volumes to 1 when audios stop, because sometimes they stop when scaled up

  if (PAKY.isPlaying() == false) {
    volume1 = 1;
  }
  if (RHOVE.isPlaying() == false) {
    volume2 = 1;
  }
  if (RONDO.isPlaying() == false) {
    volume3 = 1;
  }
  if (LAZZA.isPlaying() == false) {
    volume4 = 1;
  }

  //here I verify if the mic is recording, and, when it is started, I use the input signal as a parameter to scale down the images

  if (mic) {
    const micLevel = mic.getLevel();
    let d = map(micLevel, 0, 1, 1, 0.1); // map the parameter d so that it is inversely proportional to the input signal
    image(
      pakyImage,
      300,
      700,
      (d * pakyImage.width) / 1.5,
      (d * pakyImage.height) / 1.5
    );
    image(rhoveImage, 1650, 700, d * rhoveImage.width, d * rhoveImage.height);
    image(
      rondoImage,
      1450,
      300,
      (d * rondoImage.width) / 2,
      (d * rondoImage.height) / 2
    );
    image(
      lazzaImage,
      450,
      300,
      (d * lazzaImage.width) / 2,
      (d * lazzaImage.height) / 2
    );
  } else {
    //when the mic isn't recording, the images dimensions are fixed, and only change when the relative audio is played
    image(
      pakyImage,
      300,
      700,
      (volume1 * pakyImage.width) / 1.5,
      (volume1 * pakyImage.height) / 1.5
    );
    image(
      rhoveImage,
      1650,
      700,
      volume2 * rhoveImage.width,
      volume2 * rhoveImage.height
    );
    image(
      rondoImage,
      1450,
      300,
      (volume3 * rondoImage.width) / 2,
      (volume3 * rondoImage.height) / 2
    );
    image(
      lazzaImage,
      450,
      300,
      (volume4 * lazzaImage.width) / 2,
      (volume4 * lazzaImage.height) / 2
    );
  }
}

//this function verify if the mouse is over one of the images and, in that case, start the relative audio
function mousePressed() {
  if (
    mouseX > 300 - pakyImage.width / 3 &&
    mouseX < 300 + pakyImage.width / 3 &&
    mouseY > 700 - pakyImage.height / 3 &&
    mouseY < 700 + pakyImage.height / 3
  ) {
    PAKY.play();
  }
  if (
    mouseX > 1450 - rondoImage.width / 4 &&
    mouseX < 1450 + rondoImage.width / 4 &&
    mouseY > 300 - rondoImage.height / 4 &&
    mouseY < 300 + rondoImage.height / 4
  ) {
    RONDO.play();
  }

  if (
    mouseX > 1650 - rhoveImage.width / 2 &&
    mouseX < 1650 + rhoveImage.width / 2 &&
    mouseY > 700 - rhoveImage.height / 2 &&
    mouseY < 700 + rhoveImage.height / 2
  ) {
    RHOVE.play();
  }
  if (
    mouseX > 450 - lazzaImage.width / 4 &&
    mouseX < 450 + lazzaImage.width / 4 &&
    mouseY > 300 - lazzaImage.height / 4 &&
    mouseY < 300 + lazzaImage.height / 4
  ) {
    LAZZA.play();
  }
}

//this function allow the user to start the audios by typing the relative number, instead of clicking the relative image
function keyPressed() {
  if (key == "r") {
    userStartAudio();
    mic = new p5.AudioIn();
    mic.start();
  }
  if (key == "1") {
    LAZZA.play();
  }
  if (key == "2") {
    RONDO.play();
  }
  if (key == "3") {
    PAKY.play();
  }
  if (key == "4") {
    RHOVE.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
