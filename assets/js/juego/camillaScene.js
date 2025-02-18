var muñeco_r;
class camillaScene extends Phaser.Scene {
  constructor() {
    super("juego4");
  }

  create() {
    var Ficha = Phaser.Math.RND.pick(Idioma.juego.camillaScene.info.ficha);
    var Puerta = Phaser.Math.RND.pick(Idioma.juego.camillaScene.info.puerta);
    var Libreta = Phaser.Math.RND.pick(Idioma.juego.camillaScene.info.libreta);
    var Estetoscopio = Phaser.Math.RND.pick(
      Idioma.juego.camillaScene.info.estetoscopio
    );
    var Termometro = Phaser.Math.RND.pick(
      Idioma.juego.camillaScene.info.termometro
    );
    var Linterna = Phaser.Math.RND.pick(
      Idioma.juego.camillaScene.info.linterna
    );
    var Guantes = Phaser.Math.RND.pick(Idioma.juego.camillaScene.info.guantes);

    var DiagGangT = Phaser.Math.RND.pick(Idioma.juego.diagnostico.diagGangTrue);
    var DiagGangF = Phaser.Math.RND.pick(
      Idioma.juego.diagnostico.diagGangFalse
    );
    var DiagFarT = Phaser.Math.RND.pick(Idioma.juego.diagnostico.diagFarTrue);
    var DiagFarF = Phaser.Math.RND.pick(Idioma.juego.diagnostico.diagFarFalse);
    var DiagInfT = Phaser.Math.RND.pick(Idioma.juego.diagnostico.diagInfTrue);
    var DiagInfF = Phaser.Math.RND.pick(Idioma.juego.diagnostico.diagInfFalse);
    var DiagTemp = Phaser.Math.RND.pick(Idioma.juego.diagnostico.diagTemp);

    var fichasound = this.sound.add("Ficha");

    var fichaConfig = {
      volume: 0.25,
    };

    var puertasound = this.sound.add("Puerta");

    var puertaConfig = {
      volume: 0.05,
    };

    var estetosound = this.sound.add("pickEsteto");

    var termossound = this.sound.add("pickTermos");

    var lintersound = this.sound.add("pickLinter");

    var guantesound = this.sound.add("pickGuante");

    var soltar = 0;

    var soltarsound = this.sound.add("Soltar");

    var GuanteConfig = {
      volume: 0.4,
    };

    var gvar = 0;
    var evar = 0;
    var lvar = 0;
    var tvar = 0;
    this.add.image(960, 540, "camilla");

    var back = this.add
      .image(10, 23, "infoB")
      .setOrigin(0, 1)
      .setAlpha(0.01)
      .setDepth(0.9);

    var info = this.add
      .text(0, 0, "", {
        fontSize: "40px",
        fontColor: "white",
        fontFamily: "font1",
      })
      .setOrigin(0, 1)
      .setDepth(1);

    this.input.on("pointermove", function (pointer) {
      back.setOrigin(0, 1);
      back.x = 10 + pointer.x;
      back.y = -5 + pointer.y;
      info.x = 30 + pointer.x;
      info.y = -13 + pointer.y;
    });
    var ficha_c = this.add
      .image(400, 958, "ficha_s")
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" });

    ficha_c.on("pointerdown", () => {
      this.scene.pause();
      if (muteado === 0) {
        fichasound.play(fichaConfig);
      }
      conectar = "pac";
      this.scene.run("conectorScene");
      pausa = 8;
      info.setText("");
      back.setAlpha(0.01);
      ficha_c.setAlpha(0.01);
    });
    ficha_c.on("pointerover", () => {
      info.setText(Ficha);
      ficha_c.setAlpha(1);
      if (selecIdioma == "es") {
        back.setAlpha(1).setScale(0.9, 1);
      } else if (selecIdioma == "en") {
        back.setAlpha(1).setScale(1);
      } else if (selecIdioma == "pt") {
        back.setAlpha(1).setScale(1);
      }
    });
    ficha_c.on("pointerout", () => {
      info.setText("");
      back.setAlpha(0.01);
      ficha_c.setAlpha(0.01);
    });

    var libreta = this.add
      .image(134, 962, "libreta_s")
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" });

    libreta.on("pointerdown", () => {
      this.scene.pause();
      this.scene.pause("clock");
      this.scene.run("Menu2");
      pausa = 8;
    });
    libreta.on("pointerover", () => {
      libreta.setAlpha(1);
      info.setText(Libreta);
      if (selecIdioma == "es") {
        back.setAlpha(1).setScale(0.38, 1);
      } else if (selecIdioma == "en") {
        back.setAlpha(1).setScale(0.38, 1);
      } else if (selecIdioma == "pt") {
        back.setAlpha(1).setScale(0.53, 1);
      }
    });
    libreta.on("pointerout", () => {
      libreta.setAlpha(0.03);
      info.setText("");
      back.setAlpha(0.01);
    });

    var puerta = this.add
      .image(32, 140, "puerta_2")
      .setOrigin(0)
      .setAlpha(0.001)
      .setInteractive({ cursor: "pointer" });

    puerta.on("pointerover", () => {
      puerta.setAlpha(1);
      info.setText(Puerta);
      if (selecIdioma == "es") {
        back.setAlpha(1).setScale(1.05, 1);
      } else if (selecIdioma == "en") {
        back.setAlpha(1).setScale(0.8, 1);
      } else if (selecIdioma == "pt") {
        back.setAlpha(1).setScale(1.07, 1);
      }
    });

    puerta.on("pointerdown", () => {
      pausa = 7;
      this.scene.sleep();
      if (muteado === 0) {
        puertasound.play(puertaConfig);
      }
      this.scene.start("juego3");
    });

    puerta.on("pointerout", () => {
      puerta.setAlpha(0.01);
      info.setText("");
      back.setAlpha(0.01);
    });

    var muñeco = this.add.image(1560, 636.5, "muñeco").setOrigin(0, 1);

    muñeco_r = this.add
      .sprite(1560, 636.5, "muñeco_r", 0)
      .setOrigin(0, 1)
      .setAlpha(0.01)
      .setInteractive();

    this.anims.create({
      key: "muñeco_anim",
      frames: this.anims.generateFrameNumbers("muñeco_r", {
        start: 0,
        end: 3,
      }),
      frameRate: 4,
      repeat: 10,
    });

    muñeco_r.on("pointerdown", () => {
      muñeco.setAlpha(0.01);
      muñeco_r.setAlpha(1);
    });

    //////// Herramientas ////////

    var guantes_s = this.add
      .image(1348, 962, "guantes_s")
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" });

    guantes_s.on("pointerdown", () => {
      if (muteado === 0) {
        if (soltar != 1) {
          guantesound.play(GuanteConfig);
          soltar = 1;
        } else if (soltar === 1) {
          soltarsound.play(GuanteConfig);
          soltar = 0;
        }
      }
      if (gvar == 0) {
        guantes_s.setTint(0xffff00);
        gvar = 1;
        evar = 0;
        lvar = 0;
        tvar = 0;
        esteto_s.clearTint().setAlpha(0.01);
        linterna_s.clearTint().setAlpha(0.01);
        termometro_s.clearTint().setAlpha(0.01);
        pac_gen
          .setInteractive({ cursor: "pointer", pixelPerfect: true })
          .setAlpha(1);
        info.setText("");
        back.setAlpha(0.01);
      } else if (gvar == 1) {
        guantes_s.clearTint();
        gvar = 0;
        pac_gen.disableInteractive().setAlpha(0.01);
        info.setText("");
        back.setAlpha(0.01);
      }
    });

    guantes_s.on("pointerover", () => {
      guantes_s.setAlpha(1);
      info.setText(Guantes);
      if (selecIdioma == "es") {
        back.setAlpha(1).setScale(0.5, 1);
      } else if (selecIdioma == "en") {
        back.setAlpha(1).setScale(0.43, 1);
      } else if (selecIdioma == "pt") {
        back.setAlpha(1).setScale(0.4, 1);
      }
    });

    guantes_s.on("pointerout", () => {
      if (gvar == 0) {
        guantes_s.setAlpha(0.01);
        info.setText("");
        back.setAlpha(0.01);
      }
    });

    this.add.image(665, 962, "estetoscopio");

    var esteto_s = this.add
      .image(665, 962, "estetoscopio_s")
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" });

    esteto_s.on("pointerdown", () => {
      if (muteado === 0) {
        if (soltar != 1) {
          estetosound.play();
          soltar = 1;
        } else if (soltar === 1) {
          soltarsound.play(GuanteConfig);
          soltar = 0;
        }
      }
      if (evar == 0) {
        esteto_s.setTint(0xffff00);
        gvar = 0;
        evar = 1;
        lvar = 0;
        tvar = 0;
        guantes_s.clearTint().setAlpha(0.01);
        linterna_s.clearTint().setAlpha(0.01);
        termometro_s.clearTint().setAlpha(0.01);
        pac_gen
          .setInteractive({ cursor: "pointer", pixelPerfect: true })
          .setAlpha(1);
        info.setText("");
        back.setAlpha(0.01);
      } else if (evar == 1) {
        esteto_s.clearTint();
        evar = 0;
        pac_gen.disableInteractive().setAlpha(0.01);
        info.setText("");
        back.setAlpha(0.01);
      }
    });

    esteto_s.on("pointerover", () => {
      esteto_s.setAlpha(1);
      info.setText(Estetoscopio);
      if (selecIdioma == "es") {
        back.setAlpha(1).setScale(0.7, 1);
      } else if (selecIdioma == "en") {
        back.setAlpha(1).setScale(0.67, 1);
      } else if (selecIdioma == "pt") {
        back.setAlpha(1).setScale(0.7, 1);
      }
    });

    esteto_s.on("pointerout", () => {
      if (evar == 0) {
        esteto_s.setAlpha(0.01);
        info.setText("");
        back.setAlpha(0.01);
      }
    });

    this.add.image(1100, 962, "linterna");

    var linterna_s = this.add
      .image(1100, 962, "linterna_s")
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" });

    linterna_s.on("pointerdown", () => {
      if (muteado === 0) {
        if (soltar != 1) {
          lintersound.play();
          soltar = 1;
        } else if (soltar === 1) {
          soltarsound.play(GuanteConfig);
          soltar = 0;
        }
      }
      if (lvar == 0) {
        linterna_s.setTint(0xffff00);
        gvar = 0;
        evar = 0;
        lvar = 1;
        tvar = 0;
        guantes_s.clearTint().setAlpha(0.01);
        esteto_s.clearTint().setAlpha(0.01);
        termometro_s.clearTint().setAlpha(0.01);
        pac_gen
          .setInteractive({ cursor: "pointer", pixelPerfect: true })
          .setAlpha(1);
        info.setText("");
        back.setAlpha(0.01);
      } else if (lvar == 1) {
        linterna_s.clearTint();
        lvar = 0;
        pac_gen.disableInteractive().setAlpha(0.01);
        info.setText("");
        back.setAlpha(0.01);
      }
    });

    linterna_s.on("pointerover", () => {
      linterna_s.setAlpha(1);
      info.setText(Linterna);
      if (selecIdioma == "es") {
        back.setAlpha(1).setScale(0.5, 1);
      } else if (selecIdioma == "en") {
        back.setAlpha(1).setScale(0.5, 1);
      } else if (selecIdioma == "pt") {
        back.setAlpha(1).setScale(0.53, 1);
      }
    });

    linterna_s.on("pointerout", () => {
      if (lvar == 0) {
        linterna_s.setAlpha(0.01);
        info.setText("");
        back.setAlpha(0.01);
      }
    });

    this.add.image(885, 962, "termometro");

    var termometro_s = this.add
      .image(885, 962, "termometro_s")
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" });

    termometro_s.on("pointerdown", () => {
      if (muteado === 0) {
        if (soltar != 1) {
          termossound.play();
          soltar = 1;
        } else if (soltar === 1) {
          soltarsound.play(GuanteConfig);
          soltar = 0;
        }
      }
      if (tvar == 0) {
        termometro_s.setTint(0xffff00);
        gvar = 0;
        evar = 0;
        lvar = 0;
        tvar = 1;
        guantes_s.clearTint().setAlpha(0.01);
        esteto_s.clearTint().setAlpha(0.01);
        linterna_s.clearTint().setAlpha(0.01);
        pac_gen
          .setInteractive({ cursor: "pointer", pixelPerfect: true })
          .setAlpha(1);
        info.setText("");
        back.setAlpha(0.01);
      } else if (tvar == 1) {
        termometro_s.clearTint();
        tvar = 0;
        pac_gen.disableInteractive().setAlpha(0.01);
        info.setText("");
        back.setAlpha(0.01);
      }
    });

    termometro_s.on("pointerover", () => {
      termometro_s.setAlpha(1);
      info.setText(Termometro);
      if (selecIdioma == "es") {
        back.setAlpha(1).setScale(0.72, 1);
      } else if (selecIdioma == "en") {
        back.setAlpha(1).setScale(0.7, 1);
      } else if (selecIdioma == "pt") {
        back.setAlpha(1).setScale(0.73, 1);
      }
    });

    termometro_s.on("pointerout", () => {
      if (tvar == 0) {
        termometro_s.setAlpha(0.01);
        info.setText("");
        back.setAlpha(0.01);
      }
    });

    var pac_01_d = this.add.image(1070, 656, "paciente_02a").setOrigin(0, 1);

    var pac_01 = this.add
      .image(pac_01_d.x, pac_01_d.y, "paciente_02a_s")
      .setAlpha(0.01)
      .setOrigin(0, 1);
    pac_gen = pac_01;

    var pac_02_d = this.add
      .image(1070, 648, "paciente_03a")
      .setAlpha(0)
      .setOrigin(0, 1);
    var pac_02 = this.add
      .image(pac_02_d.x - 8, pac_02_d.y + 8, "paciente_03a_s")
      .setAlpha(0)
      .setOrigin(0, 1);

    var pac_03_d = this.add
      .image(1070, 648, "paciente_04a")
      .setAlpha(0)
      .setOrigin(0, 1);
    var pac_03 = this.add
      .image(pac_03_d.x - 8, pac_03_d.y + 8, "paciente_04a_s")
      .setAlpha(0)
      .setOrigin(0, 1);

    var pac_04_d = this.add
      .image(1070, 652, "paciente_05a")
      .setAlpha(0)
      .setOrigin(0, 1);
    var pac_04 = this.add
      .image(pac_04_d.x - 8, pac_04_d.y + 8, "paciente_05a_s")
      .setAlpha(0)
      .setOrigin(0, 1);

    if (pacientes == 2) {
      pac_gen = pac_02;
      pac_01_d.setAlpha(0);
      pac_02_d.setAlpha(1);
      pac_03_d.setAlpha(0);
      pac_04_d.setAlpha(0);
    } else if (pacientes == 3) {
      pac_gen = pac_03;
      pac_01_d.setAlpha(0);
      pac_02_d.setAlpha(0);
      pac_03_d.setAlpha(1);
      pac_04_d.setAlpha(0);
    } else if (pacientes == 4) {
      pac_gen = pac_04;
      pac_01_d.setAlpha(0);
      pac_02_d.setAlpha(0);
      pac_03_d.setAlpha(0);
      pac_04_d.setAlpha(1);
    }

    var temperaturaFinal = Phaser.Math.RoundTo(temperatura, -2);

    pac_gen.on("pointerdown", () => {
      info.setText("");
      back.setAlpha(0.01);
      if (gvar == 1) {
        guantes_s.clearTint().setAlpha(0.01);
        pac_gen.disableInteractive().setAlpha(0.01);
        gvar = 0;
        this.scene.pause();
        pausa = 8;
        if (gang == "true") {
          diag = DiagGangT;
          this.scene.run("diagSce");
        } else {
          diag = DiagGangF;
          this.scene.run("diagSce");
        }
      }
      if (evar == 1) {
        esteto_s.clearTint().setAlpha(0.01);
        pac_gen.disableInteractive().setAlpha(0.01);
        evar = 0;
        this.scene.pause();
        pausa = 8;
        if (far == "true") {
          diag = DiagFarT;
          this.scene.run("diagSce");
        } else {
          diag = DiagFarF;
          this.scene.run("diagSce");
        }
      }
      if (lvar == 1) {
        linterna_s.clearTint().setAlpha(0.01);
        pac_gen.disableInteractive().setAlpha(0.01);
        lvar = 0;
        this.scene.pause();
        pausa = 8;
        if (inf == "true") {
          diag = DiagInfT;
          this.scene.run("diagSce");
        } else {
          diag = DiagInfF;
          this.scene.run("diagSce");
        }
      }
      if (tvar == 1) {
        termometro_s.clearTint().setAlpha(0.01);
        pac_gen.disableInteractive().setAlpha(0.01);
        tvar = 0;
        this.scene.pause();
        pausa = 8;
        diag = DiagTemp + temperaturaFinal + "°C";
        this.scene.run("diagSce");
      }
    });
  }
  update() {
    muñeco_r.on("pointerdown", () => {
      muñeco_r.anims.play("muñeco_anim", true);
    });
  }
}
