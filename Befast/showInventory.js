class showInventory extends Phaser.Scene {

  constructor() {
      super({
          key: 'showInventory',
          active: false
      });
  }

  // incoming data from other scene
  init(data) {
      this.player = data.player
      this.inventory = data.inventory
  }

  preload() {
    this.load.image("heartpng", "assets/heart.png");
  }

  create() {
console.log("***showInventory");
this.scene.bringTop("showInventory")

    var rect = new Phaser.Geom.Rectangle(50, 0, 640, 50);
    var graphics = this.add.graphics({
        fillStyle: {
            color: 0x000000
        }
    });
    graphics.fillRectShape(rect).setScrollFactor(0)

    // Setup heart and keys but visible to false
    this.heart1 = this.add.image (480,50,'heartpng').setScrollFactor(0).setVisible(false).setScale(1);
    this.heart2 = this.add.image (530,50,'heartpng').setScrollFactor(0).setVisible(false).setScale(1);
    this.heart3 = this.add.image (580,50,'heartpng').setScrollFactor(0).setVisible(false).setScale(1);


    // Recv an event, call the method
    this.events.on('inventory', this.updateScreen, this)
}

update() {
}

updateScreen(data) {
  console.log('Received event inventory', data)

  switch ( data.heart ) {

     case 3: 
         this.heartimg1.setVisible(true)
         this.heartimg2.setVisible(true)
         this.heartimg3.setVisible(true)
         break;

     case 2:
         this.heartimg1.setVisible(true)
         this.heartimg2.setVisible(true)
         this.heartimg3.setVisible(false)
         break;

     case 1:
         this.heartimg1.setVisible(true)
         this.heartimg2.setVisible(false)
         this.heartimg3.setVisible(false)
         break;
      
     case 0:
         this.heartimg1.setVisible(false)
         this.heartimg2.setVisible(false)
         this.heartimg3.setVisible(false)
         break;    

     default:
     break;
 }
}
}