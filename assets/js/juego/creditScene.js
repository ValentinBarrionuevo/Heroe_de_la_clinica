class creditScene extends Phaser.Scene {
  constructor() {
    super("creditos");
  }

  preload() {
    this.load.image("cre_scene", "assets/imagenes/fondos/scene0.png");
  }
  create() {
    var Volver = Phaser.Math.RND.pick(Idioma.menu.mainMenu.volver);
    var Roles = Phaser.Math.RND.pick(Idioma.menu.roles);
    this.add.image(960, 540, "cre_scene");

    var volver = this.add
      .image(1688, 106, "boton_s")
      .setAlpha(0.001)
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" });

    var volverT = this.add
      .text(1688, 101, Volver, {
        fontFamily: "font1",
        fontSize: "60px",
      })
      .setOrigin(0.5)
      .setTint(0x454545);
    var nombres = [
      "Alvarez, Lautaro",
      "Barrionuevo, Valentín",
      "Cerutti, Octavio",
      "Forzano, Tomás",
      "Suárez, Agustín",
    ];

    this.add
      .text(900, 355, Roles, {
        fontFamily: "font1",
        fontSize: "60px",
        lineSpacing: 27,
        align: "right",
        color: "#676767",
      })
      .setOrigin(0);

    this.add
      .text(270, 350, nombres, {
        fontFamily: "font1",
        fontSize: "75px",
        lineSpacing: 10,
        color: "#454545",
      })
      .setOrigin(0);

    volver.on("pointerdown", () => {
      musicaReproducida = 1;
      this.scene.start("Menu");
    });
    volver.on("pointerover", () => {
      volver.setAlpha(1);
      volverT.setTint(0xefefef);
    });
    volver.on("pointerout", () => {
      volver.setAlpha(0.001);
      volverT.setTint(0x454545);
    });
  }
}
