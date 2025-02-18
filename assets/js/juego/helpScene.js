class helpScene extends Phaser.Scene {
  constructor() {
    super("ayuda_1");
  }

  create() {
    var Ayuda1 = Phaser.Math.RND.pick(Idioma.juego.ayuda1);
    var Ayuda = Phaser.Math.RND.pick(Idioma.menu.mainMenu.ayuda);
    var Creditos = Phaser.Math.RND.pick(Idioma.menu.mainMenu.creditos);
    
    if (help != 5) {
      this.add.image(960, 540, "inicio");
      this.add
        .text(396, 989, Ayuda, {
          fontFamily: "font1",
          fontSize: "60px",
        })
        .setTint(0x454545)
        .setOrigin(0.5);
      this.add
        .text(1524, 989, Creditos, {
          fontFamily: "font1",
          fontSize: "60px",
        })
        .setTint(0x454545)
        .setOrigin(0.5);
    }
    var negro = this.add
      .image(960, 540, "negro")
      .setAlpha(0.5)
      .setInteractive({ cursor: "pointer" });

    negro.on("pointerdown", () => {
      if (help == 5) {
        this.scene.start("Menu2");
      } else {
        musicaReproducida = 1;
        this.scene.start("Menu");
      }
    });
    this.add.image(960, 540, "ayuda").setInteractive().setScale(1);

    this.add
      .text(650, 160, Ayuda1, {
        fontFamily: "font1",
        fontSize: "34px",
        lineSpacing: 6,
      })
      .setTint(0x454545);

    this.add.image(1275, 935, "flechaPD").setScale(0.5);

    var flecha = this.add
      .image(1275, 935, "flechaPD_s")
      .setAlpha(0.001)
      .setInteractive({ cursor: "pointer" })
      .setScale(0.5);

    flecha.on("pointerover", () => {
      flecha.setAlpha(1);
    });

    flecha.on("pointerout", () => {
      flecha.setAlpha(0.001);
    });

    flecha.on("pointerdown", () => {
      this.scene.sleep();
      this.scene.run("ayuda_2");
    });
  }
}
//
