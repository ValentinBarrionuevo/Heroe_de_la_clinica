class mensajes extends Phaser.Scene {
  constructor() {
    super("mensajes");
  }
  create() {
    if (pacientes != 0) {
      if (charlando == 0) {
        if (dolCabSint == 1) {
          chatMostrar = chat_2 + chat_3;
          repetido = 1;
        } else if (congSint == 1) {
          chatMostrar = chat_2 + chat_4;
          repetido = 2;
        } else if (erupSint == 1) {
          chatMostrar = chat_2 + chat_5;
          repetido = 3;
        } else if (artSint == 1) {
          chatMostrar = chat_2 + chat_6;
          repetido = 4;
        } else if (dolMastSint == 1) {
          chatMostrar = chat_2 + chat_7;
          repetido = 5;
        } else if (dolMuscSint == 1) {
          chatMostrar = chat_2 + chat_8;
          repetido = 6;
        } else if (fatigaSint == 1) {
          chatMostrar = chat_2 + chat_9;
          repetido = 7;
        } else if (perApetSint == 1) {
          chatMostrar = chat_2 + chat_10;
          repetido = 8;
        } else if (cansSint == 1) {
          chatMostrar = chat_2 + chat_11;
          repetido = 9;
        }
        charlando = 1;

        //Rubeola-------------------------------------------------
      } else if (rub == 1) {
        if (charlando == 1) {
          if (congSint == 1) {
            if (repetido != 2) {
              console.log("congestion");
              chatMostrar = chat_4;
              if (erupSint == 1) {
                charlando = 2;
              } else if (artSint == 1) {
                charlando = 3;
              }
            }
          } else if (erupSint == 1) {
            if (repetido != 3) {
              console.log("erupcion");
              chatMostrar = chat_5;
              if (artSint == 1) {
                charlando = 3;
              }
            }
          } else if (artSint == 1) {
            console.log("articul");
            chatMostrar = chat_6;
          }
        } else if (charlando == 2) {
          if (erupSint == 1) {
            if (repetido != 3) {
              console.log("erupcion");
              chatMostrar = chat_5;
              if (artSint == 1) {
                charlando = 3;
              }
            }
          } else if (artSint == 1) {
            console.log("articul");
            chatMostrar = chat_6;
          }
        } else if (charlando == 3) {
          if (artSint == 1) {
            console.log("articul");
            chatMostrar = chat_6;
          }
        }
        //Paperas------------------------------------------------
      } else if (pap == 1) {
        if (charlando == 1) {
          if (dolMastSint == 1) {
            if (repetido != 5) {
              chatMostrar = chat_7;
              console.log("dolmast");
              if (dolMuscSint == 1) {
                charlando = 2;
              } else if (fatigaSint == 1) {
                charlando = 3;
              } else if (perApetSint == 1) {
                charlando = 4;
              }
            }
          } else if (dolMuscSint == 1) {
            if (repetido != 6) {
              console.log("dolmuscular");
              chatMostrar = chat_8;
              if (fatigaSint == 1) {
                charlando = 3;
              } else if (perApetSint == 1) {
                charlando = 4;
              }
            }
          } else if (fatigaSint == 1) {
            if (repetido != 7) {
              console.log("fatiga");
              chatMostrar = chat_9;
              if (perApetSint == 1) {
                charlando = 4;
              }
            }
          } else if (perApetSint == 1) {
            if (repetido != 8) {
              console.log("perdiapet");
              chatMostrar = chat_10;
            }
          }
        } else if (charlando == 2) {
          if (dolMuscSint == 1) {
            if (repetido != 6) {
              console.log("dolmuscular");
              chatMostrar = chat_8;
              if (fatigaSint == 1) {
                charlando = 3;
              } else if (perApetSint == 1) {
                charlando = 4;
              }
            }
          } else if (fatigaSint == 1) {
            if (repetido != 7) {
              console.log("fatiga");
              chatMostrar = chat_9;
              if (perApetSint == 1) {
                charlando = 4;
              }
            }
          } else if (perApetSint == 1) {
            if (repetido != 8) {
              console.log("perdiapet");
              chatMostrar = chat_10;
            }
          }
        } else if (charlando == 3) {
          if (fatigaSint == 1) {
            if (repetido != 7) {
              console.log("fatiga");
              chatMostrar = chat_9;
              if (perApetSint == 1) {
                charlando = 4;
              }
            }
          } else if (perApetSint == 1) {
            if (repetido != 8) {
              console.log("perdiapet");
              chatMostrar = chat_10;
            }
          }
        } else if (charlando == 4) {
          if (perApetSint == 1) {
            if (repetido != 8) {
              console.log("perdiapet");
              chatMostrar = chat_10;
            }
          }
        }
        //Varicela----------------------------------------------
      } else if (vari == 1) {
        if (charlando == 1) {
          if (perApetSint == 1) {
            if (repetido != 8) {
              chatMostrar = chat_10;
              console.log("perdiapet");
              charlando = 2;
            }
          } else if (cansSint == 1) {
            if (repetido != 9) {
              charlando = 2;
              console.log("cansancio");
              chatMostrar = chat_11;
            }
          }
        } else if (charlando == 2) {
          if (repetido != 9) {
            if (cansSint == 1) {
              console.log("cansancio");
              chatMostrar = chat_11;
            }
          }
        }
      }
    } else {
      if (charlando == 0) {
        charlando = 1;
        chatMostrar = chat_2;
      } else if (charlando == 1) {
        charlando = 2;
        chatMostrar = chat_3;
      } else if (charlando == 2) {
        charlando = 3;
        chatMostrar = chat_4;
      } else if (charlando == 3) {
        charlando = 4;
        chatMostrar = chat_5;
      } else if (charlando == 4) {
        charlando = 5;
        chatMostrar = chat_6;
      } else if (charlando == 5) {
        charlando = 6;
        chatMostrar = chat_7;
      } else if (charlando == 6) {
        chatMostrar = chat_8;
      }
    }
  }
}