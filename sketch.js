var form, player, game;
var canvas;
var database;
var player1, player2, player3, player4, speed, lock, tree, cloak

function preload()
{
  player1_img = loadImage ("./images/Player1.png");
  player2_img = loadImage ("./images/Player2.png");
  player3_img = loadImage ("./images/Player3.png");
  player4_img = loadImage ("./images/Player4.png");
  lock_img = loadImage ("./images/lock.png");
  cloak_img = loadImage ("./images/cloak.png");
  tree_img = loadImage ("./images/tree.png");
  speed_img = loadImage ("./images/speed.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  database = firebase.database();
  
  game = new Game();
  game.start();

}

function draw() {
  background("brown");  
  //drawSprites();
}

function windowResized()
{
  resizeCanvas(windowWidth, windowHeight)
}