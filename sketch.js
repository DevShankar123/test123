var path, mainCyclist;
var pathImg, mainRacerImg1, mainRacerImg2;
var end = 0;
var play = 1;
var gamestate = play;

var distance = 0;
var cyclebell, pinkcg, yellowcg, redcg, opp, pinkf, yellowf, redf, p1, p2, p3, o1, o2, o3, rand, scyclist;

function preload() {
  pathImg = loadImage("images/Road.png");
  mainRacerImg1 = loadAnimation("images/mainPlayer1.png", "images/mainPlayer2.png");
  mainRacerImg2 = loadAnimation("images/mainPlayer3.png");
  cyclebell = loadSound("bell.mp3");
  o1 = loadAnimation("opponent1.png");
  o2 = loadAnimation("opponent4.png");
  o3 = loadAnimation("opponent7.png");
}

function setup() {

  createCanvas(500, 300);

  // Moving background
  path = createSprite(100, 150);
  path.addImage(pathImg);
  path.velocityX = -5;

  //creating boy running
  mainCyclist = createSprite(70, 150, 20, 20);
  mainCyclist.addAnimation("SahilRunning", mainRacerImg1);
  mainCyclist.scale = 0.07;

  pinkcg = createGroup();
  redcg = createGroup();
  yellowcg = createGroup();


}

function draw() {
  background(0);


  textSize(20);
  fill(255);
  text("Distance: " + distance, 350, 30);
  distance = distance + Math.round(getFrameRate() / 50);

  if (gamestate === play) {

    mainCyclist.y = World.mouseY;

    edges = createEdgeSprites();
    mainCyclist.collide(edges);

    //code to reset the background
    if (path.x < 0) {
      path.x = width / 2;
    }
    scyclist();
    if (keyDown("space")) {
      cyclebell.play();
    }

  }
  drawSprites();
}
function pinkf() {
  p1 = createSprite(1100, Math.round(random(50, 250), 10, 10));
  p1.scale = 0.06;
  p1.addAnimation(o1);
  p1.setLifetime = 170;
  pinkcg.add(p1);

}

function redf() {
  p2 = createSprite(1100, Math.round(random(50, 250), 10, 10));
  p2.scale = 0.06;
  p2.addAnimation(o2);
  p2.setLifetime = 170;
  redcg.add(p2);

}

function yellowf() {
  p3 = createSprite(1100, Math.round(random(50, 250), 10, 10));
  p3.scale = 0.06;
  p3.addAnimation(o3);
  p3.setLifetime = 170;
  yellowcg.add(p3);

}

function scyclist(){
  if (getFrameRate() % 150 === 0) {
  rand = Math.round(random(1,3));

  if (rand === 1) {
    pinkf();
  } else if (rand === 2) {
    redf();
  } else {
    yellowf();
  }
}
  
}