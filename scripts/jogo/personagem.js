class Personagem{
    constructor(imagem){
      this.imagem = imagem;
      this.matriz = [
        [0,0],
        [220,0],
        [440,0],
        [660,0],
        [0, 270],
        [220,270],
        [440,270],
        [660,270],
        [0,540],
        [220,540],
        [440,540],
        [660,540],
        [0,810],
        [220,810],
        [440,810],
        [660,810],
      ];
      this.frameAtual = 0;
    }
    
    exibe(){
      let img = this.imagem;
      let dx = 0;
      let dy = height-135;
      let dWidth =110;
      let dHeight = 135;
      let sx = 220;
      let sy = 270;
      let sWidth = this.matriz[this.frameAtual][0];
      let sHeight = this.matriz[this.frameAtual][1];
      // image(this.imagem, 0, height-135, 110, 135, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1],220,270);
      image(img, dx, dy, dWidth, dHeight, sWidth, sHeight,sx,sy);
      this.anima()
    }
    
    anima(){
      this.frameAtual++;
      
      if(this.frameAtual >= this.matriz.length - 1){
        this.frameAtual = 0;
      }
    }
  }