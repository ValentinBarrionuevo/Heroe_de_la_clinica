class reloj extends Phaser.Scene {
  constructor() {
    super("clock");
  }

  create() {
    var reloj = this.add.sprite(1760, 960, "reloj").setDepth(1);
    barraRmask = this.add.sprite(reloj.x, reloj.y + 4, "arena2");
    var tapaMask = this.add.image(reloj.x, reloj.y, "arena2").setVisible(false);
    var mask = tapaMask.createBitmapMask();
    barraRmask.setMask(mask);

    this.add.image(reloj.x, reloj.y, "reloj_brillo").setAlpha(0.5);

    this.time.addEvent({
      delay: 0,
      callback: event,
      callbackScope: this,
      loop: true,
    });
  }
}

function event() {
  if (tiempo > 3300) {
    stepHeight = barraRmask.displayHeight / tiempo;
    tiempo--;
    barraRmask.y += stepHeight;
  }
  if (tiempo == 3300) {
    score -= 240;
    tiempo--;
  }
}
