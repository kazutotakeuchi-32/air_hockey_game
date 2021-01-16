class Score{

  constructor(playerScore,enemyScore){
    this.playerScore =  playerScore
    this.enemyScore  =  enemyScore
    this.filed       =  document.querySelector(".filed")
    this.update()
  }

  playerScoreUp(){
    this.playerScore+=1
    this.update()
    if (this.playerScore==10) {
      return true
    }
    return false
  }

  enemyScoreUp(){
    this.enemyScore+=1
    this.update()
    if (this.enemyScore==10) {
      return true
    }
    return false
  }

  update(){
    this.filed.textContent =  `${this.playerScore}:${this.enemyScore}`
  }

}

export default Score
