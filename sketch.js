let imagemCenario;
let imagemPersonagem;
let cenario;
let somDoJogo;
let personagem;

function preload(){
  imagemCenario =   loadImage("imagens/cenario/floresta.png");
  imagemPersonagem = loadImage("imagens/personagem/correndo.png");
  somDoJogo = loadSound("sons/trilha_jogo.mp3");
}

function setup() {
  // createCanvas(400, 400);
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario,3);
  //quantidade de frames = velocidade do movimento do cenario
  personagem = new Personagem(imagemPersonagem);
  //-- executa só uma vez
  // somDoJogo.play();
  frameRate(40);
  // -- executa infinito
  somDoJogo.loop();
}

function draw() {
  // background(220);
  // background(200);
  // background(imagemCenario);
  // image(imagemCenario, -50, 0, width, height);
  //cópia do cenário fazendo andar
  // image(imagemCenario, width-48, 0, width, height);
  // image(imagemCenario, width-50, 0, width, height);
  //0 X / 0 Y / 220 Width / 270 Height
  //Primeiro vai chamar a imagem toda
  //Primeiro mudança do tamanho da imagem
  //Segunda vai pegar dentro da imagem toda o bruxinha         que está na posição 0 x e 0 y
  cenario.exibe();
  cenario.move();
  // somDoJogo.play();
  personagem.exibe();
}

