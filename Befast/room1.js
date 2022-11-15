class room1 extends Phaser.Scene {

    constructor() {
        super({ key: 'room1' });
        
        // Put global variable here

        this.angle;
        this.angle2;
        this.angle3;
        this.angle4;
        this.startBullet = {};
        this.startBullet2 = {};
        this.arrowBullet = {};
        this.swordBullet = {};
    }


    init(data) {
        this.player = data.player
        this.inventory = data.inventory
    }

    preload() {
            // Step 1, load JSON
    this.load.tilemapTiledJSON("lv1map", "assets/lv1.tmj");

        // Step 2 : Preload any images here
        this.load.image("forestimg", "assets/forest_tiles.png");
        this.load.image("atlasimg", "assets/misc_atlas.png");
        this.load.image("japanimg", "assets/RuralJapan_Shadows_32x 32.png");
        this.load.image("villageimg", "assets/village32x32.png");

        this.load.image('bullet','assets/bullet32x32.png');
        this.load.image('arrow','assets/arrow32x32.png');
        this.load.image('sword','assets/sword32x32.png');

    }

    create() {
        console.log('*** room1 scene');
        let map = this.make.tilemap({ key: "lv1map" });

        let japanTiles = map.addTilesetImage("RuralJapan_Shadows_32x 32", "japanimg");


            // Step 6  Load in layers by layers

            let tilesArray = [
               japanTiles];

    this.floorLayer = map.createLayer("floor",tilesArray,0,0);

    this.physics.world.bounds.width = this.floorLayer.width
    this.physics.world.bounds.height = this.floorLayer.height

    var start=map.findObject("Object",(obj)=> obj.name === "start")

    this.bullet = this.physics.add.sprite(0, 0, 'bullet').setVisible(true);
    this.bullet2 = this.physics.add.sprite(0, 0, 'bullet').setVisible(true);
    this.arrow = this.physics.add.sprite(0, 0, 'arrow').setVisible(true);
    this.sword = this.physics.add.sprite(0, 0, 'sword').setVisible(true);


    this.player = this.physics.add.sprite(start.x, start.y, 'lee').setScale(2);
    window.player = this.player;

    this.player.setCollideWorldBounds(true);

    this.timer2= this.time.addEvent({
      delay: 5000,
      callback: this.shootFireBall,
      callbackScope: this,
      loop: true,
    });

    this.timer1= this.time.addEvent({
      delay: 1000,
      callback: this.shootFireBall,
      callbackScope: this,
      loop: false,
    });

    this.cursors = this.input.keyboard.createCursorKeys();

    this.cameras.main.startFollow(this.player);

    

    

    }

    update() {

      this.startBullet.x = 0;
      this.startBullet.y = 0;

      this.startBullet2.x = 640;
      this.startBullet2.y = 0;

      this.arrowBullet.x = 100;
      this.arrowBullet.y = 0;

      this.swordBullet.x = 90;
      this.swordBullet.y = 400;

      this.angle = Phaser.Math.Angle.BetweenPoints(this.startBullet, this.player);
      this.angle2 = Phaser.Math.Angle.BetweenPoints(this.startBullet2, this.player);
      this.angle3 = Phaser.Math.Angle.BetweenPoints(this.arrowBullet, this.player);
      this.angle4 = Phaser.Math.Angle.BetweenPoints(this.swordBullet, this.player);

        if(this.player.x > 31 && this.player.x <33 && this.player.y > 473 && this.player.y < 606) {
            console.log("Jump to world")
            this.world();
           }

        if (this.cursors.left.isDown) {
            this.player.body.setVelocityX(-150);
            this.player.anims.play("left", true); 
          //walk left
            this.player.flipX = false; 
          //flip the sprite to the left
          // console.log('left');
          } else if (this.cursors.right.isDown) {
            this.player.body.setVelocityX(150);
            this.player.anims.play("left", true);
            this.player.flipX = true; 
          //use the original sprite looking to the right
            // console.log('right');
          } else if (this.cursors.up.isDown) {
            this.player.body.setVelocityY(-150);
            this.player.anims.play("up", true);
            // console.log('up');
          } else if (this.cursors.down.isDown) {
            this.player.body.setVelocityY(150);
            this.player.anims.play("down", true);
            // console.log('down');
          } else {
            this.player.anims.stop();
            this.player.body.setVelocity(0, 0);
            // console.log('idle');
          }

          

    }
    world(player, tile){
        console.log("world function");
         this.scene.start("world")
      }

      shootFireBall (){
        console.log("shoot fire ball")
 
        // calculate angle between crab to player
        //console.log("check angle ", this.angle)
        //this.shootSnd.play();
 
        this.bullet.enableBody(true, 0, 0, true, true);
        this.bullet2.enableBody(true, 640, 0, true, true);
        this.arrow.enableBody(true, 100, 0, true, true);
        this.sword.enableBody(true, 90, 400, true, true);
 
        this.physics.velocityFromRotation(this.angle, 100, this.bullet.body.velocity);
        this.physics.velocityFromRotation(this.angle2, 120, this.bullet2.body.velocity);
        this.physics.velocityFromRotation(this.angle3, 90, this.arrow.body.velocity);
        this.physics.velocityFromRotation(this.angle4, 90, this.sword.body.velocity);
 
        this.bullet.setVisible(true);
        this.bullet2.setVisible(true);
        this.arrow.setVisible(true);
        this.sword.setVisible(true);
 
 
      }
    

}
