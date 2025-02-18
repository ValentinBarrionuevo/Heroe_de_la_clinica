class varMenu extends Phaser.Scene {
  constructor() {
    super("Menu3_03");
  }
  update() {
    if (resetFichaB == 1) {
      this.scene.restart();
      resetFichaB = 0;
    }
  }

  create() {
    var Varicela = Phaser.Math.RND.pick(Idioma.menu.infoPoster.varicela);
    var Fiebre = Phaser.Math.RND.pick(Idioma.fichas.fiebre);
    var DolorCabeza = Phaser.Math.RND.pick(Idioma.fichas.dolorCabeza);
    var PerApet = Phaser.Math.RND.pick(Idioma.fichas.perApet);
    var Cans = Phaser.Math.RND.pick(Idioma.fichas.cans);

    var Si = Phaser.Math.RND.pick(Idioma.fichas.si);
    var No = Phaser.Math.RND.pick(Idioma.fichas.no);
    var Estado = Phaser.Math.RND.pick(Idioma.fichas.estado);

    var Enfermo = Phaser.Math.RND.pick(Idioma.fichas.enfermo);
    var Sano = Phaser.Math.RND.pick(Idioma.fichas.sano);

    selloPS = 0;
    selloPE = 0;

    var sellopuestoPS = 0;
    var sellopuestoPE = 0;

    var sellosound = this.sound.add("Sellar");

    var selloConfig = {
      volume: 0.15,
    };

    var escribirSonido = this.sound.add("escribir");

    var hojasound = this.sound.add("Cambiarhoja");

    var hojaConfig = {
      volume: 0.25,
    };

    var negro = this.add
      .image(960, 540, "negro")
      .setAlpha(0.4)
      .setInteractive({ cursor: "pointer" });
    negro.on("pointerdown", () => {
      this.scene.sleep("MenuP");
      this.scene.sleep();
      if (pausa == 7) {
        this.scene.run("juego3");
        pausa = 0;
      } else if (pausa == 8) {
        this.scene.run("juego4");
        pausa = 0;
      }
    });
    var ficha = this.add.image(750, 540, "ficha").setInteractive();

    var sepR = this.add
      .image(1145, 659, "separador_pac_r")
      .setScale(0.45)
      .setAlpha(0.001);

    var sep1 = this.add
      .image(1123, 661, "separador_pac_s")
      .setScale(0.45)
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" })
      .setAlpha(0.001)
      .setDepth(1);
    sep1.on("pointerover", () => {
      sep1.setAlpha(1);
    });
    sep1.on("pointerout", () => {
      sep1.setAlpha(0.001);
    });
    sep1.on("pointerdown", () => {
      this.scene.stop();
      if (muteado == 0) {
        hojasound.play(hojaConfig);
      }
      conectar = "pac";
      this.scene.run("conectorScene");
      sep1.setAlpha(0.01);
      sep2.setAlpha(0.01);
      sep4.setAlpha(0.01);
    });

    var sep2 = this.add
      .image(1124, 732.5, "separador_rub_s")
      .setScale(0.45)
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" })
      .setAlpha(0.001)
      .setDepth(1);
    sep2.on("pointerover", () => {
      sep2.setAlpha(1);
    });
    sep2.on("pointerout", () => {
      sep2.setAlpha(0.001);
    });
    sep2.on("pointerdown", () => {
      this.scene.stop();
      if (muteado == 0) {
        hojasound.play(hojaConfig);
      }
      conectar = "rub";
      this.scene.run("conectorScene");
      sep1.setAlpha(0.01);
      sep2.setAlpha(0.01);
      sep4.setAlpha(0.01);
    });

    var sep3 = this.add
      .image(1124, 800.9, "separador_var_s")
      .setScale(0.45)
      .setAlpha(1)
      .setDepth(1);

    var sep4 = this.add
      .image(1124, 873, "separador_pap_s")
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" })
      .setScale(0.45)
      .setAlpha(0.001)
      .setDepth(1);
    sep4.on("pointerover", () => {
      sep4.setAlpha(1);
    });
    sep4.on("pointerout", () => {
      sep4.setAlpha(0.001);
    });
    sep4.on("pointerdown", () => {
      this.scene.stop();
      if (muteado == 0) {
        hojasound.play(hojaConfig);
      }
      conectar = "pap";
      this.scene.run("conectorScene");
      sep1.setAlpha(0.01);
      sep2.setAlpha(0.01);
      sep4.setAlpha(0.01);
    });

    boton_ayuda = this.add
      .image(1010, 185, "boton_ayuda")
      .setInteractive({ cursor: "pointer" })
      .setScale(0.6);
    boton_ayuda_s = this.add
      .image(boton_ayuda.x, boton_ayuda.y, "boton_ayuda_s")
      .setAlpha(0.001)
      .setScale(0.6);

    boton_ayuda.on("pointerover", () => {
      boton_ayuda_s.setAlpha(1);
    });
    boton_ayuda.on("pointerout", () => {
      boton_ayuda_s.setAlpha(0.001);
    });
    boton_ayuda.on("pointerdown", () => {
      this.scene.start("infoEnfermedad");
      this.scene.stop();
      infoE = 3;
    });

    this.add
      .text(440, 140, Varicela, {
        fontFamily: "font1",
        fontSize: "75px",
      })
      .setTint(0x454545);

    this.add
      .text(420, 325, Fiebre, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setTint(0x454545)
      .setOrigin(0, 0.5);

    this.add
      .text(420, 375, DolorCabeza, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setTint(0x454545)
      .setOrigin(0, 0.5);

    this.add
      .text(420, 425, PerApet, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setTint(0x454545)
      .setOrigin(0, 0.5);

    this.add
      .text(420, 475, Cans, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setTint(0x454545)
      .setOrigin(0, 0.5);

    var textoSi = this.add
      .text(900, 260, Si, {
        fontFamily: "font1",
        fontSize: "50px",
      })
      .setTint(0x454545)
      .setOrigin(0.5);

    var textoNo = this.add
      .text(1020, 260, No, {
        fontFamily: "font1",
        fontSize: "50px",
      })
      .setTint(0x454545)
      .setOrigin(0.5);

    var siP = this.add
      .image(textoSi.x, 330, "casilla")
      .setInteractive({ cursor: "pointer" })
      .setScale(0.65);
    var siP2 = this.add
      .image(textoSi.x, 380, "casilla")
      .setInteractive({ cursor: "pointer" })
      .setScale(0.65);
    var siP3 = this.add
      .image(textoSi.x, 430, "casilla")
      .setInteractive({ cursor: "pointer" })
      .setScale(0.65);
    var siP4 = this.add
      .image(textoSi.x, 480, "casilla")
      .setInteractive({ cursor: "pointer" })
      .setScale(0.65);

    var noP = this.add
      .image(textoNo.x, siP.y, "casilla")
      .setInteractive({ cursor: "pointer" })
      .setScale(0.65);
    var noP2 = this.add
      .image(textoNo.x, siP2.y, "casilla")
      .setInteractive({ cursor: "pointer" })
      .setScale(0.65);
    var noP3 = this.add
      .image(textoNo.x, siP3.y, "casilla")
      .setInteractive({ cursor: "pointer" })
      .setScale(0.65);
    var noP4 = this.add
      .image(textoNo.x, siP4.y, "casilla")
      .setInteractive({ cursor: "pointer" })
      .setScale(0.65);

    // -----------------------------------------
    var circulo = this.add
      .image(siP.x, siP.y, "tilde")
      .setAlpha(0.01)
      .setScale(0.75);
    var circulo2 = this.add
      .image(noP.x, noP.y, "tilde")
      .setAlpha(0.01)
      .setScale(0.75);
    var circulo3 = this.add
      .image(siP2.x, siP2.y, "tilde")
      .setAlpha(0.01)
      .setScale(0.75);
    var circulo4 = this.add
      .image(noP2.x, noP2.y, "tilde")
      .setAlpha(0.01)
      .setScale(0.75);
    var circulo5 = this.add
      .image(siP3.x, siP3.y, "tilde")
      .setAlpha(0.01)
      .setScale(0.75);
    var circulo6 = this.add
      .image(noP3.x, noP3.y, "tilde")
      .setAlpha(0.01)
      .setScale(0.75);
    var circulo7 = this.add
      .image(siP4.x, siP4.y, "tilde")
      .setAlpha(0.01)
      .setScale(0.75);
    var circulo8 = this.add
      .image(noP4.x, noP4.y, "tilde")
      .setAlpha(0.01)
      .setScale(0.75);

    if (fiebrePuesto == 1) {
      circulo.setAlpha(0.6);
    } else if (fiebrePuesto == 2) {
      circulo2.setAlpha(0.6);
    }
    if (dolCabPuesto == 1) {
      circulo3.setAlpha(0.6);
    } else if (dolCabPuesto == 2) {
      circulo4.setAlpha(0.6);
    }
    if (perApetPuesto == 1) {
      circulo5.setAlpha(0.6);
    } else if (perApetPuesto == 2) {
      circulo6.setAlpha(0.6);
    }
    if (cansPuesto == 1) {
      circulo7.setAlpha(0.6);
    } else if (cansPuesto == 2) {
      circulo8.setAlpha(0.6);
    }

    var circuloA;
    var circuloA2;
    var circuloA3;
    var circuloA4;

    //------------------------------------
    siP.on("pointerdown", () => {
      circuloA = 1;
      if (circuloA === 1) {
        circulo.setAlpha(0.6);
        circulo2.setAlpha(0.01);
        fiebrePuesto = 1;
      }
      if (muteado == 0) {
        if (sonidoPlay != 1) {
          escribirSonido.play();
          sonidoPlay = 1;
        }
      }
    });
    //-------------------------------------
    noP.on("pointerdown", () => {
      circuloA = 2;
      if (circuloA === 2) {
        circulo2.setAlpha(0.6);
        circulo.setAlpha(0.01);
        fiebrePuesto = 2;
      }
      if (muteado == 0) {
        if (sonidoPlay != 2) {
          escribirSonido.play();
          sonidoPlay = 2;
        }
      }
    });
    //-------------------------------------
    siP2.on("pointerdown", () => {
      circuloA2 = 1;
      if (circuloA2 === 1) {
        circulo3.setAlpha(0.6);
        circulo4.setAlpha(0.01);
        dolCabPuesto = 1;
      }
      if (muteado == 0) {
        if (sonidoPlay != 3) {
          escribirSonido.play();
          sonidoPlay = 3;
        }
      }
    });
    //-------------------------------------
    noP2.on("pointerdown", () => {
      circuloA2 = 2;
      if (circuloA2 === 2) {
        circulo4.setAlpha(0.6);
        circulo3.setAlpha(0.01);
        dolCabPuesto = 2;
      }
      if (muteado == 0) {
        if (sonidoPlay != 4) {
          escribirSonido.play();
          sonidoPlay = 4;
        }
      }
    });
    //-------------------------------------
    siP3.on("pointerdown", () => {
      circuloA3 = 1;
      if (circuloA3 === 1) {
        circulo5.setAlpha(0.6);
        circulo6.setAlpha(0.01);
        perApetPuesto = 1;
      }
      if (muteado == 0) {
        if (sonidoPlay != 5) {
          escribirSonido.play();
          sonidoPlay = 5;
        }
      }
    });
    //-------------------------------------
    noP3.on("pointerdown", () => {
      circuloA3 = 2;
      if (circuloA3 === 2) {
        circulo6.setAlpha(0.6);
        circulo5.setAlpha(0.01);
        perApetPuesto = 2;
      }
      if (muteado == 0) {
        if (sonidoPlay != 6) {
          escribirSonido.play();
          sonidoPlay = 6;
        }
      }
    });
    //-------------------------------------
    siP4.on("pointerdown", () => {
      circuloA4 = 1;
      if (circuloA4 === 1) {
        circulo7.setAlpha(0.6);
        circulo8.setAlpha(0.01);
        cansPuesto = 1;
      }
      if (muteado == 0) {
        if (sonidoPlay != 7) {
          escribirSonido.play();
          sonidoPlay = 7;
        }
      }
    });
    //-------------------------------------
    noP4.on("pointerdown", () => {
      circuloA4 = 2;
      if (circuloA4 === 2) {
        circulo8.setAlpha(0.6);
        circulo7.setAlpha(0.01);
        cansPuesto = 2;
      }
      if (muteado == 0) {
        if (sonidoPlay != 8) {
          escribirSonido.play();
          sonidoPlay = 8;
        }
      }
    });
    //-------------------------------------
    var enfermoSello = this.add
      .image(750, 870, "enfermo")
      .setOrigin(0.5)
      .setAlpha(0.001);
    var sanoSello = this.add
      .image(750, 870, "sano")
      .setOrigin(0.5)
      .setAlpha(0.001);
    var selloPuesto = this.add
      .text(750, 870, "", {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setTint(0x454545)
      .setOrigin(0.5);

    if (varPuesto == 1) {
      enfermoSello.setAlpha(0.001);
      sanoSello.setAlpha(1);
      selloPuesto.setText(Sano).setTint(0x42bd41);
    } else if (varPuesto == 2) {
      sanoSello.setAlpha(0.001);
      enfermoSello.setAlpha(1);
      selloPuesto.setText(Enfermo).setTint(0xff0000);
    }

    this.add.image(1400, 400, "selloD");
    var selloE = this.add
      .image(1400, 400, "selloD_s")
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer" });

    selloE.on("pointerdown", () => {
      if (selloPE == 0) {
        selloPE = 1;
        selloPS = 0;
        selloS.clearTint();
        selloS.setAlpha(0.01);
        selloE.setTint(0xff0000);
      } else if (selloPE == 1) {
        selloPE = 0;
        selloE.clearTint();
        selloE.setAlpha(0.01);
      }
    });
    selloE.on("pointerover", () => {
      if (selloPE == 0) {
        selloE.setAlpha(1);
      }
    });
    selloE.on("pointerout", () => {
      if (selloPE === 0) {
        selloE.setAlpha(0.01);
      }
    });

    this.add.image(1400, 200, "selloA").setInteractive({ cursor: "pointer" });
    var selloS = this.add
      .image(1400, 200, "selloA_s")
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer" });

    this.add.image(750, 870, "fondo_sello").setOrigin(0.5);

    this.add
      .text(750, 750, Estado, {
        fontFamily: "font1",
        fontSize: "70px",
      })
      .setTint(0x454545)
      .setOrigin(0.5);

    selloS.on("pointerdown", () => {
      if (selloPS == 0) {
        selloPS = 1;
        selloPE = 0;
        selloE.clearTint();
        selloE.setAlpha(0.01);
        selloS.setTint(0x00ff00);
      } else if (selloPS == 1) {
        selloPS = 0;
        selloS.clearTint();
        selloS.setAlpha(0.01);
      }
    });
    selloS.on("pointerover", () => {
      if (selloPS == 0) {
        selloS.setAlpha(1);
      }
    });
    selloS.on("pointerout", () => {
      if (selloPS === 0) {
        selloS.setAlpha(0.01);
      }
    });

    ficha.on("pointerdown", () => {
      if (selloPS === 1) {
        if (sellopuestoPS === 0) {
          sellopuestoPS = 1;
          sellopuestoPE = 0;
          if (muteado == 0) {
            sellosound.play(selloConfig);
          }
        }
        selloPS = 2;
        sanoSello.setAlpha(1);
        enfermoSello.setAlpha(0.01);
        selloPuesto.setText(Sano).setTint(0x42bd41);
        varPuesto = 1;
      } else if (selloPE == 1) {
        if (sellopuestoPE === 0) {
          sellopuestoPE = 1;
          sellopuestoPS = 0;
          if (muteado == 0) {
            sellosound.play(selloConfig);
          }
        }
        selloPE = 2;
        sanoSello.setAlpha(0.01);
        enfermoSello.setAlpha(1);
        selloPuesto.setText(Enfermo).setTint(0xff0000);
        varPuesto = 2;
      }
      sepR.setAlpha(1);
    });
  }
}
