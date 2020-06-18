new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns =[]
  },
  methods: {
    startGame() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attack: function () {
      let damage = this.calculateDamage(3, 10);
      this.monsterHealth -=  damage
      this.turns.unshift({
        isPlayer:true,
        text:'PLayer Hits monster for : '+ damage 
      })
      if (this.checkWin()) {
        return;
      }
      this.monsterAttack();
    },
    specialAttack: function () {
      let damage=this.calculateDamage(10, 20);
      this.monsterHealth -= damage;
      if (this.checkWin()) {
        return;
      }
      this.monsterAttack();
    },
    heal: function () {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
      }
      this.monsterAttack();
    },
    giveUp: function () {
      this.gameIsRunning = false;
    },
    calculateDamage: function (min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkWin: function () {
      if (this.monsterHealth <= 0) {
        if (confirm('You Won! New Game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm('You Lost! New Game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    },
    monsterAttack: function () {
      let damage = this.calculateDamage(5,12);
      this.playerHealth -= damage;

      this.checkWin();
      this.turns.unshift({
        isPlayer:false,
        text:'Monster Hits Player  for : '+ damage 
      })
    },
  },
});
