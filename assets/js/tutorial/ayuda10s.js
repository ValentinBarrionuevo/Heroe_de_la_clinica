class ayuda10s extends Phaser.Scene {
  constructor() {
    super("help10s");
  }

  create() {
    var Info = Phaser.Math.RND.pick(Idioma.tutorial.ayuda10s);

    var negro = this.add
      .image(960, 540, "negro")
      .setAlpha(0.4)
      .setInteractive({ cursor: "pointer" });

    negro.on("pointerdown", () => {
      this.scene.sleep();
      this.scene.resume("juego");
    });

    this.add.image(960, 470, "cartelAyuda").setInteractive().setScale(1.3);

    this.add
      .text(960, 470, Info, {
        fontFamily: "font1",
        fontSize: "100px",
        align: "center",
      })
      .setTint(0x454545)
      .setOrigin(0.5);
  }
}
