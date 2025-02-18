class SintScene extends Phaser.Scene {
  constructor() {
    super("sintomasPick");
  }
  create() {
    var msgCab1 = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgCab1);
    var msgCab2 = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgCab2);
    var msgCong = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgCong);
    var msgErup = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgErup);
    var msgArt = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgArt);
    var msgDolMast = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgDolMast);
    var msgDolMusc = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgDolMusc);
    var msgFat = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgFat);
    var msgApet = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgApet);
    var msgCans = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgCans);

    pacientes += 1;
    rub = 0;
    vari = 0;
    pap = 0;
    rubEnf = 0;
    variEnf = 0;
    papEnf = 0;

    var sintomasData = this.game.cache.json.get("sintomas");

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

    chat_1 = "";
    chat_2 = "";
    chat_3 = "";
    chat_4 = "";
    chat_5 = "";
    chat_6 = "";
    chat_7 = "";
    chat_8 = "";
    chat_9 = "";
    chat_10 = "";
    chat_11 = "";

    enfermedadPatron = Phaser.Math.FloatBetween(0, 1);
    temperatura = Phaser.Math.FloatBetween(36, 40);
    let enfermedad;
    var enf = 0;
    if (temperatura >= 38) {
      fiebre = "true";
      enf += 0.5;
      fiebreSint = 1;
    } else {
      fiebre = "false";
    }
    var cabPatron = Phaser.Math.FloatBetween(0, 1);
    if (fiebre == true) {
      if (cabPatron > 70) {
        dolCab = "false";
      } else {
        dolCab = "true";
        enf += 0.5;
        chatInfo.chat_dolCab = msgCab1;
        dolCabSint = 1;
      }
    } else {
      if (cabPatron > 40) {
        dolCab = "false";
      } else {
        dolCab = "true";
        enf += 0.5;
        chatInfo.chat_dolCab = msgCab2;
        dolCabSint = 1;
      }
    }

    // Picik de enfermedades
    if (enfermedadPatron <= 0.33) {
      //pick rubeola
      rub = 1;

      enfermedad = sintomasData.enfermedad.rubeola;
      cong = Phaser.Math.RND.pick(sintomasData.enfermedad.rubeola.congestion);
      inf = Phaser.Math.RND.pick(sintomasData.enfermedad.rubeola.inflamacion);
      gang = Phaser.Math.RND.pick(sintomasData.enfermedad.rubeola.ganglios);
      erup = Phaser.Math.RND.pick(sintomasData.enfermedad.rubeola.erupcion);
      art = Phaser.Math.RND.pick(
        sintomasData.enfermedad.rubeola.articulaciones
      );
      far = Phaser.Math.RND.pick(sintomasData.enfermedad.rubeola.faringitis);
      var sintPickeados = { dolCab, fiebre, cong, inf, gang, erup, art, far };
      if (cong == "true") {
        enf++;
        chatInfo.chat_cong = msgCong;
        congSint = 1;
      }
      if (inf == "true") {
        enf++;
        infSint = 1;
      }
      if (gang == "true") {
        enf++;
        gangSint = 1;
      }
      if (erup == "true") {
        enf++;
        chatInfo.chat_erup = msgErup;
        erupSint = 1;
      }
      if (art == "true") {
        enf++;
        chatInfo.chat_art = msgArt;
        artSint = 1;
      }
      if (far == "true") {
        enf++;
        farSint = 1;
      }
      if (enf >= 4) {
        rubEnf = 1;
      } else {
        rubEnf = 0;
      }
    } else if (enfermedadPatron <= 0.66) {
      //Pick paperas
      pap = 1;

      enfermedad = sintomasData.enfermedad.paperas;
      gang = Phaser.Math.RND.pick(sintomasData.enfermedad.paperas.ganglios);
      dolMast = Phaser.Math.RND.pick(sintomasData.enfermedad.paperas.dolorMast);
      dolMusc = Phaser.Math.RND.pick(sintomasData.enfermedad.paperas.dolorMusc);
      fatiga = Phaser.Math.RND.pick(sintomasData.enfermedad.paperas.fatiga);
      perApet = Phaser.Math.RND.pick(
        sintomasData.enfermedad.paperas.perdidaApet
      );
      var sintPickeados = {
        dolCab,
        fiebre,
        gang,
        dolMast,
        dolMusc,
        fatiga,
        perApet,
      };
      if (gang == "true") {
        enf++;
        gangSint = 1;
      }
      if (dolMast == "true") {
        enf++;
        chatInfo.chat_dolMast = msgDolMast;
        dolMastSint = 1;
      }
      if (dolMusc == "true") {
        enf++;
        chatInfo.chat_dolMusc = msgDolMusc;
        dolMuscSint = 1;
      }
      if (fatiga == "true") {
        enf++;
        chatInfo.chat_fatiga = msgFat;
        fatigaSint = 1;
      }
      if (perApet == "true") {
        enf++;
        chatInfo.chat_perApet = msgApet;
        perApetSint = 1;
      }
      if (enf >= 3) {
        papEnf = 1;
      } else {
        papEnf = 0;
      }
    } else if (enfermedadPatron <= 1) {
      //Pick varicela
      vari = 1;

      enfermedad = sintomasData.enfermedad.varicela;
      perApet = Phaser.Math.RND.pick(
        sintomasData.enfermedad.varicela.perdidaApet
      );
      cans = Phaser.Math.RND.pick(sintomasData.enfermedad.varicela.cansancio);
      var sintPickeados = { dolCab, fiebre, perApet, cans };
      if (perApet == "true") {
        enf++;
        chatInfo.chat_perApet = msgApet;
        perApetSint = 1;
      }
      if (cans == "true") {
        enf++;
        chatInfo.chat_cans = msgCans;
        cansSint = 1;
      }
      if (enf >= 2) {
        variEnf = 1;
      } else {
        variEnf = 0;
      }
    }

    console.log("rubeola= " + rubEnf);
    console.log("varicela= " + variEnf);
    console.log("paperas= " + papEnf);
    console.log(sintPickeados);

    chat_1 = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgSaludos);
    chat_2 = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgPaciente);

    pacientesMusic++;
    musicaReproducida = 0;

    music2.stop();
    creado = 0;
    if (pacientesMusic == 2) {
      music3.stop();
    }
    if (pacientesMusic == 3) {
      music4.stop();
    }
    if (pacientesMusic == 4) {
      music5.stop();
    }
    if (pacientesMusic == 5) {
      music6.stop();
    }

    this.scene.start("juego3");
    this.scene.run("clock");
  }
}
