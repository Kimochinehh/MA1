   ////////////////////////////////////////////////////////
//
// access this function using updateInventory.call(this)
// Uses a JS function to prevent repeated codes
// 
///////////////////////////////////////////////////////
function updateInventory() {
  console.log("*** updateInventory()")
  // Emit events showInventory
  this.inventory = {}
  this.inventory.heart = window.heart
   
  console.log('*** updateInventory() Emit event', this.inventory)
  this.invEvent = (event, data) =>  { this.scene.get('showInventory').events.emit(event, data); }
  this.invEvent("inventory", this.inventory);
}

////////////////////////////////////////////////////////
//
// access this function using hitAnt
// Uses a JS function to prevent repeated codes
// 
///////////////////////////////////////////////////////
function shootArrow (player, arrow){
  console.log("shoot arrow")

  this.cameras.main.shake(150); 

  window.heart--
  arrow.disableBody(true, true);
  //this.updateInventory()
  updateInventory.call(this)

if (window.heart == 0){
  this.scene.start("gameOver");
}

}

function shootBullet (player, bullet){
  console.log("shoot bullet")

  this.cameras.main.shake(150);

  window.heart--
  bullet.disableBody(true, true);
  //this.updateInventory()
  updateInventory.call(this)

if (window.heart == 0){
  this.scene.start("gameOver");
}

}

function shootSword (player, sword){
  console.log("shoot sword")

  this.cameras.main.shake(150);

  window.heart--
  sword.disableBody(true, true);
  //this.updateInventory()
  updateInventory.call(this)

if (window.heart == 0){
  this.scene.start("gameOver");
}

}

function shootRocket (player, rocket){
  console.log("shoot rocket")

  this.cameras.main.shake(150);

  window.heart--
  rocket.disableBody(true, true);
  //this.updateInventory()
  updateInventory.call(this)

if (window.heart == 0){
  this.scene.start("gameOver");
}

}

function shootNuclear (player, nuclear){
  console.log("shoot nuclear")

  this.cameras.main.shake(150);

  window.heart--
  nuclear.disableBody(true, true);
  //this.updateInventory()
  updateInventory.call(this)

if (window.heart == 0){
  this.scene.start("gameOver");
}

}

function shootFiremagic (player, firemagic){
  console.log("shoot firemagic")

  this.cameras.main.shake(150);

  window.heart--
  firemagic.disableBody(true, true);
  //this.updateInventory()
  updateInventory.call(this)

if (window.heart == 0){
  this.scene.start("gameOver");
}

}

function shootPurplemagic (player, purplemagic){
  console.log("shoot purplemagic")

  this.cameras.main.shake(150);

  window.heart--
  purplemagic.disableBody(true, true);
  //this.updateInventory()
  updateInventory.call(this)

if (window.heart == 0){
  this.scene.start("gameOver");
}

}

