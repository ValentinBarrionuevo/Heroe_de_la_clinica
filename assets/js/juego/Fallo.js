class Fallo extends Phaser.Scene {
  constructor() {
    super("score_F");
  }

  create() {
    var Menu = Phaser.Math.RND.pick(Idioma.juego.resultados.menu);
    var Siguiente = Phaser.Math.RND.pick(Idioma.juego.resultados.siguiente);
    var ResFallo = Phaser.Math.RND.pick(Idioma.juego.resultados.fallo);
    var Calificacion = Phaser.Math.RND.pick(Idioma.juego.resultados.calific);
    var ResSalv = Phaser.Math.RND.pick(Idioma.juego.resultados.salv);
    var Exce = Phaser.Math.RND.pick(Idioma.juego.resultados.exce);
    var Mb = Phaser.Math.RND.pick(Idioma.juego.resultados.mb);
    var ResB = Phaser.Math.RND.pick(Idioma.juego.resultados.b);
    var ResS = Phaser.Math.RND.pick(Idioma.juego.resultados.s);
    var ResNs = Phaser.Math.RND.pick(Idioma.juego.resultados.ns);

    var cambiopac = this.sound.add("CambioPac");

    var cambiopacConfig = {
      volume: 0.1,
    };

    selloPE = 0;
    selloPS = 0;
    this.add.image(960, 540, "consultorio");

    this.add.image(960, 540, "negro").setAlpha(0.4).setInteractive();

    this.add.image(1000, 520, "score").setScale(1.7);

    this.add.image(200, 990, "boton");

    var menu = this.add
      .image(200, 990, "boton_s")
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer" });
    var V = this.add
      .text(menu.x, menu.y - 5, Menu, {
        fontFamily: "font1",
        fontSize: "60px",
      })
      .setTint(0x454545)
      .setOrigin(0.5, 0.5);

    menu.on("pointerover", () => {
      menu.setAlpha(1);
      V.setTint(0xffffff);
    });
    menu.on("pointerout", () => {
      menu.setAlpha(0.01);
      V.setTint(0x454545);
    });

    this.add.image(1600, 910, "boton");
    var siguente = this.add
      .image(1600, 910, "boton_s")
      .setAlpha(0.001)
      .setInteractive({ cursor: "pointer" });
    var siguenteT = this.add
      .text(siguente.x, siguente.y, Siguiente, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setOrigin(0.5, 0.5)
      .setTint(0x454545);
    siguente.on("pointerover", () => {
      siguente.setAlpha(1);
      siguenteT.setTint(0xffffff);
    });
    siguente.on("pointerout", () => {
      siguente.setAlpha(0.01);
      siguenteT.setTint(0x454545);
    });

    menu.on("pointerdown", () => {
      this.scene.restart("juego");
      this.scene.restart("juego2");
      this.scene.sleep("juego");
      this.scene.sleep("juego2");
      this.scene.sleep("clock");
      this.scene.start("Menu");
      score = 240;
      salv = 0;
      tiempo = 10000;

      rubPuesto = 0;
      varPuesto = 0;
      papPuesto = 0;
      dolCabPuesto = 0;
      fiebrePuesto = 0;
      congPuesto = 0;
      infPuesto = 0;
      gangPuesto = 0;
      erupPuesto = 0;
      artPuesto = 0;
      farPuesto = 0;
      dolMastPuesto = 0;
      dolMuscPuesto = 0;
      fatigaPuesto = 0;
      perApetPuesto = 0;
      cansPuesto = 0;
    });

    siguente.on("pointerdown", () => {
      if (muteado == 0) {
        cambiopac.play(cambiopacConfig);
      }
      score = 240;
      salv = 0;
      tiempo = 10000;
      if (tutoFinish == 1) {
        musicaS = 1;
      }
      this.scene.restart("charla_01");
      this.scene.restart("MenuP");
      this.scene.sleep("juego");
      this.scene.sleep("juego2");
      this.scene.start("clock");
      if (pacientes == 4) {
        this.scene.sleep("juego3");
        this.scene.sleep("juego4");
        this.scene.sleep("sintomasPick");
        this.scene.stop("clock");
        music6.stop();
        this.scene.start("FinalScore");
      } else {
        this.scene.sleep("juego3");
        this.scene.sleep("juego4");
        this.scene.start("sintomasPick");
      }
    });

    this.add
      .text(1000, 160, ResFallo, {
        fontFamily: "font1",
        fontSize: "75px",
      })
      .setTint(0x000000)
      .setOrigin(0.5);

    this.add
      .text(1000, 250, Calificacion, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setTint(0x000000)
      .setOrigin(0.5);

    this.add
      .text(1000, 640, ResSalv, {
        fontFamily: "font1",
        fontSize: "30px",
      })
      .setTint(0x000000)
      .setOrigin(0.5);

    var E = this.add
      .image(1000, 390, "E")
      .setAlpha(0.001)
      .setTint(0x000000)
      .setScale(2);
    var excelente = this.add
      .text(1000, 500, Exce, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setAlpha(0.001)
      .setTint(0x000000)
      .setOrigin(0.5);

    var MB = this.add
      .image(1000, 390, "MB")
      .setAlpha(0.001)
      .setTint(0x000000)
      .setScale(2);
    var muyBueno = this.add
      .text(1000, 500, Mb, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setAlpha(0.001)
      .setTint(0x000000)
      .setOrigin(0.5);

    var B = this.add
      .image(1000, 390, "B")
      .setAlpha(0.001)
      .setTint(0x000000)
      .setScale(2);
    var bueno = this.add
      .text(1000, 500, ResB, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setAlpha(0.001)
      .setTint(0x000000)
      .setOrigin(0.5);

    var S = this.add
      .image(1000, 390, "S")
      .setAlpha(0.001)
      .setTint(0x000000)
      .setScale(2);
    var satisfactorio = this.add
      .text(1000, 500, ResS, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setAlpha(0.001)
      .setTint(0x000000)
      .setOrigin(0.5);

    var NS = this.add
      .image(1005, 390, "NS")
      .setAlpha(0.001)
      .setTint(0x000000)
      .setScale(2);
    var noSatisfactorio = this.add
      .text(1000, 500, ResNs, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setAlpha(0.001)
      .setTint(0x000000)
      .setOrigin(0.5);

    var s0 = this.add.image(1005, 800, "0").setScale(0.6).setAlpha(0.01);
    var s1 = this.add.image(1005, 800, "1").setScale(0.6).setAlpha(0.01);
    var s2 = this.add.image(1005, 800, "2").setScale(0.6).setAlpha(0.01);
    if (score >= 1000) {
      E.setAlpha(1);
      excelente.setAlpha(1);
      salv += 1;
    } else if (score >= 800) {
      MB.setAlpha(1);
      muyBueno.setAlpha(1);
    } else if (score >= 700) {
      B.setAlpha(1);
      bueno.setAlpha(1);
    } else if (score >= 600) {
      S.setAlpha(1);
      satisfactorio.setAlpha(1);
    } else {
      NS.setAlpha(1);
      noSatisfactorio.setAlpha(1);
    }
    finalScore += score;

    if (salv == 2) {
      s2.setAlpha(1);
    } else if (salv == 1) {
      s1.setAlpha(1);
    } else if (salv == 0) {
      s0.setAlpha(1);
    }
    finalSalv += salv;
  }
}
