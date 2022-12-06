class gameOver extends Phaser.Scene {

    constructor() {
        super({ key: 'gameOver' });
        

    }


    preload() {
      this.load.image("tryagain","assets/gameover.jpg")

    }

    create() {
      this.add.image (500,300,'tryagain').setScale(0.2);

      var spaceDown = this.input.keyboard.addKey('SPACE');

      window.key = 0
      window.heart = 3

      spaceDown.on('down', function(){
          let playerPos = {};
      playerPos.x = 30
      playerPos.y = 260
      playerPos.dir = "right"
          this.scene.start("world",{playerPos: playerPos});
          }, this );
          

      this.add.sprite(330, 470, "down").play("down").setScale(2);
  }
    }

   