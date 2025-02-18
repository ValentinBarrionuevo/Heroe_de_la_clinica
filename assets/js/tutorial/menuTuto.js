class menuTuto extends Phaser.Scene {
  constructor() {
    super("Menu3");
  }

  create() {
    var Nombre = Phaser.Math.RND.pick(Idioma.tutorial.menuTuto.nombre);
    var Edad = Phaser.Math.RND.pick(Idioma.tutorial.menuTuto.edad);
    var GSanguineo = Phaser.Math.RND.pick(Idioma.tutorial.menuTuto.gSanguineo);
    var Estatura = Phaser.Math.RND.pick(Idioma.tutorial.menuTuto.estatura);

    var Varicela = Phaser.Math.RND.pick(Idioma.menu.infoPoster.varicela);
    var Rubeola = Phaser.Math.RND.pick(Idioma.menu.infoPoster.rubeola);
    var Paperas = Phaser.Math.RND.pick(Idioma.menu.infoPoster.paperas);

    var Terminar = Phaser.Math.RND.pick(Idioma.fichas.terminar);

    
    var hojasound = this.sound.add("Cambiarhoja");

    var hojaConfig = {
      volume: 0.25,
    };

    selloPS = 0;
    selloPE = 0;
    var negro = this.add
      .image(960, 540, "negro")
      .setAlpha(0.4)
      .setInteractive({ cursor: "pointer" });
    this.add.image(750, 540, "fichaTuto").setInteractive();

    this.add.image(752, 355, "fichaFotoTuto");

    this.add
      .image(1124, 732.5, "separador_pac_s")
      .setScale(0.45)
      .setAlpha(1)
      .setDepth(0.001);

    var sep2 = this.add
      .image(1123, 800.9, "separador_var_s")
      .setScale(0.45)
      .setAlpha(0.001)
      .setDepth(1)
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" });
    sep2.on("pointerover", () => {
      sep2.setAlpha(1);
    });
    sep2.on("pointerout", () => {
      sep2.setAlpha(0.001);
    });

    sep2.on("pointerdown", () => {
      this.scene.stop();
    if (muteado === 0) {
      hojasound.play(hojaConfig);
    }
      this.scene.start("var_Tuto");
      fichaVolver = 1;
    });

    this.add
      .text(500, 600, Nombre, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setTint(0x454545)
      .setOrigin(0, 0.5);

    this.add
      .text(1000, 600, "Arnone, Juan", {
        fontFamily: "font1",
        fontSize: "40px",
        align: "right",
      })
      .setTint(0x454545)
      .setOrigin(1, 0.5);

    this.add
      .text(1020, 610, "___________________________________", {
        fontFamily: "font1",
        fontSize: "40px",
        align: "right",
      })
      .setTint(0x454545)
      .setOrigin(1, 0.5);

    this.add
      .text(500, 660, GSanguineo, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setTint(0x454545)
      .setOrigin(0, 0.5);
    this.add
      .text(1000, 660, "A-", {
        fontFamily: "font1",
        fontSize: "40px",
        align: "right",
      })
      .setTint(0x454545)
      .setOrigin(1, 0.5);
    this.add
      .text(1020, 670, "___________________________________", {
        fontFamily: "font1",
        fontSize: "40px",
        align: "right",
      })
      .setTint(0x454545)
      .setOrigin(1, 0.5);

    this.add
      .text(500, 720, Estatura, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setTint(0x454545)
      .setOrigin(0, 0.5);
    this.add
      .text(1000, 720, "184cm", {
        fontFamily: "font1",
        fontSize: "40px",
        align: "right",
      })
      .setTint(0x454545)
      .setOrigin(1, 0.5);
    this.add
      .text(1020, 730, "___________________________________", {
        fontFamily: "font1",
        fontSize: "40px",
        align: "right",
      })
      .setTint(0x454545)
      .setOrigin(1, 0.5);

    this.add
      .text(500, 780, Edad, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setTint(0x454545)
      .setOrigin(0, 0.5);
    this.add
      .text(1000, 780, "32", {
        fontFamily: "font1",
        fontSize: "40px",
        align: "right",
      })
      .setTint(0x454545)
      .setOrigin(1, 0.5);
    this.add
      .text(1020, 790, "___________________________________", {
        fontFamily: "font1",
        fontSize: "40px",
        align: "right",
      })
      .setTint(0x454545)
      .setOrigin(1, 0.5);

    this.add
      .text(500, 875, Rubeola, {
        fontFamily: "font1",
        fontSize: "40px",
        align: "center",
      })
      .setTint(0x454545)
      .setOrigin(0.5)
      .setAlpha(0.3);
    this.add
      .text(750, 875, Varicela, {
        fontFamily: "font1",
        fontSize: "40px",
        align: "center",
      })
      .setTint(0x454545)
      .setOrigin(0.5);
    this.add
      .text(1000, 875, Paperas, {
        fontFamily: "font1",
        fontSize: "40px",
        align: "center",
      })
      .setTint(0x454545)
      .setOrigin(0.5)
      .setAlpha(0.3);

    var varSano = this.add
      .image(750, 877, "sano")
      .setOrigin(0.5)
      .setScale(0.5)
      .setAlpha(0.001);

    var varEnfermo = this.add
      .image(750, 877, "enfermo")
      .setOrigin(0.5)
      .setScale(0.5)
      .setAlpha(0.001);

    flecha = this.add
      .image(1400, 950, "boton")
      .setAlpha(0)
      .setInteractive({ cursor: "pointer" });

    var flechaS = this.add.image(flecha.x, flecha.y, "boton_s").setAlpha(0.001);

    flechaT = this.add
      .text(flecha.x, flecha.y, "", {
        fontFamily: "font1",
        fontSize: "45px",
      })
      .setTint(0x454545)
      .setOrigin(0.5)
      .setDepth(1);

    flecha.on("pointerover", () => {
      flechaS.setAlpha(1);
      flechaT.setTint(0xffffff);
    });
    flecha.on("pointerout", () => {
      flechaS.setAlpha(0.01);
      flechaT.setTint(0x454545);
    });

    flecha.on("pointerdown", () => {
      this.scene.sleep("clock");
      chat = 0;

      if (dolCabPuesto == 1) {
        score += 65;
      }
      if (fiebrePuesto == 1) {
        score += 65;
      }
      if (perApetPuesto == 1) {
        score += 65;
      }
      if (cansPuesto == 1) {
        score += 65;
      }

      if (varPuesto == 2) {
        tutoFinish =1;
        this.scene.start("score_E");
        score += 600;
        salv += 1;
      } else if (varPuesto == 1) {
        tutoFinish =1;
        this.scene.start("score_F");
      }
    });

    if (varPuesto == 1) {
      varSano.setAlpha(1);
      flecha.setAlpha(1);
      flechaT.setText(Terminar);
    } else if (varPuesto == 2) {
      varEnfermo.setAlpha(1);
      flecha.setAlpha(1);
      flechaT.setText(Terminar);
    }

    negro.on("pointerdown", () => {
      this.scene.sleep("sepTuto");
      this.scene.sleep();
      if (pausa == 2) {
        this.scene.resume("juego");
        pausa = 0;
      } else if (pausa == 4) {
        this.scene.resume("juego2");
        pausa = 0;
      } else if (pausa == 7) {
        this.scene.resume("juego3");
        pausa = 0;
      } else if (pausa == 8) {
        this.scene.resume("juego4");
        pausa = 0;
      }
    });
  }
}
