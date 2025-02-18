class sceneIdioma extends Phaser.Scene {
  constructor() {
    super("scene_Idioma");
  }

  create() {
    this.add.image(960, 540, "botonIdioma");

    var Idioma1 = this.add
      .image(960, 540, "botonES")
      .setAlpha(0.001)
      .setInteractive({ cursor: "pointer", pixelPerfect: true });

    var Idioma2 = this.add
      .image(960, 540, "botonEN")
      .setAlpha(0.001)
      .setInteractive({ cursor: "pointer", pixelPerfect: true });

    var Idioma3 = this.add
      .image(960, 540, "botonPT")
      .setAlpha(0.001)
      .setInteractive({ cursor: "pointer", pixelPerfect: true });

    var backGen = this.add
      .image(960, 100, "infoB")
      .setAlpha(0)
      .setDepth(0.9)
      .setScale(3, 2.5)
      .setTint(0x000000);

    var infoGen = this.add
      .text(backGen.x, backGen.y - 10, "", {
        fontSize: "80px",
        fontFamily: "font1",
      })
      .setOrigin(0.5)
      .setDepth(1);

    var back = this.add
      .image(960, 900, "infoB")
      .setAlpha(0.001)
      .setDepth(0.9)
      .setScale(1.5, 2)
      .setTint(0x000000);
    var info = this.add
      .text(back.x, back.y - 10, "", {
        fontSize: "80px",
        fontFamily: "font1",
      })
      .setOrigin(0.5)
      .setDepth(1);

    Idioma1.on("pointerdown", () => {
      selecIdioma = "es";
      Idioma = this.game.cache.json.get("es_ES");
      this.scene.start("Menu");
      this.scale.startFullscreen();
      muteado = 0;
    });
    Idioma1.on("pointerover", () => {
      Idioma1.setAlpha(1);
      info.setText("Español");
      infoGen.setText("Seleccione un idioma");
      back.setAlpha(1).setScale(1, 2);
      back.x = 230;
      info.x = back.x;
      backGen.setAlpha(1);
    });
    Idioma1.on("pointerout", () => {
      Idioma1.setAlpha(0.001);
      info.setText("");
      back.setAlpha(0.01);
      infoGen.setText("");
      backGen.setAlpha(0.01);
    });

    Idioma2.on("pointerdown", () => {
      selecIdioma = "en";
      Idioma = this.game.cache.json.get("en_EN");
      this.scene.start("Menu");
      this.scale.startFullscreen();
      muteado = 0;
    });
    Idioma2.on("pointerover", () => {
      Idioma2.setAlpha(1);
      info.setText("English");
      infoGen.setText("Select a language");
      back.setAlpha(1).setScale(1, 2);
      back.x = 850;
      info.x = back.x;
      backGen.setAlpha(1);
    });
    Idioma2.on("pointerout", () => {
      Idioma2.setAlpha(0.001);
      info.setText("");
      back.setAlpha(0.01);
      infoGen.setText("");
      backGen.setAlpha(0.01);
    });

    Idioma3.on("pointerdown", () => {
      selecIdioma = "pt";
      Idioma = this.game.cache.json.get("pt_PT");
      this.scene.start("Menu");
      this.scale.startFullscreen();
      muteado = 0;
    });
    Idioma3.on("pointerover", () => {
      Idioma3.setAlpha(1);
      info.setText("Português");
      infoGen.setText("Selecione um idioma");
      back.setAlpha(1).setScale(1.3, 2);
      back.x = 1500;
      info.x = back.x;
      backGen.setAlpha(1);
    });
    Idioma3.on("pointerout", () => {
      Idioma3.setAlpha(0.001);
      info.setText("");
      back.setAlpha(0.01);
      infoGen.setText("");
      backGen.setAlpha(0.01);
      muteado = 0;
    });
  }
}
