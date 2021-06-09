function Player(animation) {
  PIXI.AnimatedSprite.call(this, animation);
  this.position.set(WallSlice.WIDTH, 0);
  this.animationSpeed = 0.2;
  this.scale.x = 1.5; 
  this.scale.y = 1.5;
  this.vy = 0;
  this.gravityForce = 1;
  this.isTouchingGround = true;
	this.isLost = false;
  this.play();
}

Player.prototype = Object.create(PIXI.AnimatedSprite.prototype);

Player.prototype.move = function(currentWallYPos) {
  this.isTouchingGround = (this.position.y + 55) >= currentWallYPos;
	this.isLost = (this.position.y + 35) >= currentWallYPos;

  if (this.isTouchingGround && !this.isLost) {
    this.position.y = currentWallYPos - 55;
    this.vy = 0;
  } else {
    this.position.y += this.vy + this.gravityForce;
    this.vy += this.gravityForce;
  }
}

Player.prototype.jump = function() {
  if (this.isTouchingGround) {
    this.vy -= 20;
    this.position.y += this.vy + this.gravityForce;
    this.isTouchingGround = false;
  }
}
