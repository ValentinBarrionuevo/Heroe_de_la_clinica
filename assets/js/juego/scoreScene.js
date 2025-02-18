class scoreScene extends Phaser.Scene {
  constructor() {
    super("FinalScore");
  }

  create() {
    var Calif = Phaser.Math.RND.pick(Idioma.juego.score.calificaciones);
    var Salv = Phaser.Math.RND.pick(Idioma.juego.score.salvacion);
    var Back = Phaser.Math.RND.pick(Idioma.menu.mainMenu.volver);

    this.add.image(960, 540, "final");

    this.add.image(240, 110, "boton");
    var back = this.add
      .image(240, 110, "boton_s")
      .setAlpha(0.001)
      .setInteractive({ cursor: "pointer" });

    var backT = this.add
      .text(back.x, back.y - 5, Back, {
        fontFamily: "font1",
        fontSize: "60px",
      })
      .setTint(0x454545)
      .setOrigin(0.5);

    back.on("pointerover", () => {
      back.setAlpha(1);
      backT.setTint(0xefefef);
    });
    back.on("pointerout", () => {
      back.setAlpha(0.01);
      backT.setTint(0x454545);
    });

    back.on("pointerdown", () => {
      musicaReproducida = 1;
      this.scene.start("Menu");
      pausa;
      doc = 0;
      help = 0;
      ayu10 = 0;
      chat = 1;
      mascaraR = 0;
      barraR;
      barraRmask;
      pacientes = 0;
      pac_gen;
      photo_gen;

      flecha;
      flechaT;

      score = 240;
      finalScore = 0;
      finalSalv = 0;
      salv = 0; //puntos de salvacion
      scoreFS = 0;

      diag; //diagnostico

      selloPE = 0;
      selloPS = 0;

      finish = 0;
      ChatTuto = "error";

      tiempo = 10000;
      tuto = 1;

      rubEnf;
      papEnf;
      variEnf;

      rub = 0;
      vari = 0;
      pap = 0;

      fieb_repe = 0;
      dolCab_repe = 0;
      perApet_repe = 0;
      gang_repe = 0;

      chatInfo = {
        chat_dolCab: "",
        chat_fiebre: "",
        chat_cong: "",
        chat_inf: "",
        chat_gang: "",
        chat_erup: "",
        chat_art: "",
        chat_far: "",
        chat_dolMast: "",
        chat_dolMusc: "",
        chat_fatiga: "",
        chat_perApet: "",
        chat_cans: "",
      };
      charla;
      chatMostrar = 0;

      Idioma;
      selecIdioma = "es";

      resetFicha = 0;
      resetFichaA = 0;
      resetFichaB = 0;

      varPuesto = 0;
      rubPuesto = 0;
      papPuesto = 0;
      conectar;

      dolCab;
      fiebre;
      cong;
      inf;
      gang;
      erup;
      art;
      far;
      dolMast;
      dolMusc;
      fatiga;
      perApet;
      cans;

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

      dolCabSint = 0;
      fiebreSint = 0;
      congSint = 0;
      infSint = 0;
      gangSint = 0;
      erupSint = 0;
      artSint = 0;
      farSint = 0;
      dolMastSint = 0;
      dolMuscSint = 0;
      fatigaSint = 0;
      perApetSint = 0;
      cansSint = 0;

      chat_1;
      chat_2;
      chat_3;
      chat_4;
      chat_5;
      chat_6;
      chat_7;
      chat_8;
      chat_9;
      chat_10;
      chat_11;
      charlando = 0;

      temperatura;
      reseteo = 0;
      pestaña = 0;

      boton_ayuda;
      boton_ayuda_s;

      infoE;
      infoRub;
      infoPap;
      infoVar;

      photo;

      music;
      musica = 0;
      musicaS = 0;
      musicConfig = {
        mute: false,
        volume: 0.15,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: true,
        delay: 0,
      };
      musicConfig2 = {
        volume: 0.15,
      };
      music2;
      music3;
      music4;
      music5;
      music6;
      musicaS = 0;
      muteado = 0;
      musicaReproducida = 0;
      sonidoPlay = 0;
      pacientesMusic = 0;

      fichaVolver = 0;
      tutoFinish = 0;
      creado = 0;
      promedio = 0;

      enfermedadPatron;
    });

    promedio = finalScore / 4;

    this.add
      .text(1100, 700, finalSalv + "/8", {
        fontFamily: "font1",
        fontSize: "200px",
        align: "center",
      })
      .setOrigin(0.5)
      .setScale(0.7)
      .setTint(0x454545);

    this.add
      .text(300, 450, Calif, {
        fontFamily: "font1",
        fontSize: "75px",
        align: "left",
      })
      .setTint(0x454545)
      .setOrigin(0, 0.5);
    this.add
      .text(300, 700, Salv, {
        fontFamily: "font1",
        fontSize: "75px",
        align: "left",
      })
      .setTint(0x454545)
      .setOrigin(0, 0.5);

    var E = this.add
      .image(1100, 450, "E")
      .setAlpha(0)
      .setScale(1.2)
      .setTint(0x454545);

    var MB = this.add
      .image(E.x, E.y, "MB")
      .setAlpha(0)
      .setScale(1.2)
      .setTint(0x454545);

    var B = this.add
      .image(E.x, E.y, "B")
      .setAlpha(0)
      .setScale(1.2)
      .setTint(0x454545);

    var S = this.add
      .image(E.x, E.y, "S")
      .setAlpha(0)
      .setScale(1.2)
      .setTint(0x454545);

    var NS = this.add
      .image(E.x, E.y, "NS")
      .setAlpha(0)
      .setScale(1.2)
      .setTint(0x454545);

    if (promedio >= 1000) {
      E.setAlpha(1);
      salv += 1;
    } else if (promedio >= 800) {
      MB.setAlpha(1);
    } else if (promedio >= 700) {
      B.setAlpha(1);
    } else if (promedio >= 600) {
      S.setAlpha(1);
    } else {
      NS.setAlpha(1);
    }
  }
}
