class fotos extends Phaser.Scene {
  constructor() {
    super("fotos");
  }
  update() {
    if (pacientes == 0) {
      if (msg == 1 || msg == 3 || msg == 4 || msg == 6) {
        fotoFicha.setAlpha(0.01);
        fotoFichaTuto.setAlpha(1);
      } else {
        fotoFicha.setAlpha(1);
        fotoFichaTuto.setAlpha(0.01);
      }
    } else if (pacientes == 1) {
      if (msg != 0) {
        fotoFicha1.setAlpha(1);
        fotoFicha.setAlpha(0.01);
      }
    } else if (pacientes == 2) {
      if (msg != 0) {
        fotoFicha2.setAlpha(1);
        fotoFicha.setAlpha(0.01);
      }
    } else if (pacientes == 3) {
      if (msg != 0) {
        fotoFicha3.setAlpha(1);
        fotoFicha.setAlpha(0.01);
      }
    } else if (pacientes == 4) {
      if (msg != 0) {
        fotoFicha4.setAlpha(1);
        fotoFicha.setAlpha(0.01);
      }
    }
  }
}
