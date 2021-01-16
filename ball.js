class Ball{

  constructor(x,y,dx,dy,rabius){
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.rabius =rabius
    this.run = false
  }

  draw(ctx){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.rabius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }

}

export default Ball;
