var bullet, wall, speed, weight, thickness;

function setup() {
  createCanvas(1350,400);
  
  speed = random(55, 90);
  weight = random(400,1500);
  thickness = random(22,83);

  bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX = speed;
  wall = createSprite(1300, 200, 100,400);

  bullet.shapeColor = "orange";
  wall.shapeColor = "brown";

}

function draw() {
  background("black");  

  if (hasCollided(bullet,wall)) {
    bullet.velocityX = 0;
    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if(damage>10){
      bullet.shapeColor = "red";
    }
    if(damage<10){
      bullet.shapeColor = "green";
    }
  }
  drawSprites();
}
function hasCollided(lbullet, lwall)
{
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}