class room3 extends Phaser.Scene {

    constructor() {
        super({ key: 'room3' });
        
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
        this.angle14;
        this.angle15;
        this.angle16;
        this.angle17;
        this.angle18;
        this.angle19;
        this.angle20;
        this.angle21;
        this.angle22;
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
        this.nuclearBullet = {};
        this.nuclearBullet2 = {};
        this.nuclearBullet3 = {};
        this.nuclearBullet4 = {};
        this.nuclearBullet5 = {};
        this.nuclearBullet6 = {};
        this.nuclearBullet7 = {};
        this.firemagicBullet = {};
        this.purplemagicBullet = {};
    }


    init(data) {
        this.player = data.player
        this.inventory = data.inventory
    }

    preload() {
            // Step 1, load JSON
    this.load.tilemapTiledJSON("lv3map", "assets/lv3.tmj");

        // Step 2 : Preload any images here
        this.load.image("forestimg", "assets/forest_tiles.png");
        this.load.image("atlasimg", "assets/misc_atlas.png");
        this.load.image("japanimg", "assets/RuralJapan_Shadows_32x 32.png");
        this.load.image("villageimg", "assets/village32x32.png");

        this.load.image('bullet','assets/bullet32x32.png');
        this.load.image('arrow','assets/arrow32x32.png');
        this.load.image('sword','assets/sword32x32.png');
        this.load.image('rocket','assets/rocket32x32.png');
        this.load.image('nuclear','assets/nuclear32x32.png');
        this.load.image('firemagic','assets/firemagic32x32.png');
        this.load.image('purplemagic','assets/purplemagic32x32.png');

        this.load.spritesheet('S', 'assets/S32x32.png', {frameWidth: 32, frameHeight: 32});
    }

    create() {
        console.log('*** room3 scene');

        console.log('*** room2 scene');
        this.scene.launch("showInventory")

        this.time.addEvent({
          delay:100,
          callback:updateInventory,
          callbackScope: this,
          loop:false,
        });
        let map = this.make.tilemap({ key: "lv3map" });

        let villageTiles = map.addTilesetImage("village32x32", "villageimg");

            // Step 6  Load in layers by layers

            let tilesArray = [
                villageTiles];

    this.floorLayer = map.createLayer("floor",tilesArray,0,0);
    this.leitaiLayer = map.createLayer("leitai",tilesArray,0,0);
    this.treeLayer = map.createLayer("tree",tilesArray,0,0);
    this.stonedecoLayer = map.createLayer("stonedeco",tilesArray,0,0);
    this.stoneLayer = map.createLayer("stone",tilesArray,0,0);
    this.plantsLayer = map.createLayer("plants",tilesArray,0,0);

    this.physics.world.bounds.width = this.floorLayer.width
    this.physics.world.bounds.height = this.floorLayer.height

    var start=map.findObject("Object3",(obj)=> obj.name === "start")

    this.anims.create({
      key: 'Sword',
      frames: this.anims.generateFrameNumbers('S', { start: 0, end: 15 }),
      frameRate: 60,
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
    this.sword2 = this.physics.add.sprite(0, 0, 'sword').setVisible(true).play('Sword');
    this.sword3 = this.physics.add.sprite(0, 0, 'sword').setVisible(true).play('Sword');
    this.sword4 = this.physics.add.sprite(0, 0, 'sword').setVisible(true).play('Sword');
    this.sword5 = this.physics.add.sprite(0, 0, 'sword').setVisible(true).play('Sword');
    this.rocket = this.physics.add.sprite(0, 0, 'rocket').setVisible(true);
    this.rocket2 = this.physics.add.sprite(0, 0, 'rocket').setVisible(true);
    this.nuclear = this.physics.add.sprite(0, 0, 'rocket').setVisible(true);
    this.nuclear2 = this.physics.add.sprite(0, 0, 'rocket').setVisible(true);
    this.nuclear3 = this.physics.add.sprite(0, 0, 'rocket').setVisible(true);
    this.nuclear4 = this.physics.add.sprite(0, 0, 'rocket').setVisible(true);
    this.nuclear5 = this.physics.add.sprite(0, 0, 'rocket').setVisible(true);
    this.nuclear6 = this.physics.add.sprite(0, 0, 'rocket').setVisible(true);
    this.nuclear7 = this.physics.add.sprite(0, 0, 'rocket').setVisible(true);
    this.firemagic = this.physics.add.sprite(0, 0, 'firemagic').setVisible(true);
    this.purplemagic = this.physics.add.sprite(0, 0, 'purplemagic').setVisible(true);


    this.player = this.physics.add.sprite(start.x, start.y, 'lee').setScale(2);
    this.player.body.setSize(this.player.width = 0.6, this.player.height)
    window.player = this.player;

    this.player.setCollideWorldBounds(true);
    this.floorLayer.setCollisionByExclusion(-1, true) 
    this.leitaiLayer.setCollisionByExclusion(-1, true) 
    this.treeLayer.setCollisionByExclusion(-1, true) 
    this.stonedecoLayer.setCollisionByExclusion(-1, false) 
    this.stoneLayer.setCollisionByExclusion(-1, false) 
    
    this.physics.add.collider(this.floorLayer, this.player)
    this.physics.add.collider(this.leitaiLayer, this.player)
    this.physics.add.collider(this.treeLayer, this.player)
    this.physics.add.collider(this.stonedecoLayer, this.player)

    this.physics.add.collider(this.stoneLayer, this.player)

    this.physics.add.overlap(this.player,[this.arrow,this.arrow2,this.arrow3,this.arrow4],shootArrow,null,this);
    this.physics.add.overlap(this.player,[this.bullet,this.bullet2,this.bullet3],shootBullet,null,this);
    this.physics.add.overlap(this.player,[this.sword,this.sword2,this.sword3,this.sword4,this.sword5],shootSword,null,this);
    this.physics.add.overlap(this.player,[this.rocket,this.rocket2],shootRocket,null,this);
    this.physics.add.overlap(this.player,[this.nuclear,this.nuclear2,this.nuclear3,this.nuclear4,this.nuclear5,this.nuclear6,this.nuclear7],shootRocket,null,this);
    this.physics.add.overlap(this.player,this.firemagic,this.shootFiremagic,null,this);
    this.physics.add.overlap(this.player,this.purplemagic,this.shootPurplemagic,null,this);


    this.timer2= this.time.addEvent({
      delay: 3000,
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

      this.nuclearBullet.x = 341;
      this.nuclearBullet.y = 632;

      this.nuclearBullet2.x = 431;
      this.nuclearBullet2.y = 654;

      this.nuclearBullet3.x = 543;
      this.nuclearBullet3.y = 754;

      this.nuclearBullet4.x = 345;
      this.nuclearBullet4.y = 754;

      this.nuclearBullet5.x = 543;
      this.nuclearBullet5.y = 132;

      this.nuclearBullet6.x = 541;
      this.nuclearBullet6.y = 134;

      this.nuclearBullet7.x = 243;
      this.nuclearBullet7.y = 432;

      this.firemagicBullet.x = 781;
      this.firemagicBullet.y = 324;

      this.purplemagicBullet.x = 781;
      this.purplemagicBullet.y = 871;

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
      this.angle14 = Phaser.Math.Angle.BetweenPoints(this.nuclearBullet, this.player);
      this.angle15 = Phaser.Math.Angle.BetweenPoints(this.nuclearBullet2, this.player);
      this.angle16 = Phaser.Math.Angle.BetweenPoints(this.nuclearBullet3, this.player);
      this.angle17 = Phaser.Math.Angle.BetweenPoints(this.nuclearBullet4, this.player);
      this.angle18 = Phaser.Math.Angle.BetweenPoints(this.nuclearBullet5, this.player);
      this.angle19 = Phaser.Math.Angle.BetweenPoints(this.nuclearBullet6, this.player);
      this.angle20 = Phaser.Math.Angle.BetweenPoints(this.nuclearBullet7, this.player);
      this.angle21 = Phaser.Math.Angle.BetweenPoints(this.firemagicBullet, this.player);
      this.angle22 = Phaser.Math.Angle.BetweenPoints(this.purplemagicBullet, this.player);
      

        if(this.player.x <42.5 && this.player.y > 591 && this.player.y < 646) {
            console.log("Jump to world")
            this.world();
           }
        

        if (this.cursors.left.isDown) {
            this.player.body.setVelocityX(-200);
            this.player.anims.play("left", true); 
          //walk left
            this.player.flipX = false; 
          //flip the sprite to the left
          // console.log('left');
          } else if (this.cursors.right.isDown) {
            this.player.body.setVelocityX(200);
            this.player.anims.play("left", true);
            this.player.flipX = true; 
          //use the original sprite looking to the right
            // console.log('right');
          } else if (this.cursors.up.isDown) {
            this.player.body.setVelocityY(-200);
            this.player.anims.play("up", true);
            // console.log('up');
          } else if (this.cursors.down.isDown) {
            this.player.body.setVelocityY(200);
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
        this.nuclear.enableBody(true, 341, 632, true, true);
        this.nuclear2.enableBody(true, 431, 654, true, true);
        this.nuclear3.enableBody(true, 543, 754, true, true);
        this.nuclear4.enableBody(true, 345, 754, true, true);
        this.nuclear5.enableBody(true, 543, 132, true, true);
        this.nuclear6.enableBody(true, 541, 134, true, true);
        this.nuclear7.enableBody(true, 243, 432, true, true);
        this.firemagic.enableBody(true, 781, 324, true, true);
        this.purplemagic.enableBody(true, 781, 871, true, true);
 
        this.physics.velocityFromRotation(this.angle, 210, this.bullet.body.velocity);
        this.physics.velocityFromRotation(this.angle2, 270, this.bullet2.body.velocity);
        this.physics.velocityFromRotation(this.angle3, 260, this.arrow.body.velocity);
        this.physics.velocityFromRotation(this.angle4, 276, this.sword.body.velocity);
        this.physics.velocityFromRotation(this.angle5, 285, this.bullet3.body.velocity);
        this.physics.velocityFromRotation(this.angle6, 200, this.arrow2.body.velocity);
        this.physics.velocityFromRotation(this.angle7, 260, this.arrow3.body.velocity);
        this.physics.velocityFromRotation(this.angle8, 298, this.arrow4.body.velocity);
        this.physics.velocityFromRotation(this.angle9, 221, this.sword2.body.velocity);
        this.physics.velocityFromRotation(this.angle10, 287, this.sword3.body.velocity);
        this.physics.velocityFromRotation(this.angle11, 293, this.sword4.body.velocity);
        this.physics.velocityFromRotation(this.angle12, 288, this.rocket.body.velocity);
        this.physics.velocityFromRotation(this.angle13, 234, this.rocket2.body.velocity);
        this.physics.velocityFromRotation(this.angle14, 234, this.nuclear.body.velocity);
        this.physics.velocityFromRotation(this.angle15, 232, this.nuclear2.body.velocity);
        this.physics.velocityFromRotation(this.angle16, 265, this.nuclear3.body.velocity);
        this.physics.velocityFromRotation(this.angle17, 284, this.nuclear4.body.velocity);
        this.physics.velocityFromRotation(this.angle18, 243, this.nuclear5.body.velocity);
        this.physics.velocityFromRotation(this.angle19, 287, this.nuclear6.body.velocity);
        this.physics.velocityFromRotation(this.angle20, 227, this.nuclear7.body.velocity);
        this.physics.velocityFromRotation(this.angle21, 242, this.firemagic.body.velocity);
        this.physics.velocityFromRotation(this.angle22, 282, this.purplemagic.body.velocity);
    
        
 
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
        this.nuclear.setVisible(true);
        this.nuclear2.setVisible(true);
        this.nuclear3.setVisible(true);
        this.nuclear4.setVisible(true);
        this.nuclear5.setVisible(true);
        this.nuclear6.setVisible(true);
        this.nuclear7.setVisible(true);
        this.firemagic.setVisible(true);
        this.purplemagic.setVisible(true);
 
 
      }

}
