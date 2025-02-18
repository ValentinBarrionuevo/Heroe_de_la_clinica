var infoEnf;
var infoRub;
var infoPap;
var infoVar;
var infoVar;
class infoEnfer extends Phaser.Scene {
  constructor() {
    super("infoEnfermedad");
  }

  create() {
    if (infoE === 1) {
      infoEnf = Phaser.Math.RND.pick(Idioma.juego.infoEnfermedad.rubeola);
    } else if (infoE === 2) {
      infoEnf = Phaser.Math.RND.pick(Idioma.juego.infoEnfermedad.paperas);
    } else if (infoE === 3) {
      infoEnf = Phaser.Math.RND.pick(Idioma.juego.infoEnfermedad.varicela);
    } else if (infoE === 4) {
      infoEnf = Phaser.Math.RND.pick(Idioma.juego.infoEnfermedad.varicela);
    }

    var negro = this.add
      .image(960, 540, "negro")
      .setAlpha(0.4)
      .setInteractive({ cursor: "pointer" });

    negro.on("pointerdown", () => {
      this.scene.sleep();
      if (infoE == 1) {
        this.scene.start("Menu3_01");
      } else if (infoE == 2) {
        this.scene.start("Menu3_02");
      } else if (infoE == 3) {
        this.scene.start("Menu3_03");
      } else if (infoE == 4) {
        this.scene.start("var_Tuto");
      }
    });

    this.add.image(990, 500, "cartelAyuda").setScale(1.5).setInteractive();

    this.add
      .text(400, 230, infoEnf, {
        fontFamily: "font1",
        fontSize: "50px",
        lineSpacing: 9,
      })
      .setTint(0x454545)
      .setAlpha(1);
  }
}
