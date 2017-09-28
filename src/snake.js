// Snake.js

/** @class Snake
  * The snake in a Snake game
  */
export default class Snake {
  constructor(x, y, segments) {
    this.body = [];
    for(var i = 0; i < segments; i++) {
      this.body.push({
        x: x - i,
        y: y
      });
    }
    this.direction = 'right';
    // Bind class methods
    this.update = this.update.bind(this);
    this.render = this.render.bind(this);
  }
  update() {
    // Did we smack a wall?
    // Did we eat ourselves?
    // Did we eat food?
    // Do we need to grow?
    var x = this.body[0].x;
    var y = this.body[0].y;
    switch(this.direction) {
      case
    }
  }
  /** @function render
    * Render the snake
    */
  render(ctx) {
    this.body.forEach(function(segment) {
      ctx.save();
      ctx.fillStyle = 'green';
      ctx.fillRect(segment.x,segment.y,1,1);
      ctx.restore();
    })
  }
}
