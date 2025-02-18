var carga;

class loader extends Phaser.Scene {
  constructor() {
    super("preload");
  }

  preload() {
    var progressBar = this.add.graphics();
    var progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(800, 515, 320, 50);
    var width = 1920;
    var height = 1080;
    var loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: "Loading...",
      style: {
        fill: "#ffffff",
        fontFamily: "font1",
        fontSize: "20px",
      },
    });
    loadingText.setOrigin(0.5, 0.5);
    var percentText = this.make.text({
      x: width / 2,
      y: height / 2,
      text: "0%",
      style: {
        font: "18px monospace",
        fill: "#ffffff",
      },
    });
    percentText.setOrigin(0.5, 0.5);
    var assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: "",
      style: {
        font: "18px monospace",
        fill: "#ffffff",
      },
    });
    assetText.setOrigin(0.5, 0.5);

    this.load.image("negro", "assets/imagenes/fondos/negro.png");
    this.load.image("consultorio", "assets/imagenes/fondos/consultorio.png");
    this.load.image("camilla", "assets/imagenes/fondos/camilla.png");

    this.load.image("flechaPD", "assets/imagenes/botones/flechaPD.png");
    this.load.image("flechaPD_s", "assets/imagenes/botones/flechaPD_s.png");
    this.load.image("flechaPI", "assets/imagenes/botones/flechaPI.png");
    this.load.image("flechaPI_s", "assets/imagenes/botones/flechaPI_s.png");

    this.load.image("botonIdioma", "assets/imagenes/botones/botonIdioma.png");
    this.load.image("botonES", "assets/imagenes/botones/botonES.png");
    this.load.image("botonEN", "assets/imagenes/botones/botonEN.png");
    this.load.image("botonPT", "assets/imagenes/botones/botonPT.png");
    this.load.image("botonES_s", "assets/imagenes/botones/botonES_s.png");
    this.load.image("botonEN_s", "assets/imagenes/botones/botonEN_s.png");
    this.load.image("botonPT_s", "assets/imagenes/botones/botonPT_s.png");

    this.load.image("boton", "assets/imagenes/botones/boton.png");
    this.load.image(
      "boton_fscreen",
      "assets/imagenes/botones/boton_fscreen.png"
    );
    this.load.image(
      "boton_fscreen_s",
      "assets/imagenes/botones/boton_fscreen_s.png"
    );
    this.load.image("boton_cerrar", "assets/imagenes/botones/boton_cerrar.png");

    this.load.image("boton_s", "assets/imagenes/botones/boton_s.png");
    this.load.image("boton_ayuda", "assets/imagenes/botones/boton_ayuda.png");
    this.load.image(
      "boton_ayuda_s",
      "assets/imagenes/botones/boton_ayuda_s.png"
    );
    this.load.image("boton_musica", "assets/imagenes/botones/boton_musica.png");
    this.load.image(
      "boton_musica_s",
      "assets/imagenes/botones/boton_musica_s.png"
    );
    this.load.image("mute", "assets/imagenes/botones/mute.png");
    this.load.image(
      "boton_volumen",
      "assets/imagenes/botones/boton_volumen.png"
    );
    this.load.image(
      "boton_volumen_s",
      "assets/imagenes/botones/boton_volumen_s.png"
    );

    this.load.image("inicio", "assets/imagenes/fondos/inicio.png");

    this.load.audio("menu_Musica", [
      "assets/musicFX/music_menu.mp3",
      "assets/musicFX/music_menu.ogg",
    ]);
    this.load.audio("menu_Game1", [
      "assets/musicFX/music_game.mp3",
      "assets/musicFX/music_game.ogg",
    ]);

    this.load.audio("escribir", [
      "assets/musicFX/FX_Escribir.mp3",
      "assets/musicFX/FX_Escribir.ogg",
    ]);

    this.load.audio("pickEsteto", [
      "assets/musicFX/FX_AgarrarEsteto.ogg",
      "assets/musicFX/FX_AgarrarEsteto.mp3",
    ]);

    this.load.audio("pickLinter", [
      "assets/musicFX/FX_AgarrarLinter.ogg",
      "assets/musicFX/FX_AgarrarLinter.mp3",
    ]);

    this.load.audio("pickTermos", [
      "assets/musicFX/FX_AgarrarTermos.ogg",
      "assets/musicFX/FX_AgarrarTermos.mp3",
    ]);

    this.load.audio("pickGuante", [
      "assets/musicFX/FX_AgarrarGuante.ogg",
      "assets/musicFX/FX_AgarrarGuante.mp3",
    ]);

    this.load.audio("Soltar", [
      "assets/musicFX/FX_Soltar.ogg",
      "assets/musicFX/FX_Soltar.mp3",
    ]);

    this.load.audio("Alerta", [
      "assets/musicFX/FX_Alerta.ogg",
      "assets/musicFX/FX_Alerta.mp3",
    ]);

    this.load.audio("CambioPac", [
      "assets/musicFX/FX_CambioPac.ogg",
      "assets/musicFX/FX_CambioPac.mp3",
    ]);

    this.load.audio("Sellar", [
      "assets/musicFX/FX_Sellar.ogg",
      "assets/musicFX/FX_Sellar.mp3",
    ]);

    this.load.audio("Cambiarhoja", [
      "assets/musicFX/FX_Cambiarhoja.ogg",
      "assets/musicFX/FX_Cambiarhoja.mp3",
    ]);

    this.load.audio("Puerta", [
      "assets/musicFX/FX_Puerta.ogg",
      "assets/musicFX/FX_Puerta.mp3",
    ]);

    this.load.audio("Letra", [
      "assets/musicFX/FX_Letra.ogg",
      "assets/musicFX/FX_Letra.mp3",
    ]);

    this.load.audio("Ficha", [
      "assets/musicFX/FX_Ficha.ogg",
      "assets/musicFX/FX_Ficha.mp3",
    ]);

    this.load.image("ayuda", "assets/imagenes/flotantes/ayuda.png");
    this.load.image("cartelAyuda", "assets/imagenes/flotantes/cartelAyuda.png");
    this.load.image("chatPNG", "assets/imagenes/complementos/chat.png");

    this.load.image("score", "assets/imagenes/flotantes/score.png");
    this.load.image("final", "assets/imagenes/fondos/final.png");

    this.load.image("libreta", "assets/imagenes/flotantes/libreta.png");

    this.load.image("ficha", "assets/imagenes/personajes/ficha.png");
    this.load.image("fichaTuto", "assets/imagenes/personajes/fichaTuto.png");

    this.load.image(
      "separador_pac_r",
      "assets/imagenes/elementos/separador_pac_r.png"
    );

    this.load.image(
      "separador_pac_s",
      "assets/imagenes/elementos/separador_pac_s.png"
    );

    this.load.image(
      "separador_pap_s",
      "assets/imagenes/elementos/separador_pap_s.png"
    );

    this.load.image(
      "separador_rub_s",
      "assets/imagenes/elementos/separador_rub_s.png"
    );

    this.load.image(
      "separador_var_s",
      "assets/imagenes/elementos/separador_var_s.png"
    );

    this.load.image("guantes_s", "assets/imagenes/elementos/guantes_s.png");
    this.load.image("reloj", "assets/imagenes/complementos/reloj.png");
    this.load.image(
      "reloj_brillo",
      "assets/imagenes/complementos/reloj_brillo.png"
    );
    this.load.image("arena2", "assets/imagenes/complementos/arena2.png");
    this.load.image("linterna", "assets/imagenes/elementos/linterna.png");
    this.load.image("linterna_s", "assets/imagenes/elementos/linterna_s.png");
    this.load.image(
      "estetoscopio",
      "assets/imagenes/elementos/estetoscopio.png"
    );
    this.load.image(
      "estetoscopio_s",
      "assets/imagenes/elementos/estetoscopio_s.png"
    );
    this.load.image("termometro", "assets/imagenes/elementos/termometro.png");
    this.load.image(
      "termometro_s",
      "assets/imagenes/elementos/termometro_s.png"
    );
    this.load.image("bowl", "assets/imagenes/elementos/bowl.png");
    this.load.image("chupetin", "assets/imagenes/elementos/chupetin.png");

    this.load.image("puerta_1", "assets/imagenes/elementos/puerta_1.png");
    this.load.image("puerta_2", "assets/imagenes/elementos/puerta_2.png");
    this.load.image("reload", "assets/imagenes/botones/retry.png");
    this.load.image("muñeco", "assets/imagenes/complementos/muñeco.png");
    this.load.spritesheet(
      "muñeco_r",
      "assets/imagenes/complementos/muñeco_ready.png",
      {
        frameWidth: 116,
        frameHeight: 120,
      }
    );

    this.load.image("selloA", "assets/imagenes/elementos/selloA.png");
    this.load.image("selloA_s", "assets/imagenes/elementos/selloA_s.png");
    this.load.image("selloD", "assets/imagenes/elementos/selloD.png");
    this.load.image("selloD_s", "assets/imagenes/elementos/selloD_s.png");
    this.load.image("sano", "assets/imagenes/complementos/sano.png");
    this.load.image("enfermo", "assets/imagenes/complementos/enfermo.png");
    this.load.image(
      "fondo_sello",
      "assets/imagenes/complementos/fondo_sello.png"
    );

    this.load.image("casilla", "assets/imagenes/complementos/casilla.png");
    this.load.image("tilde", "assets/imagenes/complementos/tilde.png");

    this.load.image("hugo", "assets/imagenes/personajes/hugo.png");

    this.load.image(
      "fichaFotoTuto",
      "assets/imagenes/personajes/paciente_01a_ficha.png"
    );

    this.load.image(
      "fichaFoto1",
      "assets/imagenes/personajes/paciente_02a_ficha.png"
    );
    this.load.image(
      "fichaFoto2",
      "assets/imagenes/personajes/paciente_03a_ficha.png"
    );
    this.load.image(
      "fichaFoto3",
      "assets/imagenes/personajes/paciente_04a_ficha.png"
    );
    this.load.image(
      "fichaFoto4",
      "assets/imagenes/personajes/paciente_05a_ficha.png"
    );

    this.load.image(
      "paciente_01",
      "assets/imagenes/personajes/paciente_01.png"
    );
    this.load.image(
      "paciente_01a",
      "assets/imagenes/personajes/paciente_01a.png"
    );
    this.load.image(
      "paciente_01a_s",
      "assets/imagenes/personajes/paciente_01a_s.png"
    );

    this.load.image(
      "paciente_02",
      "assets/imagenes/personajes/paciente_02.png"
    );
    this.load.image(
      "paciente_02a",
      "assets/imagenes/personajes/paciente_02a.png"
    );
    this.load.image(
      "paciente_02a_s",
      "assets/imagenes/personajes/paciente_02a_s.png"
    );

    this.load.image(
      "paciente_03",
      "assets/imagenes/personajes/paciente_03.png"
    );
    this.load.image(
      "paciente_03a",
      "assets/imagenes/personajes/paciente_03a.png"
    );
    this.load.image(
      "paciente_03a_s",
      "assets/imagenes/personajes/paciente_03a_s.png"
    );

    this.load.image(
      "paciente_04",
      "assets/imagenes/personajes/paciente_04.png"
    );
    this.load.image(
      "paciente_04a",
      "assets/imagenes/personajes/paciente_04a.png"
    );
    this.load.image(
      "paciente_04a_s",
      "assets/imagenes/personajes/paciente_04a_s.png"
    );

    this.load.image(
      "paciente_05",
      "assets/imagenes/personajes/paciente_05.png"
    );
    this.load.image(
      "paciente_05a",
      "assets/imagenes/personajes/paciente_05a.png"
    );
    this.load.image(
      "paciente_05a_s",
      "assets/imagenes/personajes/paciente_05a_s.png"
    );

    this.load.image("hitbox", "assets/imagenes/complementos/hitbox.png");
    this.load.image("hitbox2", "assets/imagenes/complementos/hitbox2.png");
    this.load.image("hitbox3", "assets/imagenes/complementos/hitbox3.png");

    this.load.image("libreta_s", "assets/imagenes/elementos/libreta_s.png");
    this.load.image("ficha_s", "assets/imagenes/elementos/ficha_s.png");
    this.load.image("infoB", "assets/imagenes/complementos/info.png");
    this.load.image("poster", "assets/imagenes/flotantes/poster.png");

    this.load.image("E", "assets/imagenes/calificaciones/E.png");
    this.load.image("B", "assets/imagenes/calificaciones/B.png");
    this.load.image("MB", "assets/imagenes/calificaciones/MB.png");
    this.load.image("S", "assets/imagenes/calificaciones/S.png");
    this.load.image("NS", "assets/imagenes/calificaciones/NS.png");
    this.load.image("0", "assets/imagenes/calificaciones/0.png");
    this.load.image("1", "assets/imagenes/calificaciones/1.png");
    this.load.image("2", "assets/imagenes/calificaciones/2.png");

    this.load.image(
      "excelente",
      "assets/imagenes/calificaciones/excelente.png"
    );
    this.load.image("muyBueno", "assets/imagenes/calificaciones/muyBueno.png");
    this.load.image("bueno", "assets/imagenes/calificaciones/bueno.png");
    this.load.image(
      "satisfactorio",
      "assets/imagenes/calificaciones/satisfactorio.png"
    );
    this.load.image(
      "noSatisfactorio",
      "assets/imagenes/calificaciones/noSatisfactorio.png"
    );

    this.load.json("sintomas", "assets/data/sintomas.json");

    this.load.json("es_ES", "assets/data/es_ES.json");
    this.load.json("en_EN", "assets/data/en_EN.json");
    this.load.json("pt_PT", "assets/data/pt_PT.json");

    this.load.on("progress", function (value) {
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(810, 523, 300 * value, 32);
      percentText.setText(parseInt(value * 100) + "%");
    });

    this.load.on("fileprogress", function (file) {
      assetText.setText("Loading asset: " + file.key);
    });

    this.load.on("complete", function () {
      carga = 1;
    });
  }
  update() {
    if (carga == 1) {
      this.scene.start("scene_Idioma");
      this.scene.sleep();
    }
  }
}
