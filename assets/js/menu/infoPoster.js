class infoPoster extends Phaser.Scene {
  constructor() {
    super("postersintomas");
  }

  create() {
    var Rubeola = Phaser.Math.RND.pick(Idioma.menu.infoPoster.rubeola);
    var RubInfo = Phaser.Math.RND.pick(Idioma.menu.infoPoster.rubInfo);
    var Varicela = Phaser.Math.RND.pick(Idioma.menu.infoPoster.varicela);
    var VarInfo = Phaser.Math.RND.pick(Idioma.menu.infoPoster.varInfo);
    var Paperas = Phaser.Math.RND.pick(Idioma.menu.infoPoster.paperas);
    var PapInfo = Phaser.Math.RND.pick(Idioma.menu.infoPoster.papInfo);

    var negro = this.add
      .image(960, 540, "negro")
      .setAlpha(0.4)
      .setInteractive({ cursor: "pointer" });

    negro.on("pointerdown", () => {
      this.scene.sleep();
      this.scene.resume("juego3");
    });

    this.add.image(960, 540, "poster").setInteractive().setScale(0.8);

    this.add
      .text(700, 115, Rubeola, {
        fontFamily: "font1",
        fontSize: "60px",
      })
      .setTint(0x454545);
    this.add
      .text(700, 220, RubInfo, {
        fontFamily: "font1",
        fontSize: "40px",
        lineSpacing: 9,
      })
      .setTint(0x454545);
    this.add
      .text(500, 415, Varicela, {
        fontFamily: "font1",
        fontSize: "60px",
      })
      .setTint(0x454545);
    this.add
      .text(425, 505, VarInfo, {
        fontFamily: "font1",
        fontSize: "40px",
        lineSpacing: 9,
      })
      .setTint(0x454545);
    this.add
      .text(720, 650, Paperas, {
        fontFamily: "font1",
        fontSize: "60px",
      })
      .setTint(0x454545);
    this.add
      .text(700, 740, PapInfo, {
        fontFamily: "font1",
        fontSize: "40px",
        lineSpacing: 9,
      })
      .setTint(0x454545);
  }
}
