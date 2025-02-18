class menuPausa extends Phaser.Scene {
  constructor() {
    super("Menu2");
  }
  create() {
    var Pausa = Phaser.Math.RND.pick(Idioma.menu.menuPausa.pausa);
    var Reanudar = Phaser.Math.RND.pick(Idioma.menu.menuPausa.reanudar);
    var Ayuda = Phaser.Math.RND.pick(Idioma.menu.menuPausa.ayuda);
    var Salir = Phaser.Math.RND.pick(Idioma.menu.menuPausa.salir);

    this.add.image(960, 540, "negro").setAlpha(0.5);
    this.add.image(960, 540, "libreta").setScale(1.7).setInteractive();

    this.add
      .text(980, 160, Pausa, {
        fontFamily: "font1",
        fontSize: "100px",
      })
      .setOrigin(0.5)
      .setTint(0x2f4f4f);

    var resumeT = this.add
      .text(980, 450, Reanudar, {
        fontFamily: "font1",
        fontSize: "75px",
      })
      .setOrigin(0.5)
      .setTint(0x2f4f4f);

    var ayudaT = this.add
      .text(980, 600, Ayuda, {
        fontFamily: "font1",
        fontSize: "75px",
      })
      .setOrigin(0.5)
      .setTint(0x2f4f4f);

    var backT = this.add
      .text(980, 750, Salir, {
        fontFamily: "font1",
        fontSize: "75px",
      })
      .setOrigin(0.5)
      .setTint(0x2f4f4f);

    var resume = this.add
      .image(980, 450, "hitbox3")
      .setScale(1.95, 1.3)
      .setAlpha(0.001)
      .setInteractive({ cursor: "pointer" });

    resume.on("pointerdown", () => {
      this.scene.sleep();
      if (pausa == 2) {
        this.scene.resume("juego");
        this.scene.resume("clock");
      } else if (pausa == 4) {
        this.scene.resume("juego2");
        this.scene.resume("clock");
      } else if (pausa == 7) {
        this.scene.resume("juego3");
        this.scene.resume("clock");
      } else if (pausa == 8) {
        this.scene.resume("juego4");
        this.scene.resume("clock");
      }
    });

    resume.on("pointerover", () => {
      resumeT.setTint(0x168882);
    });

    resume.on("pointerout", () => {
      resumeT.setTint(0x2f4f4f);
    });

    var ayuda = this.add
      .image(980, 600, "hitbox3")
      .setScale(1.95, 1.3)
      .setAlpha(0.001)
      .setInteractive({ cursor: "pointer" });

    ayuda.on("pointerdown", () => {
      help = 5;
      this.scene.stop();
      this.scene.run("ayuda_1");
    });

    ayuda.on("pointerover", () => {
      ayudaT.setTint(0x168882);
    });

    ayuda.on("pointerout", () => {
      ayudaT.setTint(0x2f4f4f);
    });

    var back = this.add
      .image(980, 750, "hitbox3")
      .setScale(1.95, 1.3)
      .setAlpha(0.001)
      .setInteractive({ cursor: "pointer" });

    back.on("pointerdown", () => {
      if (pausa == 2) {
        this.scene.sleep("juego");
      } else if (pausa == 4) {
        this.scene.sleep("juego2");
      } else if (pausa == 7) {
        this.scene.sleep("juego3");
      } else if (pausa == 8) {
        this.scene.sleep("juego4");
      }
      this.scene.restart("juego");
      this.scene.restart("juego2");
      this.scene.restart("juego3");
      this.scene.restart("juego4");
      tiempo = 10000;
      this.scene.sleep("clock");
      this.scene.start("Menu");
      music2.stop();
    });

    back.on("pointerover", () => {
      backT.setTint(0x168882);
    });

    back.on("pointerout", () => {
      backT.setTint(0x2f4f4f);
    });
  }
}
