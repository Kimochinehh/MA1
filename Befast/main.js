class main extends Phaser.Scene {

    constructor() {
        super({
            key: 'main'
        });

        // Put global variable here
    }

    preload() {
        // Preload all the assets here
        // Preload any images here
        this.load.image("gameStart", "assets/gamestart.png");
        // this.load.image("forestimg", "assets/forest_tiles.png");
        // this.load.image("atlasimg", "assets/misc_atlas.png");
        // this.load.image("japanimg", "assets/RuralJapan_Shadows_32x 32.png");
        // this.load.image("villageimg", "assets/village32x32.png");
        // Preload any sound and music here
        // this.load.audio('ping', 'assets/ping.mp3');
        // this.load.audio('bgMusic', 'assets/bgMusic.mp3');
    }

    create() {

        console.log('*** main scene');
        this.add.image(500, 300, 'gameStart').setScale(0.3)


        // Add any sound and music here
        // ( 0 = mute to 1 is loudest )
        //this.music = this.sound.add('bgMusic').setVolume(0.3) // 10% volume

        //this.music.play()
        //window.music = this.music


        // Add image and detect spacebar keypress
       
        // Check for spacebar or any key here
        var spaceDown = this.input.keyboard.addKey('SPACE');

        // On spacebar event, call the world scene        
        spaceDown.on('down', function () {
            console.log('Jump to world scene');

            this.scene.start('world',
                // Optional parameters
                {

                }
            );
        }, this);

        


        // Add any text in the main page
        this.add.text(250, 550, 'Press spacebar to continue', {
            font: '30px Courier',
 
        });



        // Create all the game animations here

    }


}