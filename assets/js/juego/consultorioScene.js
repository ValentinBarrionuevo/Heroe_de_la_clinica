class consultorioScene extends Phaser.Scene {
  constructor() {
    super("juego3");
  }
  create() {
    var Ficha = Phaser.Math.RND.pick(Idioma.juego.consultorioScene.ficha);
    var Puerta = Phaser.Math.RND.pick(Idioma.juego.consultorioScene.puerta);
    var Libreta = Phaser.Math.RND.pick(Idioma.juego.consultorioScene.libreta);
    var Charlar = Phaser.Math.RND.pick(Idioma.juego.consultorioScene.charlar);
    var Poster = Phaser.Math.RND.pick(Idioma.juego.consultorioScene.poster);

    var Rubeola = Phaser.Math.RND.pick(Idioma.menu.infoPoster.rubeola);
    var Varicela = Phaser.Math.RND.pick(Idioma.menu.infoPoster.varicela);
    var Paperas = Phaser.Math.RND.pick(Idioma.menu.infoPoster.paperas);

    var fichasound = this.sound.add("Ficha");

    var fichaConfig = {
      volume: 0.25,
    };

    var puertasound = this.sound.add("Puerta");

    var puertaConfig = {
      volume: 0.05,
    };

    if (pacientesMusic === 1) {
      music3 = this.sound.add("menu_Game1");
      music2.stop();
      if (muteado === 0) {
        if (musicaReproducida == 0) {
          if (musica === 0) {
            music3.play(musicConfig2);
          }
        }
      }
    }

    if (pacientesMusic === 2) {
      music4 = this.sound.add("menu_Game1");
      music3.stop();
      if (muteado === 0) {
        if (musicaReproducida == 0) {
          if (musica === 0) {
            music4.play(musicConfig2);
          }
        }
      }
    }

    if (pacientesMusic === 3) {
      music5 = this.sound.add("menu_Game1");
      music4.stop();
      if (muteado === 0) {
        if (musicaReproducida == 0) {
          if (musica === 0) {
            music5.play(musicConfig2);
          }
        }
      }
    }

    if (pacientesMusic === 4) {
      music6 = this.sound.add("menu_Game1");
      music5.stop();
      if (muteado === 0) {
        if (musicaReproducida == 0) {
          if (musica === 0) {
            music6.play(musicConfig2);
          }
        }
      }
    }

    if (pacientes == 1) {
      finalSalv = 0;
    }

    this.add.image(960, 540, "consultorio").setScale(1.0);

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
      if (pointer.x > 1520) {
        back.setOrigin(1);
        back.x = -10 + pointer.x;
        if (selecIdioma == "es") {
          back.y = -5 + pointer.y;
          info.x = -210 + pointer.x;
          info.y = -13 + pointer.y;
        } else if (selecIdioma == "en") {
          back.y = -5 + pointer.y;
          info.x = -265 + pointer.x;
          info.y = -13 + pointer.y;
        } else if (selecIdioma == "pt") {
          back.y = -5 + pointer.y;
          info.x = -237 + pointer.x;
          info.y = -13 + pointer.y;
        }
      } else {
        back.setOrigin(0, 1);
        back.x = 10 + pointer.x;
        back.y = -5 + pointer.y;
        info.x = 30 + pointer.x;
        info.y = -13 + pointer.y;
      }
    });

    var ficha_c = this.add
      .image(400, 958, "ficha_s")
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" });

    ficha_c.on("pointerdown", () => {
      if (muteado === 0) {
        fichasound.play(fichaConfig);
      }
      musicaReproducida = 1;
      conectar = "pac";
      this.scene.run("conectorScene");
      pausa = 7;
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

    var fichasintomas = this.add
      .image(1153, 153, "hitbox")
      .setScale(1.7, 0.75)
      .setOrigin(0)
      .setInteractive({ cursor: "pointer" })
      .setAlpha(0.001);

    fichasintomas.on("pointerdown", () => {
      this.scene.pause("juego3");
      this.scene.run("postersintomas");
      info.setText("");
      back.setAlpha(0.01);
    });

    fichasintomas.on("pointerover", () => {
      info.setText(Poster);
      if (selecIdioma == "es") {
        back.setAlpha(1).setScale(1.03, 1);
      } else if (selecIdioma == "en") {
        back.setAlpha(1).setScale(1.1, 1);
      } else if (selecIdioma == "pt") {
        back.setAlpha(1).setScale(1.45, 1);
      }
    });
    fichasintomas.on("pointerout", () => {
      info.setText("");
      back.setAlpha(0.01);
    });

    this.add
      .text(1270, 169, Rubeola, {
        fontFamily: "font1",
        fontSize: "30px",
      })
      .setTint(0x868686);

    this.add
      .text(1200, 262, Varicela, {
        fontFamily: "font1",
        fontSize: "30px",
      })
      .setTint(0x868686);

    this.add
      .text(1270, 365, Paperas, {
        fontFamily: "font1",
        fontSize: "30px",
      })
      .setTint(0x868686);

    var libreta = this.add
      .image(134, 962, "libreta_s")
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" });

    libreta.on("pointerdown", () => {
      this.scene.pause();
      this.scene.pause("clock");
      this.scene.run("Menu2");
      pausa = 7;
      info.setText("");
      back.setAlpha(0.01);
      libreta.setAlpha(0.01);
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

    this.add.image(860, 900, "bowl").setOrigin(0.5, 0).setScale(1.2);

    var puerta = this.add
      .image(1528, 140, "puerta_1")
      .setOrigin(0)
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer" });

    puerta.on("pointerover", () => {
      puerta.setAlpha(1);
      info.setText(Puerta);
      if (selecIdioma == "es") {
        back.setAlpha(1).setScale(0.75, 1);
      } else if (selecIdioma == "en") {
        back.setAlpha(1).setScale(0.95, 1);
      } else if (selecIdioma == "pt") {
        back.setAlpha(1).setScale(0.85, 1);
      }
    });

    puerta.on("pointerdown", () => {
      pausa = 8;
      this.scene.sleep();
      if (muteado === 0) {
        puertasound.play(puertaConfig);
      }
      this.scene.start("juego4");
    });

    puerta.on("pointerout", () => {
      puerta.setAlpha(0.01);
      info.setText("");
      back.setAlpha(0.01);
    });

    var pac_01 = this.add
      .image(784, 800, "paciente_02")
      .setOrigin(0, 1)
      .setInteractive({ pixelPerfect: "true", cursor: "pointer" });

    var pac_02 = this.add
      .image(784, 800, "paciente_03")
      .setOrigin(0, 1)
      .setInteractive({ pixelPerfect: "true", cursor: "pointer" })
      .setAlpha(0);
    var pac_03 = this.add
      .image(784, 800, "paciente_04")
      .setOrigin(0, 1)
      .setInteractive({ pixelPerfect: "true", cursor: "pointer" })
      .setAlpha(0);
    var pac_04 = this.add
      .image(784, 800, "paciente_05")
      .setOrigin(0, 1)
      .setInteractive({ pixelPerfect: "true", cursor: "pointer" })
      .setAlpha(0);

    pac_gen = pac_01;

    if (pacientes == 2) {
      pac_gen = pac_02;
      pac_01.setAlpha(0);
      pac_02.setAlpha(1);
      pac_03.setAlpha(0);
      pac_04.setAlpha(0);
    } else if (pacientes == 3) {
      pac_gen = pac_03;
      pac_01.setAlpha(0);
      pac_02.setAlpha(0);
      pac_03.setAlpha(1);
      pac_04.setAlpha(0);
    } else if (pacientes == 4) {
      pac_gen = pac_04;
      pac_01.setAlpha(0);
      pac_02.setAlpha(0);
      pac_03.setAlpha(0);
      pac_04.setAlpha(1);
    }

    pac_gen.on("pointerdown", () => {
      info.setText("");
      back.setAlpha(0.01);
      pausa = 7;
      chat = 0;
      this.scene.pause();
      this.scene.start("charla_01");
    });

    pac_gen.on("pointerover", () => {
      info.setText(Charlar);
      if (selecIdioma == "es") {
        back.setAlpha(1).setScale(0.4, 1);
      } else if (selecIdioma == "en") {
        back.setAlpha(1).setScale(0.35, 1);
      } else if (selecIdioma == "pt") {
        back.setAlpha(1).setScale(0.35, 1);
      }
    });
    pac_gen.on("pointerout", () => {
      info.setText("");
      back.setAlpha(0.01);
    });
  }
}
