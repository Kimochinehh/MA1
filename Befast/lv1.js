class world extends Phaser.Scene {
  constructor() {
    super({
      key: "lv1",
    });

    // Put global variable here
  }
  init(data) {
    this.player = data.player;
  }

  preload() {
    // Step 1, load JSON
    this.load.tilemapTiledJSON("lv1", "assets/lv1.tmj");

    // Step 2 : Preload any images here
    this.load.image("forestimg", "assets/forest_tiles.png");
    this.load.image("atlasimg", "assets/misc_atlas.png");
    this.load.image("japanimg", "assets/RuralJapan_Shadows_32x 32.png");
    this.load.image("villageimg", "assets/village32x32.png");

    this.load.spritesheet('lee', 'assets/Lee32x32.png', {frameWidth: 32, frameHeight: 32});

  }

  create() {
    console.log("* lv1 scene");

    //Step 3 - Create the map from main
  let map = this.make.tilemap({ key: "lv1" });

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    //let buildingTiles = map.addTilesetImage("Buildings32x32", "building");
    //let streetTiles = map.addTilesetImage("Street32x32", "street");
    let forestTiles = map.addTilesetImage("lvmap", "forestimg");
    let atlasTiles = map.addTilesetImage("misc_atlas", "atlasimg");
    let japanTiles = map.addTilesetImage("RuralJapan_Shadows_32x 32", "japanimg");
    let villageTiles = map.addTilesetImage("village32x32", "villageimg");
    
    // Step 5  create an array of tiles
    // let tilesArray = [
    //   buildingTiles,
    //   streetTiles,
    // ];
    let tilesArray = [
      forestTiles,atlasTiles,japanTiles,villageTiles];

    // Step 6  Load in layers by layers
    this.floorLayer = map.createLayer("floor",tilesArray,0,0);



    // Add main player here with physics.add.sprite
    var spaceDown = this.input.keyboard.addKey('SPACE');

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('lee', { start: 0, end: 2 }),
      frameRate: 5,
      repeat: -1
  });

  this.anims.create({
    key: 'down',
    frames: this.anims.generateFrameNumbers('lee', { start: 3, end: 5 }),
    frameRate: 5,
    repeat: -1
});

this.anims.create({
  key: 'up',
  frames: this.anims.generateFrameNumbers('lee', { start: 6, end: 8 }),
  frameRate: 5,
  repeat: -1
});
  
  this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('lee', { start: 9, end: 11 }),
    frameRate: 5,
    repeat: -1
});

this.add.sprite(100, 400, 'lee').play('left');
    this.add.sprite(130, 400, 'lee').play('right');
    this.add.sprite(130, 450, 'lee').play('up');
    this.add.sprite(100, 450, 'lee').play('down');

    this.player = this.physics.add.sprite(700, 400, 'lee').setScale(2);
    window.player = this.player;

  
    this.cursors = this.input.keyboard.createCursorKeys();

  
    // Add time event / movement here

    // get the tileIndex number in json, +1
    //mapLayer.setTileIndexCallback(11, this.room1, this);

    // Add custom properties in Tiled called "mouintain" as bool

    // What will collider witg what layers
    //this.physics.add.collider(mapLayer, this.player);

    // create the arrow keys
    //this.cursors = this.input.keyboard.createCursorKeys();

    // camera follow player
    this.cameras.main.startFollow(this.player);
  } /////////////////// end of create //////////////////////////////

  update() {
    if (this.cursors.left.isDown) {
      this.player.body.setVelocityX(-130);
      this.player.anims.play("left", true); 
    //walk left
      this.player.flipX = false; 
    //flip the sprite to the left
    console.log('left');
    } else if (this.cursors.right.isDown) {
      this.player.body.setVelocityX(150);
      this.player.anims.play("left", true);
      this.player.flipX = true; 
    //use the original sprite looking to the right
      console.log('right');
    } else if (this.cursors.up.isDown) {
      this.player.body.setVelocityY(-150);
      this.player.anims.play("up", true);
      console.log('up');
    } else if (this.cursors.down.isDown) {
      this.player.body.setVelocityY(130);
      this.player.anims.play("down", true);
      console.log('down');
    } else {
      this.player.anims.stop();
      this.player.body.setVelocity(0, 0);
      console.log('idle');
    }
  } /////////////////// end of update //////////////////////////////

} //////////// end of class world ////////////////////////
