class separador extends Phaser.Scene {
  constructor() {
    super("sepScene");
  }
  create() {
    var pestaña = 0;
    sep1 = this.add
      .image(1123, 661, "separador_pac_s")
      .setInteractive({ cursor: "pointer" })
      .setScale(0.45)
      .setAlpha(1)
      .setDepth(1);
    sep1.on("pointerover", () => {
      sep1.setAlpha(1);
    });
    sep1.on("pointerout", () => {
      if (pestaña != 0) {
        sep1.setAlpha(0.001);
      }
    });
    sep1.on("pointerdown", () => {
      if (pestaña == 1) {
        this.scene.sleep("Menu3_01");
      } else if (pestaña == 2) {
        this.scene.sleep("Menu3_03");
      } else if (pestaña == 3) {
        this.scene.sleep("Menu3_02");
      }

      pestaña = 0;
      sep1.setAlpha(1);
      sep2.setAlpha(0.01);
      sep3.setAlpha(0.01);
      sep4.setAlpha(0.01);
      this.scene.run("MenuP");
    });

    sep2 = this.add
      .image(1124, 732.5, "separador_rub_s")
      .setInteractive({ cursor: "pointer" })
      .setScale(0.45)
      .setAlpha(0.001)
      .setDepth(1);
    sep2.on("pointerover", () => {
      sep2.setAlpha(1);
    });
    sep2.on("pointerout", () => {
      if (pestaña != 1) {
        sep2.setAlpha(0.001);
      }
    });
    sep2.on("pointerdown", () => {
      if (pestaña == 0) {
        this.scene.sleep("MenuP");
      } else if (pestaña == 2) {
        this.scene.sleep("Menu3_03");
      } else if (pestaña == 3) {
        this.scene.sleep("Menu3_02");
      }

      pestaña = 1;
      sep1.setAlpha(0.01);
      sep2.setAlpha(1);
      sep3.setAlpha(0.01);
      sep4.setAlpha(0.01);
      this.scene.run("Menu3_01");
    });

    sep3 = this.add
      .image(1124, 800.9, "separador_var_s")
      .setInteractive({ cursor: "pointer" })
      .setScale(0.45)
      .setAlpha(0.001)
      .setDepth(1);
    sep3.on("pointerover", () => {
      sep3.setAlpha(1);
    });
    sep3.on("pointerout", () => {
      if (pestaña != 2) {
        sep3.setAlpha(0.001);
      }
    });
    sep3.on("pointerdown", () => {
      if (pestaña == 0) {
        this.scene.sleep("MenuP");
      } else if (pestaña == 1) {
        this.scene.sleep("Menu3_01");
      } else if (pestaña == 3) {
        this.scene.sleep("Menu3_02");
      }

      pestaña = 2;
      sep1.setAlpha(0.01);
      sep2.setAlpha(0.01);
      sep3.setAlpha(1);
      sep4.setAlpha(0.01);
      this.scene.run("Menu3_03");
    });

    sep4 = this.add
      .image(1124, 873, "separador_pap_s")
      .setInteractive({ cursor: "pointer" })
      .setScale(0.45)
      .setAlpha(0.001)
      .setDepth(1);
    sep4.on("pointerover", () => {
      sep4.setAlpha(1);
    });
    sep4.on("pointerout", () => {
      if (pestaña != 3) {
        sep4.setAlpha(0.001);
      }
    });
    sep4.on("pointerdown", () => {
      if (pestaña == 0) {
        this.scene.sleep("MenuP");
      } else if (pestaña == 1) {
        this.scene.sleep("Menu3_01");
      } else if (pestaña == 2) {
        this.scene.sleep("Menu3_03");
      }

      pestaña = 3;
      sep1.setAlpha(0.01);
      sep2.setAlpha(0.01);
      sep3.setAlpha(0.01);
      sep4.setAlpha(1);
      this.scene.run("Menu3_02");
    });
  }
}
