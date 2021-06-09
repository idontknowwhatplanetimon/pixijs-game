function Mid(texture) {
  PIXI.TilingSprite.call(this, texture, 512, 256);  
  this.position.set(0, 128);
  this.tilePosition.set(0, 0);
  this.viewportX = 0;
}

Mid.prototype = Object.create(PIXI.TilingSprite.prototype);

Mid.DELTA_X = 0.64;

Mid.prototype.setViewportX = function(newViewportX) {
  let distanceTravelled = newViewportX - this.viewportX;
  this.viewportX = newViewportX;
  this.tilePosition.x -= (distanceTravelled * Mid.DELTA_X);
}
