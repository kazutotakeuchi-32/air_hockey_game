class Game{

    constructor(node){
      this.intervalID = null
      this.node   = document.querySelector(node)
      this.ctx    = this.node.getContext('2d')
      this.ball   = new window.Ball(this.node.width/2+10,this.node.height-30, -2,-2,10 )
      this.player = new window.Paddle(75,10,false,0,parseInt(this.node.height/2)-parseInt(75/2),"#0095DD")
      this.enemy  = new window.Paddle(75,10,true,this.node.width-10,parseInt(this.node.height/2)-parseInt(75/2),"red")
      this.score  = new window.Score(0,0)
      document.addEventListener('keyup',this.keyupHandler.bind(this))
      document.addEventListener("keydown", this.player.keyDownHandler.bind(this.player), false);
      document.addEventListener("keyup"  , this.player.keyupHandler.bind(this.player), false);
    }

    keyupHandler(e){
      if (e.code=="Space") {
        if (!this.ball.run) {
          this.ball.run  = true
          this.enemy.run = true
          this.player.run = true
        }
      }
    }

    game_start(){
      this.ctx.clearRect(0,0,this.node.width,this.node.height)
      this.player.draw(this.ctx)
      this.player.move(this.node)
      this.enemy.draw(this.ctx)
      // this.enemy.top = true
      // this.enemy.down = true
      this.enemy.moveAutomatically(this.node,5)
      this.ball.draw(this.ctx)
      this.BallCollisionDetection()
    }

    BallCollisionDetection(){
      if (this.ball.y+this.ball.dy <this.ball.rabius) {
        this.ball.dy = -this.ball.dy
      }
      if (this.ball.y+this.ball.dy >this.node.height-this.ball.rabius) {
        this.ball.dy = -this.ball.dy
      }
      if ( this.ball.x+this.ball.dx < this.player.width+this.ball.rabius ) {
        if (this.ball.y >=this.player.y && this.ball.y<= this.player.y + this.player.height  ) {
          this.ball.dx = -this.ball.dx
          this.ball.x += 4
        }
      }
      if (this.ball.x+this.ball.dx < 0) {
        this.ball.dx = -this.ball.dx
        if (this.score.enemyScoreUp()) {
          this.game_over()
        }
        this.reassignment()
       }
      if(this.ball.x+this.ball.dx > this.node.width - this.enemy.width-this.ball.rabius){
        if (this.ball.y >=this.enemy.y && this.ball.y<= this.enemy.y + this.enemy.height) {
          this.ball.dx = -this.ball.dx
          this.ball.x += 4
        }
      }
      if (this.ball.x+this.ball.dx> this.node.width - this.ball.rabius) {
        this.ball.dx = -this.ball.dx
        if (this.score.playerScoreUp()){
          this.game_clear()
        }
        this.reassignment()
      }
      if (this.ball.run) {
        this.ball.x += this.ball.dx;
        this.ball.y += this.ball.dy;
      }
    }

    reassignment(){
      this.ball.run= false
      this.ball.x = this.node.width/2
      this.ball.y = this.node.height-this.ball.rabius
      this.enemy.run = false
      this.enemy.x  = this.node.width-10
      this.enemy.y  = parseInt(this.node.height/2)-parseInt(75/2)
      this.player.run = false
      this.player.x = 0
      this.player.y = parseInt(this.node.height/2)-parseInt(75/2)
    }

      game_clear(){
          alert("ゲームクリア")
          clearInterval(this.intervalID)
      }

      game_over(){
        alert("ゲームオーバー")
        clearInterval(this.intervalID)
      }
}

const game = new Game("#myCanvas");
game.intervalID= setInterval(() => {
  game.game_start()
}, 10);
