class Paddle{

  constructor(height,width,pressed,x,y,color,dy=4,){
      this.width  = width
      this.height = height
      this.top    = pressed
      this.left   = pressed
      this.right  = pressed
      this.down   = pressed
      this.x = x
      this.y = y
      this.dy=dy
      this.color=color
      this.run = false
    }
  draw(ctx){
      ctx.beginPath();
      ctx.rect(this.x,this.y ,this.width,this.height);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
  }

  keyDownHandler(e){
    switch (e.key) {
      case "Top":
      case "ArrowUp":
        this.top = true
        return
      case "Down":
      case "ArrowDown":
        this.down = true
        return
    }
  }

  keyupHandler(e){
    switch (e.key) {
      case "Top":
      case "ArrowUp":
        this.top = false
      case "Down":
      case "ArrowDown":
        this.down = false
    }
  }

  move(canvas){
    if (this.run) {
      if (this.top && this.y > 0) {
        this.y -= 7
      }else if (this.down && this.y < canvas.height - this.height) {
        this.y += 7
      }
    }
  }

  moveAutomatically(canvas){
    if (this.run) {
        if (this.y < 0) {
        this.dy = -this.dy
      }
      if ( this.y > canvas.height - this.height) {
        this.dy = -this.dy
      }
      this.y += this.dy
    }
  }

}

export default Paddle
