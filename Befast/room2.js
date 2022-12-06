class room2 extends Phaser.Scene {

    constructor() {
        super({ key: 'room2' });
        
        // Put global variable here
        this.angle;
        this.angle2;
        this.angle3;
        this.angle4;
        this.angle5;
        this.angle6;
        this.angle7;
        this.angle8;
        this.angle9;
        this.angle10;
        this.angle11;
        this.angle12;
        this.angle13;
        this.startBullet = {};
        this.startBullet2 = {};
        this.startBullet3 = {};
        this.arrowBullet = {};
        this.arrowBullet2 = {};
        this.arrowBullet3 = {};
        this.arrowBullet4 = {};
        this.swordBullet = {};
        this.swordBullet2 = {};
        this.swordBullet3 = {};
        this.swordBullet4 = {};
        this.rocketBullet = {};
        this.rocketBullet2 = {};
    }


    init(data) {
        this.player = data.player
        this.inventory = data.inventory
    }

    preload() {
            // Step 1, load JSON
    this.load.tilemapTiledJSON("lv2map", "assets/lv2.tmj");

        // Step 2 : Preload any images here
        this.load.image("forestimg", "assets/forest_tiles.png");
        this.load.image("atlasimg", "assets/misc_atlas.png");
        this.load.image("japanimg", "assets/RuralJapan_Shadows_32x 32.png");
        this.load.image("villageimg", "assets/village32x32.png");

        this.load.image('bullet','assets/bullet32x32.png');
        this.load.image('arrow','assets/arrow32x32.png');
        this.load.image('sword','assets/sword32x32.png');
        this.load.image('rocket','assets/rocket32x32.png');

        this.load.spritesheet('S', 'assets/S32x32.png', {frameWidth: 32, frameHeight: 32});
    }

    create() {
        console.log('*** room2 scene');
        this.scene.launch("showInventory")

        this.time.addEvent({
          delay:100,
          callback:updateInventory,
          callbackScope: this,
          loop:false,
        });

        let map = this.make.tilemap({ key: "lv2map" });

        let atlasTiles = map.addTilesetImage("misc_atlas", "atlasimg");

            // Step 6  Load in layers by layers

            let tilesArray = [
                atlasTiles];

    this.floorLayer = map.createLayer("floor",tilesArray,0,0);
    this.boatLayer = map.createLayer("boat",tilesArray,0,0);
    this.sakuraLayer = map.createLayer("sakura",tilesArray,0,0);

    this.physics.world.bounds.width = this.floorLayer.width
    this.physics.world.bounds.height = this.floorLayer.height

    var start=map.findObject("Object2",(obj)=> obj.name === "start")

    this.anims.create({
      key: 'Sword',
      frames: this.anims.generateFrameNumbers('S', { start: 0, end: 15 }),
      frameRate: 40,
      repeat: -1
  });

    
    this.bullet = this.physics.add.sprite(0, 0, 'bullet').setVisible(true);
    this.bullet2 = this.physics.add.sprite(0, 0, 'bullet').setVisible(true);
    this.bullet3 = this.physics.add.sprite(0, 0, 'bullet').setVisible(true);
    this.arrow = this.physics.add.sprite(0, 0, 'arrow').setVisible(true);
    this.arrow2 = this.physics.add.sprite(0, 0, 'arrow').setVisible(true);
    this.arrow3 = this.physics.add.sprite(0, 0, 'arrow').setVisible(true);
    this.arrow4 = this.physics.add.sprite(0, 0, 'arrow').setVisible(true);
    this.sword = this.physics.add.sprite(0, 0, 'S').setVisible(true).play('Sword');
    this.sword2 = this.physics.add.sprite(0, 0, 'S').setVisible(true).play('Sword');
    this.sword3 = this.physics.add.sprite(0, 0, 'S').setVisible(true).play('Sword');
    this.sword4 = this.physics.add.sprite(0, 0, 'S').setVisible(true).play('Sword');
    this.sword4 = this.physics.add.sprite(0, 0, 'S').setVisible(true).play('Sword');
    this.rocket = this.physics.add.sprite(0, 0, 'rocket').setVisible(true);
    this.rocket2 = this.physics.add.sprite(0, 0, 'rocket').setVisible(true);

    this.player = this.physics.add.sprite(start.x, start.y, 'lee').setScale(2);
    window.player = this.player;

    this.player.setCollideWorldBounds(true);
    this.floorLayer.setCollisionByExclusion(-1, true) 
    this.sakuraLayer.setCollisionByExclusion(-1, true) 
    this.physics.add.collider(this.floorLayer, this.player)
    this.physics.add.collider(this.sakuraLayer, this.player)

    this.physics.add.overlap(this.player,[this.arrow,this.arrow2,this.arrow3,this.arrow4],shootArrow,null,this);
    this.physics.add.overlap(this.player,[this.bullet,this.bullet2,this.bullet3],shootBullet,null,this);
    this.physics.add.overlap(this.player,[this.sword,this.sword2,this.sword3,this.sword4],shootSword,null,this);
    this.physics.add.overlap(this.player,[this.rocket,this.rocket2],shootRocket,null,this);

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

    console.log("showInventory");
    this.scene.launch("showInventory");
        
    }

    update() {

      this.startBullet.x = 0;
      this.startBullet.y = 0;

      this.startBullet2.x = 640;
      this.startBullet2.y = 0;

      this.startBullet3.x = 300;
      this.startBullet3.y = 90;

      this.arrowBullet.x = 100;
      this.arrowBullet.y = 0;

      this.arrowBullet2.x = 100;
      this.arrowBullet2.y = 40;

      this.arrowBullet3.x = 324;
      this.arrowBullet3.y = 123;

      this.arrowBullet4.x = 462;
      this.arrowBullet4.y = 331;

      this.swordBullet.x = 90;
      this.swordBullet.y = 400;

      this.swordBullet2.x = 500;
      this.swordBullet2.y = 400;

      this.swordBullet3.x = 700;
      this.swordBullet3.y = 600;

      this.swordBullet4.x = 654;
      this.swordBullet4.y = 768;

      this.rocketBullet.x = 741;
      this.rocketBullet.y = 781;

      this.rocketBullet2.x = 871;
      this.rocketBullet2.y = 756;

      this.angle = Phaser.Math.Angle.BetweenPoints(this.startBullet, this.player);
      this.angle2 = Phaser.Math.Angle.BetweenPoints(this.startBullet2, this.player);
      this.angle3 = Phaser.Math.Angle.BetweenPoints(this.arrowBullet, this.player);
      this.angle4 = Phaser.Math.Angle.BetweenPoints(this.swordBullet, this.player);
      this.angle5 = Phaser.Math.Angle.BetweenPoints(this.startBullet3, this.player);
      this.angle6 = Phaser.Math.Angle.BetweenPoints(this.arrowBullet2, this.player);
      this.angle7 = Phaser.Math.Angle.BetweenPoints(this.arrowBullet3, this.player);
      this.angle8 = Phaser.Math.Angle.BetweenPoints(this.arrowBullet4, this.player);
      this.angle9 = Phaser.Math.Angle.BetweenPoints(this.swordBullet2, this.player);
      this.angle10 = Phaser.Math.Angle.BetweenPoints(this.swordBullet3, this.player);
      this.angle11 = Phaser.Math.Angle.BetweenPoints(this.swordBullet4, this.player);
      this.angle12 = Phaser.Math.Angle.BetweenPoints(this.rocketBullet, this.player);
      this.angle13 = Phaser.Math.Angle.BetweenPoints(this.rocketBullet2, this.player);
      

        if(this.player.x >549 && this.player.x < 773 && this.player.y > 1045.5 && this.player.y < 1075.5) {
            console.log("Jump to world")
            this.world();
           }

        if (this.cursors.left.isDown) {
            this.player.body.setVelocityX(-170);
            this.player.anims.play("left", true); 
          //walk left
            this.player.flipX = false; 
          //flip the sprite to the left
          // console.log('left');
          } else if (this.cursors.right.isDown) {
            this.player.body.setVelocityX(170);
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
        this.bullet3.enableBody(true, 300, 90, true, true);
        this.arrow.enableBody(true, 100, 0, true, true);
        this.arrow2.enableBody(true, 100, 40, true, true);
        this.arrow3.enableBody(true, 324, 123, true, true);
        this.arrow4.enableBody(true, 462, 331, true, true);
        this.sword.enableBody(true, 90, 400, true, true);
        this.sword2.enableBody(true, 500, 400, true, true);
        this.sword3.enableBody(true, 700, 600, true, true);
        this.sword4.enableBody(true, 654, 768, true, true);
        this.rocket.enableBody(true, 741, 781, true, true);
        this.rocket2.enableBody(true, 871, 756, true, true);
 
        this.physics.velocityFromRotation(this.angle, 150, this.bullet.body.velocity);
        this.physics.velocityFromRotation(this.angle2, 140, this.bullet2.body.velocity);
        this.physics.velocityFromRotation(this.angle3, 120, this.arrow.body.velocity);
        this.physics.velocityFromRotation(this.angle4, 150, this.sword.body.velocity);
        this.physics.velocityFromRotation(this.angle5, 180, this.bullet3.body.velocity);
        this.physics.velocityFromRotation(this.angle6, 200, this.arrow2.body.velocity);
        this.physics.velocityFromRotation(this.angle7, 160, this.arrow3.body.velocity);
        this.physics.velocityFromRotation(this.angle8, 135, this.arrow4.body.velocity);
        this.physics.velocityFromRotation(this.angle9, 200, this.sword2.body.velocity);
        this.physics.velocityFromRotation(this.angle10, 140, this.sword3.body.velocity);
        this.physics.velocityFromRotation(this.angle11, 145, this.sword4.body.velocity);
        this.physics.velocityFromRotation(this.angle12, 174, this.rocket.body.velocity);
        this.physics.velocityFromRotation(this.angle13, 234, this.rocket2.body.velocity);
        
 
        this.bullet.setVisible(true);
        this.bullet2.setVisible(true);
        this.bullet3.setVisible(true);
        this.arrow.setVisible(true);
        this.arrow2.setVisible(true);
        this.arrow3.setVisible(true);
        this.arrow4.setVisible(true);
        this.sword.setVisible(true);
        this.sword2.setVisible(true);
        this.sword3.setVisible(true);
        this.sword4.setVisible(true);
        this.rocket.setVisible(true);
        this.rocket2.setVisible(true);
 
 
      }

}
