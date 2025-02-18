class diagnostico extends Phaser.Scene {
  constructor() {
    super("diagSce");
  }
  create() {
    var tiempo = 0;
    this.add
      .text(450, 150, diag, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setTint(0x000000);
    this.gameTimer = this.time.addEvent({
      delay: 2000,
      callback: function () {
        tiempo++;
        if ((tiempo = 1)) {
          tiempo = 0;
          diag = "";
          this.scene.sleep();
          this.scene.pause("clock");
          if (pausa == 4) {
            this.scene.resume("juego2");
          } else if (pausa == 8) {
            this.scene.resume("juego4");
          }
          this.scene.restart("diagSce");
        }
      },
      callbackScope: this,
    });
  }
}
