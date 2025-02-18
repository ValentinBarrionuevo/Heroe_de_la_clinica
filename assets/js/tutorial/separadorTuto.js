class separadorTuto extends Phaser.Scene {
  constructor() {
    super("sepTuto");
  }
  update() {
    if(fichaVolver===1) {
      sep2.setAlpha(1);
     }else if(fichaVolver===0) {
       sep1.setAlpha(1);
      }
    if (pestaña===1){
      sep2.disableInteractive()
      sep1.setInteractive({cursor:"pointer"});
    } else if (pestaña===0){
      sep1.disableInteractive()
      sep2.setInteractive({cursor:"pointer"});;
    }

  }
  create() {
    sep1 = this.add
      .image(1123, 661, "separador_pac_s")
      .setScale(0.45)
      .setAlpha(1)
      .setDepth(0.001);
    sep1.on("pointerover", () => {
      sep1.setAlpha(1);
    });
    sep1.on("pointerout", () => {
      if (pestaña == 1) {
        sep1.setAlpha(0.001);
      }
    })
      sep1.on("pointerdown", () => {
        sep1.setAlpha(1);
        sep2.setAlpha(0.01);
        this.scene.sleep("var_Tuto");
        this.scene.run("Menu3");
        pestaña = 0;
        fichaVolver =0;
      });


    sep2 = this.add
      .image(1123, 800.9, "separador_var_s")
      .setScale(0.45) 
      .setAlpha(0.001)
      .setDepth(1);
    sep2.on("pointerover", () => {
      sep2.setAlpha(1);
    });
    sep2.on("pointerout", () => {
      if (pestaña == 0) {
        sep2.setAlpha(0.001);
      }
    });

    sep2.on("pointerdown", () => {
        pestaña = 1;
        sep1.setAlpha(0.001);
        sep2.setAlpha(1);
        this.scene.sleep("Menu3");
        this.scene.run("var_Tuto");
        fichaVolver=1;
      });

    }
  }