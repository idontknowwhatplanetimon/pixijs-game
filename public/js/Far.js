function Far(texture) {
  PIXI.TilingSprite.call(this, texture, 512, 256);
  this.position.set(0, 0);
  this.tilePosition.set(0, 0);
  this.viewportX = 0;
}

Far.prototype = Object.create(PIXI.TilingSprite.prototype);

Far.DELTA_X = 0.128;

Far.prototype.setViewportX = function(newViewportX) {
  let distanceTravelled = newViewportX - this.viewportX;
  this.viewportX = newViewportX;
  this.tilePosition.x -= (distanceTravelled * Far.DELTA_X);
}
