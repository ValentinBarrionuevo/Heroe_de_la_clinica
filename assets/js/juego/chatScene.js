var chatB;
var fotoFicha;
var fotoFichaTuto;
var fotoFicha1;
var fotoFicha2;
var fotoFicha3;
var fotoFicha4;
var fotoFichaGen;
var cambioFicha;
var repetido = 0;
class chatScene extends Phaser.Scene {
  constructor() {
    super("charla_01");
  }

  create() {
    if (pacientes == 0) {
      chat_1 = Phaser.Math.RND.pick(Idioma.tutorial.chatTuto1);
      chat_2 = Phaser.Math.RND.pick(Idioma.tutorial.chatTuto2);
      chat_3 = Phaser.Math.RND.pick(Idioma.tutorial.chatTuto3);
      chat_4 = Phaser.Math.RND.pick(Idioma.tutorial.chatTuto4);
      chat_5 = Phaser.Math.RND.pick(Idioma.tutorial.chatTuto5);
      chat_6 = Phaser.Math.RND.pick(Idioma.tutorial.chatTuto6);
      chat_7 = Phaser.Math.RND.pick(Idioma.tutorial.chatTuto7);
      chat_8 = Phaser.Math.RND.pick(Idioma.tutorial.chatTuto8);
    } else {
      if (dolCabSint == 1) {
        chat_3 = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgCab2);
      }
      if (congSint == 1) {
        chat_4 = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgCong);
      }
      if (erupSint == 1) {
        chat_5 = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgErup);
      }
      if (artSint == 1) {
        chat_6 = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgArt);
      }
      if (dolMastSint == 1) {
        chat_7 = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgDolMast);
      }
      if (dolMuscSint == 1) {
        chat_8 = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgDolMusc);
      }
      if (fatigaSint == 1) {
        chat_9 = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgFat);
      }
      if (perApetSint == 1) {
        chat_10 = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgApet);
      }
      if (cansSint == 1) {
        chat_11 = Phaser.Math.RND.pick(Idioma.juego.mensajes.msgCans);
      }
    }
    this.scene.run("fotos");

    if (chat == 0) {
      chat = 1;
      console.log("Se supone que restarteo");
      msg = 0;
      charlando = 0;
      chatMostrar = chat_1;
      this.scene.restart("charla_01");
      this.scene.restart("mensajes");
    }

    doc = 0;

    this.add.image(960, 540, "consultorio").setScale(1.0);

    var pac_00 = this.add
      .image(784, 800, "paciente_01")
      .setInteractive({ pixelPerfect: "true", cursor: "pointer" })
      .setOrigin(0, 1);

    var pac_01 = this.add
      .image(784, 800, "paciente_02")
      .setOrigin(0, 1)
      .setInteractive({ pixelPerfect: "true", cursor: "pointer" })
      .setAlpha(0);

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

    if (pacientes == 0) {
      pac_00.setAlpha(1);
      pac_01.setAlpha(0);
      pac_02.setAlpha(0);
      pac_03.setAlpha(0);
      pac_04.setAlpha(0);
    } else if (pacientes == 1) {
      pac_00.setAlpha(0);
      pac_01.setAlpha(1);
      pac_02.setAlpha(0);
      pac_03.setAlpha(0);
      pac_04.setAlpha(0);
    } else if (pacientes == 2) {
      pac_00.setAlpha(0);
      pac_01.setAlpha(0);
      pac_02.setAlpha(1);
      pac_03.setAlpha(0);
      pac_04.setAlpha(0);
    } else if (pacientes == 3) {
      pac_00.setAlpha(0);
      pac_01.setAlpha(0);
      pac_02.setAlpha(0);
      pac_03.setAlpha(1);
      pac_04.setAlpha(0);
    } else if (pacientes == 4) {
      pac_00.setAlpha(0);
      pac_01.setAlpha(0);
      pac_02.setAlpha(0);
      pac_03.setAlpha(0);
      pac_04.setAlpha(1);
    }

    this.add.image(860, 900, "bowl").setOrigin(0.5, 0).setScale(1.2);

    var negro = this.add
      .image(960, 540, "negro")
      .setAlpha(0.3)
      .setInteractive();

    chatB = this.add.image(960, 150, "chatPNG");

    fotoFicha = this.add.image(550, 150, "hugo").setAlpha(1).setScale(0.5);
    fotoFichaTuto = this.add
      .image(550, 150, "fichaFotoTuto")
      .setAlpha(0.001)
      .setScale(0.5);
    fotoFicha1 = this.add
      .image(550, 150, "fichaFoto1")
      .setAlpha(0.001)
      .setScale(0.5);
    fotoFicha2 = this.add
      .image(550, 150, "fichaFoto2")
      .setAlpha(0.001)
      .setScale(0.5);
    fotoFicha3 = this.add
      .image(550, 150, "fichaFoto3")
      .setAlpha(0.001)
      .setScale(0.5);
    fotoFicha4 = this.add
      .image(550, 150, "fichaFoto4")
      .setAlpha(0.001)
      .setScale(0.5);

    if (chatMostrar == 0) {
      chatMostrar = chat_1;
    }

    this.add
      .text(650, 145, chatMostrar, {
        fontSize: "55px",
        fontFamily: "font1",
      })
      .setOrigin(0, 0.5)
      .setDepth(1)
      .setTint(0x454545);

    var boton = this.add
      .image(370, 110, "reload")
      .setInteractive({ cursor: "pointer" })
      .setScale(0.75);

    boton.on("pointerdown", () => {
      chatMostrar = chat_1;
      this.scene.restart("charla_01");
      this.scene.restart("fotos");
      this.scene.restart("mensajes");
      msg = 0;
      charlando = 0;
    });

    var cerrar = this.add
      .image(370, 200, "boton_cerrar")
      .setInteractive({ cursor: "pointer" })
      .setScale(0.75);

    cerrar.on("pointerdown", () => {
      this.scene.stop();
      this.scene.stop("fotos");
      this.scene.stop("mensajes");
      chat = 0;
      if (pausa == 2) {
        this.scene.start("juego");
      }
      if (pausa == 7) {
        this.scene.start("juego3");
      }
    });
    negro.on("pointerdown", () => {
      msg++;
      this.scene.run("mensajes");
      this.scene.restart("mensajes");
    });
  }
}
